<script>
import AppHeader from './components/header/AppHeader.vue'
import AppMain from './components/main/AppMain.vue'
import AppFooter from './components/footer/AppFooter.vue'

export default {
  data() {
    return { 
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<template>
    
    <AppHeader/>
    <AppMain/>
    <AppFooter/>

</template>

<style scoped>
main {
  text-align: center;
}
</style>