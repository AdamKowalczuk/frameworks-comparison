<template>
  <div v-if="!isLoggedIn" class="auth-layout">
    <router-view/>
    <div class="auth-image">
      <img src="../../assets/images/auth-image.png" alt="logo" />
    </div>
  </div>
  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'AuthLayout',
  computed: {
    isLoggedIn() {
      return useStore().state.isLoggedIn;
    }
  }
});
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

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