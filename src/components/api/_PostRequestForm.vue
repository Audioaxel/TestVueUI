<template>
  <form @submit="handleSubmit">
    <n-space vertical>
      <n-input 
      type="text"
      v-model="name"
      size="large" 
      placeholder="Gimme a Name" 
      />
    </n-space>
    <n-space vertical>
      <n-input 
      type="text"
      v-model="age"
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
import { computed } from 'vue';
import ButtonBase from '../layout/components/ButtonBase.vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import type { IUIFirstRequestModel } from './models/IUIFirstRequestModel';


const props = defineProps ({
  modelValue: {
    type: Object as () => IUIFirstRequestModel,
    required: true
  }
});



const emit = defineEmits(['update:modelValue']);

const name = computed<string | null>({
  get() {
    return props.modelValue.name;
  },
  set(value) {
    const model = props.modelValue;
    model.name = value;

    emit('update:modelValue', model);
  }
});

const age = computed(() => 
  props.modelValue.age);


const clearDataInput = () => {
  const newModel: IUIFirstRequestModel = {
    name: '',
    age: ''
  };
}

const handleSubmit = (e: Event) => {
  e.preventDefault();

  console.log(name.value);
  clearDataInput();
  console.log(name.value);
}


</script>