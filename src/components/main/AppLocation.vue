<script>
export default {
    name: 'AppLocation',
}
</script>

<template>
    <div class="text-white w-full mt-3 h-96 mb-3 flex flex-col location justify-center items-center">
        <h2 class="font-bold text-4xl m-10">LOCATION</h2>
        <h3 class="font-bold text-2xl mb-2">GD BUILDING, GRAND CONFERENCE ROOM</h3>
        <div class="flex mb-6">
            <span class="text-sm font-light text-gray-300"><i class="fa-solid fa-location-arrow"></i>11 GD Building, River Mall, New york, USA 8879</span>
        </div>
        <p class="text-reds mb-10">Check For Accommodations Here</p>
        <div class="w-1/4">
            <hr>
            <div class="flex justify-between">
                <span class=" font-medium"><i class="fa-solid fa-phone pr-4"></i>+1-112-222-3344</span>
                <span class="font-medium"><i class="fa-solid fa-envelope pr-4"></i>Contact@TheKeynoteTheme.com</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.location {
    background-image: url(/location-bg.jpg);
}
</style>