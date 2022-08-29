<script setup>

</script>

<template>
    <button @click="$emit('hideNewsItem')"
            class="absolute p-1 flex flex-shrink-0 justify-center items-center rounded hover:bg-gray-100 text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" class="w-5 h-5"
             fill="currentColor">
            <g data-name="Layer 2">
                <path
                    d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                    data-name="close"/>
            </g>
        </svg>
    </button>
</template>
