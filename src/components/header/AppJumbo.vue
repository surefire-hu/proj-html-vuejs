<script>
export default {
    data() {
        return {
            currentIndex: 0,
            images: [
                'path/to/your/image1.jpg',
                'path/to/your/image2.jpg',
                'path/to/your/image3.jpg',
            ],
        };
    },
};
</script>
<template>
    <div class="relative">
        <div class="carousel">
            <div v-show="currentIndex === 0" class="carousel-item">
                <img src="/slider-1-bg.jpg" alt="Image 1" class="w-full h-192 object-cover" />
                <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 class="text-4xl mb-10">CONFERENCE ON</h1>
                    <h2 class="text-6xl font-extrabold mb-10">SOCIAL NETWORKS</h2>
                    <hr class="border-t-2 border-white w-3/12 mx-auto mt-4" />
                    <p class="text-lg font-bold mb-10">23 - 26 MAY 2019 / SAN FRANCISCO / 8 SPEAKERS</p>
                    <a href="#" class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded mt-4">REGISTER ONLINE</a>
                </div>
            </div>
            <div v-show="currentIndex === 1" class="carousel-item">
                <img src="/2-item-1.jpg" alt="Image 2" class="w-full h-192 object-cover" />
                <div class="absolute inset-0 flex flex-col ml-192 items-center justify-center text-white text-center">
                    <h1 class="text-8xl font-extrabold text-red-600 mb-4">MEET</h1>
                    <h2 class="text-6xl font-bold">8 FAMOUS SPEAKERS</h2>
                    <p class="mt-4 text-lg">With quality of knowledge</p>
                    <a href="#" class="bg-buttonB text-white font-bold py-3 px-6 rounded mt-4">MEET SPEAKERS</a>
                </div>
            </div>
            <div v-show="currentIndex === 2" class="carousel-item">
                <img src="/coutdown-bg1.jpg" alt="Image 3" class="w-full h-192 object-cover" />
                <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 class="text-6xl font-bold">SUPPORT VIDEO BACKGROUND</h1>
                    
                </div>
            </div>
        </div>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span v-for="(item, index) in images" :key="index" 
                  @click="currentIndex = index" 
                  class="cursor-pointer w-3 h-3 rounded-full" 
                  :class="{'bg-white': currentIndex === index, 'bg-gray-500': currentIndex !== index}"></span>
        </div>
    </div>
</template>

<style scoped>
.carousel-item {
    transition: opacity 0.5s ease;
}
.h-192 {
    height: 600px;
}
.ml-192 {
    margin-left: 600px;
}
</style>