<template>
  <ButtonBase 
  class="button-base"
  :color="EButtonColor.Green"
  @click="getRequest"
  >
    <template #content>
      Test Api Get
    </template>
  </ButtonBase>

  <ButtonBase 
  class="button-base"
  :color="EButtonColor.Blue"
  @click="postRequest(postModel)"
  >
    <template #content>
      Test Api Post
    </template>
  </ButtonBase>

  <ButtonBase 
  class="button-base"
  :color="EButtonColor.Red"
  @click="deleteRequest"
  >
    <template #content>
      Test Api Delete
    </template>
  </ButtonBase>


  <PostRequestForm
  v-model="itemData"
  />

  
  <h3 style="padding-left: 10px;">Request: {{ requestModel }}</h3>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import ButtonBase from '../layout/components/ButtonBase.vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import { RequestHandler } from './RequestHandler';
import type { IFirstRequestModel } from './models/IFirstRequestModel';
import PostRequestForm from './PostRequestForm.vue';

const itemData = reactive({
  name: "Nothing happend here",
  age: "1"
});



const handlePostRequest = (e: Event) => {

};















const requestModel: IFirstRequestModel = reactive({
  name: "Nothing happend here",
  age: 0
});

const postModel: IFirstRequestModel = reactive({
  name: "I am a post model",
  age: 1
});


// CRUD - Create, Update, Delete
const handler = new RequestHandler<IFirstRequestModel>();

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

const postRequest = (postModel: IFirstRequestModel) => {
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

<style scoped>
.button-base {
  margin: 10px;
}
</style>