<template>
  <ButtonBase 
  :color="EButtonColor.Red"
  @click="request"
  >
    <template #content>
      Test Api Get02
      <h4> {{ refTest }} </h4>
    </template>
  </ButtonBase>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import ButtonBase from '../layout/components/ButtonBase.vue';
import { SimpleRequestHandler } from './SimpleRequestHandler';

const refTest = ref("nix");

const handler = new SimpleRequestHandler();
const request = () => {
  handler.handleApiGet()
  .then(result => {
    refTest.value = result;
    console.log(result);
  })
  .catch(error => {
    refTest.value = "Error";
    console.error(error);
  });
};

</script>