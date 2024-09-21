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
    <div class="flex justify-between items-center p-2 bg-background text-white">
        <div class="flex items-center">
      <img src="/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed2486.svg" alt="Logo" class="h-4 ml-5" />
    </div>
    <button @click="buyNow" class="border-b-green-900 border-b-2 bg-greenBtn hover:bg-Hgreen text-white px-4 py-1 my-1 mr-2 rounded text-sm">
      Buy Now
    </button>
    </div>
    <hr class="border-0 h-0.5 bg-black">
    <div class="bg-backgroundBottom">
    <div class="w-3/6 mx-auto flex justify-between items-center text-white">
    <div class="flex items-center">
        <i class="fas fa-cube fa-xl mr-8"></i> 
        <div class="mr-8 bg-buttonG h-12 flex items-center">
        <span class="ml-2 p-2 m-8 text-gray-300">Thekeynote</span>
        <i class="fa-solid fa-bars text-gray-300 p-4"></i>
    </div>
        <span class="text-sm text-gray-400">Subscribe to us</span>
    </div>
    <div class="flex items-center">
        <button class="ml-4 bg-button text-white h-12 px-7 text-sm">
        <i class="fa-solid fa-cart-shopping mr-4 text-gray-300"></i>Purchase
        </button>
        <button class="ml-2 text-sm">
        <i class="fa-solid fa-xmark fa-xl mr-4 ml-2 text-gray-300"></i>Remove Frame
        </button>
    </div>
</div>
</div>
</template>

<style scoped>
</style>
