<script setup>
import { useRoute } from "vue-router";
import { useActions, useState } from "vuex-composition-helpers";
import { onMounted } from "vue";

import BackButton from "../components/BackButton.vue"
import ExternalLink from "../components/ExternalLink.vue"
import Loading from '../components/Loading.vue'

const route = useRoute();

const { fetchCurrentNewsItem } = useActions(['fetchCurrentNewsItem']);
const { currentNewsItem } = useState(['currentNewsItem']);

onMounted(() => {
    fetchCurrentNewsItem(route.params.slug);
})
</script>

<template>
    <div
        class="flex flex-col md:flex-row h-full w-full overflow-hidden px-1 md:px-9 pt-9 pb-1 md:py-6 flex-row max-w-3xl mx-auto bg-white relative">
        <BackButton/>

        <template v-if="currentNewsItem">
            <ExternalLink class="top-1 left-10 md:top-14 md:left-1" :link="currentNewsItem.original_url"/>

            <img class="w-full basis-1/2 object-cover rounded"
                 :src="currentNewsItem.image_url"
                 alt="">

            <div class="my-4 md:px-5 overflow-scroll basis-1/2">
                <h1 class="text-xl font-bold text-gray-800">{{ currentNewsItem.title }}</h1>

                <p class="mt-1 text-gray-800 text-justify">
                    {{ currentNewsItem.content }}
                </p>
            </div>
        </template>

        <Loading v-else/>
    </div>
</template>
