<script setup>
import { useMutations } from "vuex-composition-helpers";

const { news } = defineProps(['news']);

import ExternalLink from "../components/ExternalLink.vue"
import CloseButton from "../components/CloseButton.vue"

const { HIDE_ITEMS } = useMutations(['HIDE_ITEMS']);

// TODO: watch for rating changes
// const unwatch = watch(news, async (newNews, oldNews) => {
//     console.log(oldNews, newNews);
// }, { deep: true })
// onUnmounted(() => {
//     unwatch();
// })
</script>

<template>
    <div class="flex flex-col bg-white border shadow-sm rounded p-4 md:p-5 relative">
        <h3 class="text-lg font-bold text-gray-800 pr-3">{{ news.title }}</h3>

        <p class="my-2 text-gray-800">
            {{ news.content }}
        </p>

        <CloseButton class="top-2 right-2" v-on:hideNewsItem="HIDE_ITEMS(news.id)"/>
        <ExternalLink :link="news.original_url" class="bottom-4 right-4"/>

        <router-link :to="{ name: 'news', params: { slug: news.slug } }"
                     class="mt-auto inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700">
            Read more
            <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                      stroke="currentColor"
                      stroke-width="2" stroke-linecap="round"/>
            </svg>
        </router-link>
    </div>
</template>
