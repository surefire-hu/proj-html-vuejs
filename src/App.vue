<script>
import AppHeader from './components/header/AppHeader.vue'
import AppMain from './components/main/AppMain.vue'

export default {
  data() {
    return { 
    }
  },
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
    
    <AppHeader/>
    <AppMain/>

</template>

<style scoped>
main {
  text-align: center;
}
</style>