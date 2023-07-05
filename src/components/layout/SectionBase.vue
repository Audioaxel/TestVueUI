<!-- TODO: Mach mal flexible section -->
<template>
  <div :class="sectionClass">
    <n-divider style="margin: 0;">
      <h3 :class="dividerColor">{{ props.title }}</h3>
    </n-divider>

    <n-grid cols="1 s:1 m:1 l:1 xl:1 2xl:1" responsive="screen">
      <n-grid-item>
        <div class="section-content">
          <slot name="content" />
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>


<script setup lang="ts">
import { NDivider, NGrid, NGridItem } from 'naive-ui';
import { ESectionColor } from '@/components/enums/ESectionColor';

const props = defineProps({
  color: {
    type: String as () => ESectionColor,
    default: ESectionColor.White
  },
  title: {
    type: String,
    default: 'Section Title'
  }
  
});

const sectionClass = `section section-${props.color}`;

// TODO: Wie kann ich Divider Inhalt Farbe verändern??
const dividerColor = props.color;
</script>


<style scoped>
.section {
  min-height: 200px;
}

.section-white {
  background: #fafafa;
}
.section-yellow {
  background: hsla(50, 100%, 50%, 0.7);
  color: hsla(160, 100%, 37%, 0.7);
}
.section-green {
  background: hsla(160, 100%, 37%, 0.7); 
  color: #fafafa;
}

/* Columns */
.section-content {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* TODO: Wie kann ich Divider Inhalt Farbe verändern?? */
.white {
  padding-top: 10px;
  padding-bottom: 10px;
}
.green {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fafafa;
}
.yellow {
  padding-top: 10px;
  padding-bottom: 10px;
  color: hsla(160, 100%, 37%, 0.7);
}
</style>
  