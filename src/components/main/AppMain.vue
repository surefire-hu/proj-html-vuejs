<script>
import AppQuestion from './AppQuestion.vue'
import AppProgram from './AppProgram.vue'
import AppTime from './AppTime.vue'
import AppSpeakers from './AppSpeakers.vue'
import AppMap from './AppMap.vue'
import AppLocation from './AppLocation.vue'
import AppRecent from './AppRecent.vue'
import AppTicket from './AppTicket.vue'
import AppFaq from './AppFaq.vue'
import AppSponsor from './AppSponsor.vue'
export default {
    name: 'Main',
    components: {
        AppQuestion,
        AppTime,
        AppSpeakers,
        AppProgram,
        AppRecent,
        AppMap,
        AppLocation,
        AppTicket,
        AppFaq,
        AppSponsor,
    }
};
</script>

<template>
    <AppQuestion/>
    <AppTime/>
    <AppSpeakers/>
    <AppProgram/>
    <AppMap/>
    <AppLocation/>
    <AppRecent/>
    <AppTicket/>
    <AppFaq/>
    <AppSponsor/>
</template>

<style>

</style>