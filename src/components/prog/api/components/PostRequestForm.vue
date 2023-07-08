<template>
  <NForm 
  ref="formRef"
  @submit="handleSubmit"
  :rules="formRules"
  >

    <NSpace vertical>
      <NFormItem label="Enter a valid String:" label-placement="top">
        <NInput 
        type="text"
        v-model:value="inputModel.text"
        size="large" 
        placeholder="Gimme a Text"
        style="max-width: 200px;"
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
          style="max-width: 200px;"
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
import { NInput, NSpace, NForm, NFormItem, type FormInst, type FormRules } from 'naive-ui';
import { reactive, ref } from 'vue';

import ButtonBase from '@/components/vueapp/ButtonBase.vue';
import { EButtonColor } from '@/components/vueapp/enums/EButtonColor';

import { UIFormValidationService } from '../services/UIFormValidationService';
import type { 
  UITestmodelPost,
  UIEditTestmodelPost 
} from '../models/Testmodel.frontend';

const formRef = ref<FormInst>();

const inputModel = reactive({
  text: null,
  number: null,
  reset() {
    this.text = null;
    this.number = null;
  }
});

const emit = defineEmits<{
  (name: "submitPostRequest", value: UIEditTestmodelPost): void;
}>();

// TODO: Working Copy
const workingCopy = ref(createWorkingCopy());

function createWorkingCopy(): UIEditTestmodelPost {
  return {
    text: inputModel.text,
    number: inputModel.number
  };
}


const handleSubmit = (e: Event) => {
  e.preventDefault();

  const test = formRef.value?.validate();

  emit("submitPostRequest", inputModel);
  inputModel.reset();
};

const formValidator = new UIFormValidationService();
// const formRules = formValidator.rules<UITestmodelPost>();
const formRules: FormRules = {
    number: [{
    required: true,
    message: 'Please enter a valid Number',
    trigger: ['input', 'blur']
  }]
}

</script>