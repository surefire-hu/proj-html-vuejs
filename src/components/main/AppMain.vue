<script>
import AppQuestion from './AppQuestion.vue'
import AppProgram from './AppProgram.vue'
import AppTime from './AppTime.vue'
import AppSpeakers from './AppSpeakers.vue'
export default {
    name: 'Main',
    components: {
        AppQuestion,
        AppTime,
        AppSpeakers,
        AppProgram,
    }
};
</script>

<template>
    <AppQuestion/>
    <AppTime/>
    <AppSpeakers/>
    <AppProgram/>
</template>

<style>

</style>