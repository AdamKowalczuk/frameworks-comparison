<template>
  <div class="root-layout">
    <left-sidebar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftSidebar from '../../components/LeftSidebar.vue';

export default defineComponent({
  name: 'RootLayout',
  components: {
    LeftSidebar
  }
});
</script>

<style scoped lang="scss">
.root-layout {
  display: flex;
   width: -webkit-fill-available;
}
</style>