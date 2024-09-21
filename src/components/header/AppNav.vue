<script>
import { links } from '../../store.js';

export default {
    name: 'AppNav',
    data() {
        return {
            links,
        };
    },
};
</script>

<template>
    <nav class="flex items-center justify-evenly p-9 bg-white shadow sticky top-sticky z-10">
        <div class="flex items-center">
            <img src="/logo.png" alt="Logo" class="h-5 mr-4" />
        </div>
        <div class="flex space-x-6">
            <a v-for="(link, key) in links" :key="key" :href="link.url" class="text-gray-400 text-sm font-bold hover:text-reds hover:border-b-2 hover:border-reds" :class="link.class">
                {{ link.text }}
            </a>
            <p class="text-gray-400 text-sm font-bold">I</p>
            <a href="#" class="text-gray-400 text-sm font-bold">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    </nav>
</template>

<style scoped>
    .top-sticky {
        top: 104px;
    }
</style>
