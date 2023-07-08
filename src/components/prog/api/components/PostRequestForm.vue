<template>
  <NForm @submit="handleSubmit">

    <NSpace vertical>
      <NFormItem label="Enter a valid String:" label-placement="top">
        <NInput 
        type="text"
        v-model:value="inputModel.text"
        size="large" 
        placeholder="Gimme a Text"
        />
      </NFormItem>
    </NSpace>

    <NSpace vertical>
      <NFormItem label="Enter a valid Integer:" label-placement="top">
        <NInput 
          type="text"
          v-model:value="inputModel.number"
          size="large" 
          placeholder="Gimme a Number"
        />
      </NFormItem>
    </NSpace>

    <NSpace vertical>
      <ButtonBase 
      type="submit"
      :color="EButtonColor.Blue"
      >
        <template #content>
          Test Api Post
        </template>
      </ButtonBase>
    </NSpace>
  </NForm>

</template>


<script setup lang="ts">
import { NInput, NSpace, NForm, NFormItem } from 'naive-ui';
import { reactive } from 'vue';
import ButtonBase from '@/components/vueapp/ButtonBase.vue';
import { EButtonColor } from '@/components/vueapp/enums/EButtonColor';
import type { IUITestmodelPost } from '../models/Testmodel.frontend';


const inputModel: IUITestmodelPost = reactive({
  text: null,
  number: null,
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


</script>./models/Testmodel.backend./models/Testmodel.frontend