<script setup lang="ts">
import { type MenuProps } from '@/types';
import MenuGroup from './Menu/MenuGroup.vue';
import Switcher from './Switcher.vue';


const financeSubMenus: MenuProps[] = [
    {
        name: 'journals',
        text: 'Journals'
    },
    {
        name: 'coa',
        text: 'Chart of Accounts'
    }
]

const financeCenterMenus: MenuProps[] = [
    {
        name: 'finance',
        text: "Finance",
        childs: financeSubMenus
    },
    {
        name: 'balance',
        text: "Balance Overview"
    }
]

const menuGroups: MenuProps[] = [
    {
        name: 'financeCenter',
        childs: financeCenterMenus
    }
]

const pageList = {
    journals: '/journals'
}

const goToPage = (name: string) => {
    window.alert(pageList[name as keyof typeof pageList] ?? '404 not found')
}

</script>
<template>
    <div class="w-[260px] h-full flex flex-col bg-zinc-900">
        <div class="w-full h-16 p-2">
            <Switcher />
        </div>
        <div class="w-full grow">
            <MenuGroup :="group" v-for="(group, index) in menuGroups" :key="index" @on-click="goToPage" />
        </div>
        <div class="w-full h-16 p-2">
            <Switcher />
        </div>
    </div>
</template>