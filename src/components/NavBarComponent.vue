<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{menus: {to:string, label:string}[]}>()
</script>

<template>
  <div class="flex justify-between shadow-xl px-6">
    <div class="p-6 font-bold text-3xl text-transparent bg-clip-text  bg-gradient-to-r from-red-400 to-pink-900">Logo</div>
    <ul class="flex justify-around">
        <li class="btn btn-ghost p-6 text-xl text-transparent bg-clip-text bg-gradient-to-r font-bold from-red-400 to-pink-900 " v-for="(nav, index) of menus" :key="index">
        <RouterLink :to="nav.to">{{ nav.label }}</RouterLink>
        </li>
    </ul>
  </div>    
</template>

<style scoped></style>
