<script>
import AppQuestion from './AppQuestion.vue'
import AppTime from './AppTime.vue'
import AppSpeakers from './AppSpeakers.vue'
export default {
    name: 'Main',
    components: {
        AppQuestion,
        AppTime,
        AppSpeakers,
    }
};
</script>

<template>
    <AppQuestion/>
    <AppTime/>
    <AppSpeakers/>
</template>

<style>

</style>