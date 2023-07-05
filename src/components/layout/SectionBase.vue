<template>
  <div :class="sectionClass">
    <slot name="content" />
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  section: {
    type: String,
    default: 'section-a',
    validator: (value) => {
      return value === 'section-a' || value === 'section-b' || value === 'section-c';
    },
  },
});

const sectionClass = `section ${props.section}`;
</script>


<style scoped>
.section {
  min-height: 200px;
}

.section-a {
  background: #fafafa;
}
.section-b {
  background: hsla(50, 100%, 50%, 0.7);
  color: hsla(160, 100%, 37%, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
}
.section-c {
  background: hsla(160, 100%, 37%, 0.7); 
  color: #fafafa;
}
</style>
  