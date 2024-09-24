<script>
import { sponsors } from '../../store.js';
export default {
    data() {
        return {
            sponsors,
        };
    }
};
</script>

<template>
    <div class="flex justify-center items-center flex-col bg-gray-100 my-20">
        <div>
            <h2 class="uppercase font-bold text-4xl text-center p-8">Sponsors</h2>
            <p class="text-center pb-8 text-gray-400">Maecenas faucibus mollis interdum. Nullam id dolor <br>
                id nibh ultricies vehicula ut id elit.
            </p>
        </div>
        <div class="flex gap-8 py-8">
            <img v-for="(sponsor,index) in sponsors" :src="sponsor.image" :alt="sponsor.content" class="cursor-pointer">
        </div>
    </div>
</template>

<style scoped>
</style>