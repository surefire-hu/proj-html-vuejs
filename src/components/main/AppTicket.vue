<script>
import { tickets } from '../../store.js';
export default {
    name:'AppTicket',
    data() {
        return {
            tickets,
        }
    }
}
</script>

<template>
<div class="h-192 bground text-center flex flex-col mt-14">
    <h2 class="font-bold text-4xl text-white mt-14">TICKETS</h2>
    <div class="h-192 flex gap-8 justify-center items-center">
        <div v-for="(ticket,index) in tickets" :key="index">
            <div class="bg-gray-200 relative overflow-hidden">
                <h3 class="font-bold text-xl pt-8 width">{{ ticket.title }}</h3>
                <p class="text-reds font-bold pb-4">{{ ticket.price }}</p>
                <span class="bg-reds text-white rotate-45 absolute top-5 -right-10 font-serif text-sm" :class="ticket.class">{{ ticket.featured }}</span>
            </div>
            <div class="flex flex-col gap-6 font-serif text-gray-500 px-14 py-8 bg-white">
                <p v-for="(content,index) in ticket.contents">{{ content.access }}</p>
            </div>
            <div class="bg-reds text-white h-12 flex justify-center items-center font-bold text-sm">
                <button>BOOK NOW</button>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.bground {
    background-image: url("/ticket-bg.jpg");
}
.h-192 {
    height: 70vh;
}
</style>