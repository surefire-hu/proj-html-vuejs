<script>
import { questions } from '../../store.js';

export default {
    name: 'AppQuestion',
    data() {
        return {
            questions,
        };
    },
};
</script>

<template>
    <div class="flex justify-evenly w-2/3 mx-auto my-8">
            <div v-for="(question, key) in questions" :key="key" class="">
                <div>
                    <i :class="question.class" class="fa-xl text-gray-400 pr-4"></i>
                    <h3 class="font-bold mx-3 my-4 inline-block">{{ question.title }}</h3>  
                </div>
                <p class="text-gray-400 text-sm mx-14 my-4 w-2/3">{{ question.overview }}</p>
                <a href="#" class="text-red-500 font-serif mx-14">{{ question.link }}</a>
            </div>
        </div>
</template>