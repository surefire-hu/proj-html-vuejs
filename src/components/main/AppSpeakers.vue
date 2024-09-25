<script>
import { speakers } from '../../store.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    name: 'AppSpeaker',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            speakers: Object.values(speakers),
            swiper: null,
        };
    },
    methods: {
        nextSpeaker() {
            if (this.swiper) {
                const isLastSlide = this.swiper.isEnd;
                if (isLastSlide) {
                    this.swiper.slideTo(0); 
                } else {
                    this.swiper.slideNext(); 
                }
            }
        },
        prevSpeaker() {
            if (this.swiper) {
                const isFirstSlide = this.swiper.isBeginning; 
                if (isFirstSlide) {
                    this.swiper.slideTo(this.speakers.length - 1); 
                } else {
                    this.swiper.slidePrev(); 
                }
            }
        },
        onSwiper(swiper) {
            this.swiper = swiper; 
        },
    },
};
</script>

<template>
    <div class="h-192">
        <div class="w-2/3 mx-auto">
            <div class="flex justify-between pt-20">
                <h2 class="font-bold text-5xl text-gray-800">SPEAKERS</h2>
                <div class="flex gap-2">
                    <i @click="prevSpeaker" class="fa-solid fa-chevron-left cube bg-reds text-white flex justify-center items-center cursor-pointer"></i>
                    <i @click="nextSpeaker" class="fa-solid fa-chevron-right cube bg-reds text-white flex justify-center items-center cursor-pointer"></i>
                </div>
            </div>
            <div class="mt-10">
                <swiper 
                    :slides-per-view="4" 
                    :space-between="30"
                    :autoplay="{ 
                    delay: 2000, 
                    disableOnInteraction: false }" 
                    @swiper="onSwiper"
                >
                    <swiper-slide v-for="(speaker, index) in speakers" :key="index" class="speaker-card">
                        <div class="relative">
                            <img :src="speaker.image" alt="speaker image" class="rounded w-72" />
                            <div class="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-80 bg-reds">
                                <i class="fa-brands fa-twitter text-xl mx-2 text-white cursor-pointer"></i>
                                <i class="fa-brands fa-facebook text-xl mx-2 text-white cursor-pointer"></i>
                                <i class="fa-brands fa-linkedin text-xl mx-2 text-white cursor-pointer"></i>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-center my-4">{{ speaker.name }} {{ speaker.surname }}</h3>
                        <em class="text-gray-500 text-sm text-center block">{{ speaker.overview }}</em>
                    </swiper-slide>
                </swiper>
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