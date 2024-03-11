<script lang="ts">
export default {
  props: {
    text: String,
    onClick: Function,
  },
};
</script>

<template>
  <span class="text-button" @click="onClick">{{ text }}</span>
</template>


<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.text-button {
  font-size: 1rem;
  color: $primary-500;
  font-weight: 700;
  cursor: pointer;
}

.text-button:hover {
  color: $primary-700;
}
</style>
