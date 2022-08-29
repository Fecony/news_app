<script setup>
import { useRouter } from "vue-router";

const router = useRouter()
</script>

<template>
    <button @click="() => router.back()"
            class="absolute top-1 md:top-6 md:left-1 p-1 flex flex-shrink-0 justify-center items-center rounded-md bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
             class="w-5 h-5" fill="currentColor">
            <g data-name="Layer 2">
                <path
                    d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                    data-name="arrow-ios-back"/>
            </g>
        </svg>
    </button>
</template>