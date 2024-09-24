<script>
import { speakers } from '../../store.js';
export default {
    name: 'AppSpeaker',
    data() {
        return {
            speakers: Object.values(speakers),
            currentIndex: 0,
        };
    },
    computed: {
        displayedSpeakers() {
            return this.speakers.slice(this.currentIndex, this.currentIndex + 4);
        },
    },
    methods: {
        nextSpeaker() {
            this.currentIndex += 1;
            if (this.currentIndex >= 5) {
            this.currentIndex = 0; 
            }
        },
        prevSpeaker() {
            this.currentIndex -= 1; 
        if (this.currentIndex < 0) {
            this.currentIndex = 4; 
        }
    },
},
};
</script>

<template>
    <div class="h-192">
        <div class=" w-2/3 mx-auto">
            <div class="flex justify-between pt-20">
                <h2 class="font-bold text-5xl text-gray-800">SPEAKERS</h2>
                <div class="flex gap-2">
                    <i @click="prevSpeaker" class="fa-solid fa-chevron-left cube bg-reds text-white flex justify-center items-center cursor-pointer"></i>
                    <i @click="nextSpeaker" class="fa-solid fa-chevron-right cube bg-reds text-white flex justify-center items-center cursor-pointer"></i>
                </div>
            </div>
            <div class="mt-10 flex justify-between">
                <div v-for="(speaker, index) in displayedSpeakers" :key="index" class="speaker-card">
                    <div class="relative">
                        <img :src="speaker.image" alt="speaker image" class=" rounded w-72" />
                        <div class="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-80 bg-reds">
                            <i class="fa-brands fa-twitter text-xl mx-2 text-white cursor-pointer"></i>
                            <i class="fa-brands fa-facebook text-xl mx-2 text-white cursor-pointer"></i>
                            <i class="fa-brands fa-linkedin text-xl mx-2 text-white cursor-pointer"></i>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-center my-4">{{ speaker.name }} {{ speaker.surname }}</h3>
                    <em class=" text-gray-500 text-sm text-center block">{{ speaker.overview }}</em>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.h-192 {
    background-color: #F3F3F3;
    height: 500px;
}

.cube { 
    border-radius: 4px;
    width: 40px;
    height: 40px;
}
</style>