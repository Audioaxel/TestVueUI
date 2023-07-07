<template>
  <form @submit="handleSubmit">
    <n-space vertical>
      <n-input 
      type="text"
      v-model="inputName"
      size="large" 
      placeholder="Gimme a Name"
      clearable
      
      
      />
    </n-space>
    <input type="text" v-model="inputName" placeholder="shit ey, jetzt funktnier!" />
    <!-- <n-space vertical>
      <n-input 
      type="text"
      v-model="inputAge"
      size="large" 
      placeholder="Gimme a Number"
      />
    </n-space> -->
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
import { computed, reactive, ref } from 'vue';
import ButtonBase from '../layout/components/ButtonBase.vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import type { IUIFirstRequestModel } from './models/IUIFirstRequestModel';


const model = reactive({
  name: "Nothing happend here",
  age: "1"
});

const inputNameValue = ref<string | null>(null);
const test = ref(true);


const inputName = computed({
  get() {
    return model.name;
  },
  set(value) {
    model.name = value;
  }
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(model.name);

  inputName.value = "";
  console.log(model.name);
};


</script>