<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app full-height>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact-us">Contact Us</RouterLink>
      </nav>
    </div>

    <v-main width="100%">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-flex;
  width: 120px;
  justify-content: center;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
  }
}
</style>
