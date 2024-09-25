<script>
import { recents } from '../../store.js';
import 'animate.css';
export default {
    name: 'AppRecent',
    data() {
        return {
            recents,
        };
    },
}
</script>

<template>
    <div class="w-2/3 mx-auto">
        <div class="flex justify-between">
            <h2 class="font-bold text-2xl my-10">RECENT NEWS</h2>
            <em class="text-reds my-10 font-serif">Read All News</em>
        </div>
        <div class="flex gap-8">
            <div v-for="(recent,index) in recents" :key="index" class="w-1/3 animate__animated animate__fadeInUp animate__delay-5s">
                <div class="relative my-4">
                    <img :src="recent.image" alt="image" class="w-full"> 
                    <span :class="recent.sticky"><i :class="recent.stickyPhone"></i> {{ recent.stickyText }}</span>
                </div>
                <span class="text-gray-300 my-4">{{ recent.date }}</span>
                <h2 class="font-bold text-2xl mb-8">{{ recent.title }}</h2>
                <p class="text-gray-400 mb-4">{{ recent.overview }}</p>
                <em class="text-reds font-serif">Read More</em>
            </div>
        </div>
    </div>
</template>