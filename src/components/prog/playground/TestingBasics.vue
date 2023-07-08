<template>

 <ButtonBase :color="EButtonColor.Red">
  <template #content>
   <p>Test Button</p>
  </template>
 </ButtonBase>

</template>


<script setup lang="ts">
import ButtonBase from '@//components/vueapp/ButtonBase.vue';
import { EButtonColor } from '@/components/vueapp/enums/EButtonColor';
</script>