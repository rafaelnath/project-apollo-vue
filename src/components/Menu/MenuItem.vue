<script setup lang="ts">
import SubMenu from './SubMenu.vue';
</script>
<template>
    <div class="w-full text-sm">
        <div class="w-full h-8 flex items-center gap-2 p-2">
            <div class="w-4 h-4 bg-zinc-100"></div>
            <p class="grow">Item Directory</p>
            <div class="w-4 h-4 bg-zinc-100"></div>
        </div>
        <!-- Sub Menu -->
        <div class="w-full px-3.5">
            <div class="w-full px-2.5 py-0.5 flex flex-col gap-1 border-l border-zinc-800">
                <SubMenu />
                <SubMenu />
            </div>
        </div>
    </div>
</template>