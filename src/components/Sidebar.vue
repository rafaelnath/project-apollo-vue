<script setup lang="ts">
import Switcher from './Switcher.vue';
import MenuGroup from './Menu/MenuGroup.vue';
</script>
<template>
    <div class="w-[260px] h-full flex flex-col bg-zinc-900">
        <!-- Sidebar head -->
        <div class="w-full h-16 p-2">
            <Switcher />
        </div>
        <div class="w-full grow">
            <MenuGroup />
            <MenuGroup />
        </div>
        <div class="w-full h-16 p-2">
            <Switcher />
        </div>
    </div>
</template>