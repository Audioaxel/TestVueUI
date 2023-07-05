<template>
  <header>
    <div>
      <AppHeader />
    </div>
  </header>

  <RouterView />
</template>


<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
</script>