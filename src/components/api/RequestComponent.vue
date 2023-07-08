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
import type { ITestmodelPost } from './models/Testmodel.backend';
import PostRequestForm from './PostRequestForm.vue';
import type { IUITestmodelPost } from './models/Testmodel.frontend';


const handlePostRequest = (inputModel: IUITestmodelPost) => {
  console.log(inputModel.text);
};




// CRUD - Create, Update, Delete
const handler = new RequestHandler<ITestmodelPost>();

const requestModel: ITestmodelPost = reactive({
  text: "Nothing happend here",
  number: 0
});

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

const postRequest = (postModel: ITestmodelPost) => {
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
</style>./models/Testmodel.backend