<template>  
  <n-space>
    <n-button
    :attr-type="props.type"
    size="large"
    type="primary"
    :color="color"
    >
      <slot name="content"/>
    </n-button>
  </n-space>
</template>


<script setup lang="ts">
import { type PropType } from 'vue';
import { NButton, NSpace } from 'naive-ui';
import { EButtonColor } from '@/components/enums/EButtonColor';

const props = defineProps ({
  color: {
    type: String as () => EButtonColor, 
    default: EButtonColor.Green
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value);
    }
  }
});
</script>
