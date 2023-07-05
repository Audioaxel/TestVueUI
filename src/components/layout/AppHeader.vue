<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/page01">Page01</RouterLink>
        <RouterLink to="/page02">Page02</RouterLink>
      </nav>
      </n-layout-header>
    </n-layout>
  </n-space>
</template>
  
<style scoped>
.n-layout-header {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;

  border-radius: 5px;
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);

  border-radius: 5px;
}
nav {
  width: 100%;
  font-size: 22px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>

<script setup lang="ts">
  import { NSpace, NLayout, NLayoutHeader } from 'naive-ui'
  import { RouterLink } from 'vue-router'
</script>