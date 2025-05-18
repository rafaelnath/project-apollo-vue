<script setup lang="ts">
import Sidebar from '../Sidebar.vue';
</script>
<template>
    <div class="w-full h-lvh flex bg-zinc-700 gap-0.25">
        <Sidebar></Sidebar>
        <div class="grow h-full flex flex-col bg-zinc-950 px-6">
            <div class="w-full h-16 flex items-center bg-zinc-400 gap-6">
                <div class="w-6 h-6 bg-zinc-200"></div>
            </div>
            <div class="w-full grow">
                <RouterView />
            </div>
        </div>
    </div>
</template>