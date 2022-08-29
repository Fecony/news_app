<script setup>
import { useActions, useGetters } from "vuex-composition-helpers";
import { onMounted, onUnmounted, ref, watch } from "vue";
import NewsList from '../components/NewsList.vue'
import Loading from '../components/Loading.vue'

const { fetchNews } = useActions(['fetchNews']);
const { news } = useGetters(['news']);

let pollingId = ref(null);
let loading = ref(true);
let poolingInterval = ref(5000);

onMounted(() => {
    loadNews()
});

const loadNews = () => {
    loading.value = true;
    fetchNews();

    pollingId.value = setInterval(() => {
        loading.value = true;
        fetchNews();
        loading.value = false;

        console.log('pooling!: ', pollingId.value);
    }, poolingInterval.value || 5000);
}

watch(poolingInterval, () => {
    clearTimeout(pollingId.value);
    loadNews();
})

onUnmounted(() => clearTimeout(pollingId.value))
</script>

<template>
    <div class="sm:inline-flex sm:items-center space-y-2 mb-3 sm:space-y-0 sm:space-x-3 w-full">
        <input type="text" id="pooling-interval"
               class="py-2 px-3 mb-2 block w-min border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
               placeholder="Data pooling (ms)"
               v-model.number="poolingInterval"
        >
        <p class="text-sm text-gray-500 mt-2" id="hs-inline-input-helper-text">Pooling Interval (ms)</p>
    </div>

    <Loading v-if="loading && news.length === 0"/>
    <NewsList v-else :items="news"/>
</template>
