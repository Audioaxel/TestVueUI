<template>
  <main>

    <SectionBase>
      <template #content>
        <h1>This is an home page</h1>
      </template>
    </SectionBase>

    <SectionBase section="section-c">
      <template #content>
        <h3>Section02</h3>
      </template>
    </SectionBase>

    <SectionBase section="section-b">
      <template #content>
        <h3>Section03</h3>
      </template>
    </SectionBase>

  </main>
</template>


<script setup lang="ts">
import SectionBase from '@/components/layout/SectionBase.vue';
</script>
