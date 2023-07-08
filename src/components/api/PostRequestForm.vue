<template>
  <form @submit="handleSubmit">
    <n-space vertical>
      <n-input 
      type="text"
      v-model:value="inputModel.text"
      size="large" 
      placeholder="Gimme a Name"
      />
    </n-space>
    <n-space vertical>
      <n-input 
      type="text"
      v-model:value="inputModel.number"
      size="large" 
      placeholder="Gimme a Number"
      />
    </n-space>
    <ButtonBase 
    type="submit"
    class="button-base"
    :color="EButtonColor.Blue"
    >
      <template #content>
        Test Api Post
      </template>
    </ButtonBase>
  </form>

</template>


<script setup lang="ts">
import { NInput, NSpace } from 'naive-ui';
import { reactive } from 'vue';
import ButtonBase from '../layout/components/ButtonBase.vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import type { IUIFirstRequestModel } from './models/IUIFirstRequestModel';


const inputModel: IUIFirstRequestModel = reactive({
  text: "" || null,
  number: "" || null,
  reset() {
    this.text = null;
    this.number = null;
  }
});

const emit = defineEmits(["submitPostRequest"]);

const handleSubmit = (e: Event) => {
  e.preventDefault();

  emit("submitPostRequest", inputModel);
  inputModel.reset();
};


</script>