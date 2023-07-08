<template>
  <main>

    <SectionBase title="">
      <template #content>
        <h1>My awesome Vue-Page, lul!</h1>
      </template>
    </SectionBase>

    <SectionBase
    title="Ich probier mal was" 
    :color="ESectionColor.Green"
    >
      <template #content>

      </template>
    </SectionBase>

    <SectionBase :color="ESectionColor.Yellow">
      <template #content>
        <RequestComponent />
      </template>
    </SectionBase>

  </main>
</template>


<script setup lang="ts">
import { ESectionColor } from '@/components/vueapp/enums/ESectionColor';

import SectionBase from '@/components/vueapp/layout/SectionBase.vue';
import RequestComponent from '@/components/prog/api/components/RequestComponent.vue';
</script>
