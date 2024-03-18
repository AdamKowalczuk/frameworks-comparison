<script setup lang="ts">
import { useAuthStore } from "../stores/useAuthStore";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();
</script>
<template>
  <main v-if="isLoggedIn" class="app">
    <RouterView />
  </main>
  <main v-else class="app">
    <div class="auth-layout">
      <RouterView />
    </div>
    <div class="auth-image">
      <img src="@/assets/images/auth-image.png" alt="logo" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.root-layout {
  display: flex;
  width: -webkit-fill-available;
}

.app {
  width: 100%;
  display: flex;
  height: 100vh;
}
.auth-layout {
  display: flex;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
}

.auth-image {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  img {
    max-width: 500px;
    height: fit-content;
  }
}
</style>
