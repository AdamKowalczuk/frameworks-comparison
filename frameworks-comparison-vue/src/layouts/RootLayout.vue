<script setup lang="ts">
import LeftSidebar from "@/components/LeftSidebar.vue";
</script>

<template>
  <div className="root-layout">
    <LeftSidebar />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.root-layout {
  display: flex;
  width: -webkit-fill-available;
}
</style>