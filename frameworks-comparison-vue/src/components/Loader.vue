<script>
import LoaderIcon from "../assets/icons/loader.svg";

export default {
  computed: {
    LoaderIcon() {
      return LoaderIcon;
    },
  },
};
</script>

<template>
  <div class="loader">
    <img :src="LoaderIcon" alt="loader" />
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    animation: spin 1s linear infinite;
  }
}

.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
