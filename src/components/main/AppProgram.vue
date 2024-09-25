<script>
import { programs } from '../../store.js';
import 'animate.css';
export default {
        name: 'AppProgram',
    data() {
        return {
            programs,
            currentIndex: 0,
        };
    },
};
</script>

<template>
    <div >
        <div class="w-2/3 mx-auto">
            <div class="flex items-center">
                <h2 class="w-1/6 font-extrabold text-4xl pt-28 text-backgroundBottom">PROGRAM</h2>
                <p class="w-4/6 pt-28 text-gray-400 px-10">
                    This conference run through all 4 days from 23 - 26 May 2016.<br>
                    We also provide free lunch and coffee break in each day.
                </p>
                <em class="w-1/6 pt-28 text-reds font-pretty font-serif text-end">View Full Program</em>
            </div>
        </div>
        <div class="w-2/3 mx-auto">
            <div class="program">
                <div class="flex justify-center mt-20">
                    <div v-for="(program, index) in programs" :key="index" 
                        @click="index < programs.length - 1 ? currentIndex = index : null" 
                        class="cursor-pointer w-1/6 h-20 flex flex-col justify-center items-center font-bold text-white border-l border-red-700" 
                        :class="{'bg-red-700': currentIndex === index, 'bg-reds': currentIndex !== index,
                            'cursor-default' : index === programs.length - 1
                        }">
                        <p> {{ program.day }} </p>
                        <p class="text-sm font-normal"> {{ program.date }} </p>
                    </div>
                </div>
                <div v-for="(program, programIndex) in programs" :key="programIndex" v-show="currentIndex === programIndex" class="program-item flex flex-col h-auto bg-gray-100 animate__animated animate__fadeIn">
                    <div v-for="(session, sessionIndex) in program.sessions" :key="sessionIndex">
                        <div class="flex border-b w-11/12 mx-auto mt-10">
                            <div class="w-1/4 flex flex-col">
                                <div class="text-gray-400 font-light">
                                    <p class="pb-6"> <i :class="session.class"></i> {{ session.time }} </p>
                                    <p class="pb-6"> <i :class="session.aclass"></i> {{ session.room }} </p> 
                                    <p class="pb-1 text-reds" v-for="(speaker, idx) in session.speakers" :key="idx"> <i class="fa-solid fa-user text-gray-400"></i> {{ speaker.name }} </p>
                                </div> 
                            </div>
                            <div class="w-3/4 flex-col flex gap-4">
                                <p class="font-semibold uppercase text-2xl" :class="session.opclass">
                                    {{ session.description }}
                                </p>
                                <p class="text-gray-400" :class="session.iclass">
                                    {{ session.overview }}
                                </p>
                                <div class="flex">
                                    <img v-for="(speaker, idx) in session.speakers" :key="idx" :src="speaker.image" :alt="speaker.image" class="w-10 h-10 rounded mr-2 mb-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>