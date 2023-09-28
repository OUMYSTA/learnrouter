<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarComponent from '@/components/NavBarComponent.vue'
import { ref } from 'vue'
import TitleComponent from '@/components/TitleComponent.vue';
import WelcomeComponent from '@/components/WelcomeComponent.vue'
import CatBlogComponent from '@/components/CatBlogComponent.vue';
import LovecatComponent from '@/components/LovecatComponent.vue';

const menus = ref<{ to: string; label: string }[]>([
  { to: '/', label: 'Home' },
  { to: 'about', label: 'About' },
  {
    to: 'contact',
    label: 'Contact'
  }
])
</script>

<template>
  <header>
    <NavBarComponent :menus="menus" />
  </header>
  <div class="h-screen">
    <TitleComponent />
    <WelcomeComponent />
    <CatBlogComponent />
    <LovecatComponent />
    <RouterView />
  </div>
</template>

<style scoped></style>
