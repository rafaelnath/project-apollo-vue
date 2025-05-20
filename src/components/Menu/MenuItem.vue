<script setup lang="ts">
import { type MenuProps, type MenuEmits } from '@/types';
import SubMenu from './SubMenu.vue';
import { ref } from 'vue';

const props = defineProps<MenuProps>()
const emit = defineEmits<MenuEmits>()

const showSubMenu = ref(true)

const handleClick = () => {
    if (props.childs) {
        showSubMenu.value = !showSubMenu.value
        console.log(showSubMenu.value)
    } else {
        emit('onClick', props.name)
    }
}

const handleChildClick = (name: string) => {
    emit('onClick', name)
}
</script>
<template>
    <div class="w-full text-sm">
        <div class="w-full h-8 flex items-center gap-2 p-2 rounded-sm hover:bg-zinc-700" @click="handleClick">
            <div class="w-4 h-4 bg-on-surface"></div>
            <p class="grow">{{ text }}</p>
            <div class="w-4 h-4 bg-on-surface" v-if="childs"></div>
        </div>
        <div class="w-full px-3.5" v-if="childs && showSubMenu">
            <div class="w-full px-2.5 py-0.5 flex flex-col gap-1 border-l border-border">
                <SubMenu :name="child.name" :text="child.text" v-for="(child, index) in childs" :key="index"
                    @on-click="handleChildClick" />
            </div>
        </div>
    </div>
</template>