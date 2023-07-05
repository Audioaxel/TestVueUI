<template>
  <div class="page01">
    <h1>This is page01</h1>

    <TestingBasics />

    <CopyPasteAndLook />
    

  </div>
</template>


<script setup lang="ts">
import TestingBasics from '../components/playground/TestingBasics.vue';
import CopyPasteAndLook from '../components/playground/CopyPasteAndLook.vue';
</script>


<style>
@media (min-width: 1024px) {
  .page01 {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
