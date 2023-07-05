<template>  
  <n-space>
    <n-button
    size="large"
    type="primary"
    :color="color"
    >
      <slot name="content"/>
    </n-button>
  </n-space>
</template>


<script setup lang="ts">
import { NButton, NSpace } from 'naive-ui';
import { EButtonColor } from '@/components/enums/EButtonColor';

const props = defineProps ({
  color: {
    type: String as () => EButtonColor, 
    default: EButtonColor.Green
  }
});
</script>
