<script setup lang="ts">
import { useAuthStore } from "./stores/useAuthStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";

.app {
  width: 100%;
  display: flex;
  height: 100vh;
}
</style>
