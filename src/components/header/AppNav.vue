<script>
export default {
    name: 'AppNav',
};
</script>

<template>
    <nav class="flex items-center justify-evenly p-9 bg-white shadow">
        <div class="flex items-center">
            <img src="/logo.png" alt="Logo" class="h-5 mr-4" />
        </div>
        <div class="flex space-x-6">
            <a href="#" class="text-red-500 text-sm font-bold">HOME</a>
            <a href="#" class="text-gray-400 text-sm font-bold">PAGES</a>
            <a href="#" class="text-gray-400 text-sm font-bold">PROGRAM</a>
            <a href="#" class="text-gray-400 text-sm font-bold">TICKETS</a>
            <a href="#" class="text-gray-400 text-sm font-bold">SPEAKERS</a>
            <a href="#" class="text-gray-400 text-sm font-bold">PAPERS</a>
            <a href="#" class="text-gray-400 text-sm font-bold">BLOG</a>
            <a href="#" class="text-gray-400 text-sm font-bold">SHORTCODES</a>
            <a href="#" class="text-gray-400 text-sm font-bold">I</a>
            <a href="#" class="text-gray-400 text-sm font-bold">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    </nav>
</template>