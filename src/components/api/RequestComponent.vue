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
  @submit-post-request="handlePostRequest"
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
import type { IUIFirstRequestModel } from './models/IUIFirstRequestModel';


const itemData = reactive({
  text: "Nothing happend here",
  number: "1"
});


const handlePostRequest = (inputModel: IUIFirstRequestModel) => {
  console.log(inputModel.text);
};




const requestModel: IFirstRequestModel = reactive({
  text: "Nothing happend here",
  number: 0
});

const postModel: IFirstRequestModel = reactive({
  text: "I am a post model",
  number: 1
});


// CRUD - Create, Update, Delete
const handler = new RequestHandler<IFirstRequestModel>();

const getRequest = () => {
  handler.getModel()
    .then(result => {
      requestModel.text = result.text;
      requestModel.number = result.number;
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