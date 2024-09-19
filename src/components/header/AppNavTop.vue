<script>
export default {
    name: 'AppNavTop',
    methods: {
        buyNow() {
            console.log('Acquisto effettuato!');
        }
    }
};
</script>

<template>
    <navTop class="flex justify-between items-center p-2 bg-background text-white">
        <div class="flex items-center">
      <img src="/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed2486.svg" alt="Logo" class="h-4 ml-5" />
    </div>
    <button @click="buyNow" class="bg-greenBtn hover:bg-Hgreen text-white px-4 py-1 my-1 mr-2 rounded text-sm">
      Buy Now
    </button>
    </navTop>
    <hr class="border-0 h-0.5 bg-black">
    <div class="bg-backgroundBottom">
    <div class="w-3/6 mx-auto flex justify-between items-center text-white">
    <div class="flex items-center">
        <i class="fas fa-cube"></i> <!-- Icona -->
        <span class="ml-2 p-2">Thekeynote</span>
        <span>Subscribe to us</span>
    </div>
    <div class="flex items-center">
        <button class="ml-4 bg-button text-white h-12 px-7">Purchase</button>
        <button class="ml-2 text-gray-400 hover:text-white">Remove Frame</button>
    </div>
</div>
</div>
</template>

<style scoped>
</style>
