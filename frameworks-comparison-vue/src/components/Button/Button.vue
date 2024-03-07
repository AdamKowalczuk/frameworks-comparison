<template>
  <button :type="type" :class="[customClass, variantClass, sizeClass]" @click="onClick">
    <slot></slot>
    <slot name="iconLeft"></slot>
    {{ text }}
    <slot name="iconRight"></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    text: String,
    onClick: Function,
    size: {
      type: String,
      default: 'medium'
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    customClass() {
      return 'custom-button';
    },
    variantClass() {
      return `custom-button--${this.variant}`;
    },
    sizeClass() {
      return `custom-button--${this.size}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";


.custom-button {
  cursor: pointer;
  outline: none;
  border: 1px solid $primary-500;
  display: flex;
  height: 40px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.custom-button--primary {
  background-color: $primary-500;
  color: $white;
}
.custom-button--primary:hover {
  background-color: $primary-700;
}

.custom-button--outlined {
  background-color: transparent;
  color: $primary-500;
}

.custom-button--outlined:hover {
  color: $primary-700;
  border-color: $primary-700;
}

.custom-button--small {
  height: 32px;
}

.custom-button--medium {
  height: 40px;
}

.custom-button--large {
  height: 48px;
}

</style>
