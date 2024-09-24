<script>
import { footer } from '../../store.js';
export default {
    name:'AppFooterTop',
    data() {
        return{
            footer,
        };
    }
};
</script>

<template>
    <div class="bg-background flex items-center justify-center pb-20">
        <div class="w-2/3 mx-auto flex pt-10">
            <div class="pr-20">
                <h4 class="my-8 text-white font-bold">ABOUT US</h4>
                <p class="text-gray-300 text-xs">
                    Cum sociis natoque penatibus et <br>
                     magnis dis parturient montes,<br>
                     nascetur ridiculus mus.
                </p>
                <div class="flex text-white my-8 gap-2 fa-xl cursor-pointer">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-google-plus"></i>
                    <i class="fa-brands fa-square-pinterest"></i>
                    <i class="fa-brands fa-flickr"></i>
                </div>
            </div>
            <div class="pr-20">
                <h4 class="my-8 text-white font-bold">RECENT NEWS</h4>
                <ul class="font-extralight my-8 gap-2 cursor-pointer">
                    <li class="flex">
                        <i class="fa-solid fa-chevron-right pr-2 pb-4 text-gray-400 text-xs"></i>
                        <a href="#" class="hover:text-white text-gray-300 ">Sem Porta Mollis Parturient</a>
                    </li>
                    <li class="flex">
                        <i class="fa-solid fa-chevron-right pr-2 pb-4 text-gray-400 text-xs"></i>
                        <a href="#" class="hover:text-white text-gray-300 ">Nullam Lorem Mattis Purus</a>
                    </li>
                    <li class="flex">
                        <i class="fa-solid fa-chevron-right pr-2 pb-4 text-gray-400 text-xs"></i>
                        <a href="#" class="hover:text-white text-gray-300 ">Nibh Sem Sit Ullamcorper</a>
                    </li>
                    <li class="flex">
                        <i class="fa-solid fa-chevron-right pr-2 pb-4 text-gray-400 text-xs"></i>
                        <a href="#" class="hover:text-white text-gray-300 ">Donec luctus imperdiet</a>
                    </li>
                    <li class="flex">
                        <i class="fa-solid fa-chevron-right pr-2 pb-4 text-gray-400 text-xs"></i>
                        <a href="#" class="hover:text-white text-gray-300">Magna pars studiorum</a>
                    </li>
                </ul>
            </div>
            <div class="pr-20">
                <h4 class="my-8 text-white font-bold">GET YOUR START!</h4>
                <p class="text-gray-300 text-xs">
                    Book for your seat before it's too rate. <br>
                    We provide variety of ticket options.
                </p>
                <button class="bg-reds text-white px-6 py-3 my-6 border-b-red-700 border-b-4 font-bold text-xs">
                    CHECK OUT TICKETS!
                </button>
            </div>
            <div class="pr-20">
                <h4 class="my-8 text-white font-bold">GALLERY FROM LAST YEAR</h4>
                <div class="grid grid-cols-4 gap-2">
                    <img v-for="(image,index) in footer" :src="image.image" class="w-14">
                </div>
            </div>
        </div>
    </div>
</template>