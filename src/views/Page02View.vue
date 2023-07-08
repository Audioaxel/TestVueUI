<template>
  <div class="page02">
    <h1>This is page02</h1>
    <RequestComponent />
  </div>
</template>


<script setup lang="ts">
import RequestComponent from '@/components/prog/api/components/RequestComponent.vue';
</script>

<style>
@media (min-width: 1024px) {
  .page01 {
    /* min-height: 100vh;
    display: flex;
    align-items: center; */
  }
}
</style>
