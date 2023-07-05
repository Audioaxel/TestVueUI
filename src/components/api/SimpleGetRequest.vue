<template>
  <ButtonBase 
  :color="EButtonColor.Red"
  @click="handleApiCall"
  >
    <template #content>
      Test Api Get02
      <h4> {{ getResponse.responseString }} </h4>
    </template>
  </ButtonBase>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import ButtonBase from '../layout/components/ButtonBase.vue';

const getResponse = reactive({
  responseString: "nix"
});

const handleApiCall = () => {
  fetch('http://localhost:5184')
    .then(response => response.json())
    .then(data => getResponse.responseString = JSON.stringify(data));    
}
</script>