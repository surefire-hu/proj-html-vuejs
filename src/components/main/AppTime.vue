<script>
export default {
    name: 'AppTime',
    data() {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    },
    mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      const targetDate = new Date('2019-05-23T00:00:00');
      
      const updateCountdown = () => {
        const now = new Date();
        const difference = now.getTime() - targetDate.getTime();
        
        this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      };
      
      updateCountdown();
      this.timer = setInterval(updateCountdown, 1000);
    }
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
}
</script>

<template>
    <div class="w-full h-192 flex flex-col items-center justify-center pt-10">
        <div class="flex gap-5">
            <div class="cube opacity-80">
                <p class="text-4xl font-bold">{{ days }}</p>
                <p class="text-lg">DAYS</p>
            </div>
            <div class="cube opacity-60">
                <p class="text-4xl font-bold">{{ hours }}</p>
                <p class="text-lg">HOURS</p>
            </div>
            <div class="cube opacity-40">
                <p class="text-4xl font-bold">{{ minutes }}</p>
                <p class="text-lg">MINUTES</p>
            </div>
            <div class="cube opacity-20">
                <p class="text-4xl font-bold">{{ seconds }}</p>
                <p class="text-lg">SECONDS</p>
            </div>
        </div>
        <p class="m-10 font-bold text-xl">SUBSCRIBE FOR UPDATES</p>
        <div class="flex items-center">
            <input
                type="email"
                v-model="email"
                placeholder="Please fill your email"
                class="pl-6 pr-40 py-3 border border-gray-300"
            />
            <button class="bg-red-600 text-white px-6 py-3 ml-8 border-b-red-700 border-b-4 font-bold">
                Subscribe
            </button>
        </div>
    </div>
</template>

<style scoped>
.h-192 {
    background-image: url('/coutdown-bg1.jpg');
    background-position: center;
    height: 500px;
}
.cube {
    background-color: #181818; 
    color: white;
    border-radius: 8px;
    text-align: center;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>