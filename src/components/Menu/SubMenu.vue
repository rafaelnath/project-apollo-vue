<script setup lang="ts">
import { type MenuProps, type MenuEmits } from '@/types';
defineProps<MenuProps>()
defineEmits<MenuEmits>()
</script>
<template>
    <div class="w-full h-7 px-2 flex justify-start items-center rounded-sm hover:bg-zinc-700"
        @click="$emit('onClick', name)">
        <p>{{ text }}</p>
    </div>
</template>