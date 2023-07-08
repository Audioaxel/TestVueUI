<template>
  
  <NSpace vertical style="padding: 20px">
    <NGrid 
    cols="2 s:2 m:2 l:2 xl:2 2xl:2" 
    responsive="screen"
    >
      <NGridItem>
        <NDivider style="margin: 0;">
          <h3>Junge</h3>
        </NDivider>
        
        <NFormItem>
          <ButtonBase 
          class="button-base"
          :color="EButtonColor.Green"
          @click="getRequest"
          >
          <template #content>
            Test Api Get
          </template>
        </ButtonBase>
      </NFormItem>
      
        <NFormItem>
          <ButtonBase 
          class="button-base"
          :color="EButtonColor.Red"
          @click="deleteRequest"
          >
          <template #content>
            Test Api Delete
          </template>
        </ButtonBase>
      </NFormItem>  
    </NGridItem>

    <NGridItem>
      <NDivider style="margin: 0;">
        <h3>Junge</h3>
      </NDivider>
      
      <PostRequestForm
      @submit-post-request="handlePostRequest"
      />
    </NGridItem>
      </NGrid>

    <NFormItem label="Testmodel Text:">
      <NInput
      v-model:value="requestModel.text"
      placeholder=""
      />
    </NFormItem>

    <NFormItem label="Testmodel Number:">
      <NInput
      v-model:value="numToString"
      placeholder=""
      />
    </NFormItem>

  </NSpace>

  
  
</template>


<script setup lang="ts">
import { computed, reactive } from 'vue';
import { NSpace, NFormItem, NInput, NGrid, NGridItem, NDivider } from 'naive-ui';
import ButtonBase from '@/components/vueapp/ButtonBase.vue';
import { EButtonColor } from '@/components/vueapp/enums/EButtonColor';

import { RequestHandler } from '../services/RequestHandler';
import type { ITestmodelPost } from '../models/Testmodel.backend';
import PostRequestForm from './PostRequestForm.vue';


const numToString = computed(() => {
  return requestModel.number.toString();
});

const handlePostRequest = (inputModel: any) => {
  console.log(inputModel.text);
  console.log(inputModel.number);
  postRequest(inputModel);
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
      requestModel.text = "Dicker Error. Bestimmt API offline";
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