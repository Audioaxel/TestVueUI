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
        <SimpleGetRequest />
      </template>
    </SectionBase>

    <SectionBase :color="ESectionColor.Yellow">
      <template #content>
        <h3>Section03</h3>
      </template>
    </SectionBase>

  </main>
</template>


<script setup lang="ts">
import { ESectionColor } from '@/components/enums/ESectionColor';

import SectionBase from '@/components/layout/SectionBase.vue';
import SimpleGetRequest from '@/components/api/SimpleGetRequest.vue';
</script>
