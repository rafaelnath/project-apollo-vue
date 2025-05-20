<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Sidebar from '../Sidebar.vue';

const isDarkTheme = useDark();
const toggleDarkTheme = useToggle(isDarkTheme);
</script>
<template>
    <div class="w-full h-lvh flex">
        <Sidebar></Sidebar>
        <div class="w-0.25 h-full bg-border"></div>
        <div class="grow h-full flex flex-col px-6">
            <div class="w-full h-16 flex justify-between items-center bg-zinc-400 gap-6">
                <div class="w-6 h-6 bg-zinc-200"></div>
                <div class="p-1 rounded-md bg-primary text-on-primary text-xs">
                    <button @click="toggleDarkTheme()">{{ isDarkTheme ? "Light" : "Dark" }}</button>
                </div>
            </div>
            <div class="w-full grow">
                <RouterView />
            </div>
        </div>
    </div>
</template>