<script setup>
import NewsCard from './NewsCard.vue'
import EmptyList from './EmptyList.vue'

const { items } = defineProps(['items'])
</script>

<template>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4" v-if="items && items.length">
        <NewsCard v-for="item in items" :key="item.id" :news="item"/>
    </div>

    <EmptyList v-else/>
</template>
