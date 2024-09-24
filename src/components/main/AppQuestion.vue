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
                    <i :class="question.class" class="fa-xl text-gray-400 mr-4 w-7"></i>
                    <h3 class="font-bold ml-3 my-4 inline-block">{{ question.title }}</h3>  
                </div>
                <p class="text-gray-400 text-sm ml-14 my-4 w-2/3">{{ question.overview }}</p>
                <a href="#" class="text-reds font-serif ml-14"><em>{{ question.link }}</em></a>
            </div>
        </div>
</template>