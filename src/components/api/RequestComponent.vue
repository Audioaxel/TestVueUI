<template>
  <ButtonBase 
  :color="EButtonColor.Red"
  @click="getRequest"
  >
    <template #content>
      Test Api Get
    </template>
  </ButtonBase>
  <ButtonBase 
  :color="EButtonColor.Green"
  @click="postRequest(postModel)"
  >
    <template #content>
      Test Api Post
    </template>
  </ButtonBase>
  <ButtonBase 
  :color="EButtonColor.Red"
  @click="deleteRequest"
  >
    <template #content>
      Test Api Delete
    </template>
  </ButtonBase>
  
  <h3 style="padding-left: 10px;">Request: {{ requestModel }}</h3>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import ButtonBase from '../layout/components/ButtonBase.vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import { RequestHandler } from './RequestHandler';
import type { IUIFirstRequestModel } from './models/IUIFirstRequestModel';

const requestModel: IUIFirstRequestModel = reactive({
  name: "Nothing happend here",
  age: 0
});

const postModel: IUIFirstRequestModel = reactive({
  name: "I am a post model",
  age: 1
});

const handler = new RequestHandler();

const getRequest = () => {
  handler.getModel()
    .then(result => {
      requestModel.name = result.name;
      requestModel.age = result.age;
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
};

const postRequest = (postModel: IUIFirstRequestModel) => {
  handler.postModel(postModel)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
};

const deleteRequest = () => {
  handler.deleteModel()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
};

</script>