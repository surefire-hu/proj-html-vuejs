<script>
import { accordions } from '../../store.js';
export default {
    data() {
        return {
            accordions,
            openIndex: null,
        };
    },
    methods: {
        toggleAccordion(index) {
            this.openIndex = this.openIndex === index ? null : index; 
        },
    },
};
</script>

<template>
<div>
    <div class="w-2/3 mx-auto flex gap-6">
        <div class="w-1/2">
            <h2 class="my-8 text-xl font-bold text-gray-900">PRESENTATION</h2>
            <img src="/2-item-1.jpg" alt="">
        </div>
        <div class="w-1/2">
            <h2 class="my-8 text-xl font-bold text-gray-900">FAQ</h2>
            <div class="accordion">
                <div v-for="(accordion, index) in accordions" :key="index">
                    <div @click="toggleAccordion(index)" class="flex items-center cursor-pointer">
                        <span class="mr-4 text-white">
                            <i v-if="openIndex !== index" class="fas fa-plus w-7 h-7 bg-gray-300 flex justify-center items-center"></i>
                            <i v-else class="fas fa-minus bg-reds w-7 h-7 flex justify-center items-center"></i>
                        </span>
                        <h2 class="font-bold text-gray-600">{{ accordion.title }}</h2>
                    </div>
                    <div v-if="openIndex === index" class="py-8 px-12">
                        <p>{{ accordion.content }}</p>
                    </div>
                    <hr class="my-3">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>