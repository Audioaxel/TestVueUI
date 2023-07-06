<template>
  <ButtonBase 
  :color="EButtonColor.Red"
  @click="handleApiPost"
  >
    <template #content>
      Test Api Get02
      <h4> {{ getResponse.responseString }} </h4>
    </template>
  </ButtonBase>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { EButtonColor } from '@/components/enums/EButtonColor';
import ButtonBase from '../layout/components/ButtonBase.vue';

const getResponse = reactive({
  responseString: "nix"
});

const handleApiPost = () => {
  const postData = {
    testString: "Hello API!"
  };
  
  fetch('http://localhost:5184', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data => {
      // Hier kannst du die Antwortdaten verarbeiten
      console.log('API-Antwort:', data);
    })
    .catch(error => {
      // Hier kannst du Fehler behandeln
      console.error('Fehler bei der API-Anfrage:', error);
    });
};
</script>