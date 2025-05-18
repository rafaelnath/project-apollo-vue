<script setup lang="ts">
import { type MenuProps, type MenuEmits } from '@/types';
import MenuItem from './MenuItem.vue';
defineProps<MenuProps>()
const emit = defineEmits<MenuEmits>()

const handleClick = (name: string) => {
    emit('onClick', name)
}
</script>
<template>
    <div class="w-full p-2">
        <div class="w-full h-8 flex items-center gap-2 p-2" v-if="text">
            <p class="text-xs">{{ text }}</p>
        </div>
        <MenuItem :="child" v-for="(child, index) in childs" :key="index" @on-click="handleClick" />
    </div>
</template>