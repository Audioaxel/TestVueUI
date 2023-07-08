<script setup lang="ts">
import { NGrid,NDivider, NGridItem } from 'naive-ui';
</script>


<template>
  <n-divider>Self Responsive</n-divider>
  <n-grid cols="1 300:3">
    <n-grid-item>
      <div class="light-green">
        1
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        3
      </div>
    </n-grid-item>
  </n-grid>

  <n-divider>Screen Responsive</n-divider>
  <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <div class="light-green">
        1
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        3
      </div>
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>