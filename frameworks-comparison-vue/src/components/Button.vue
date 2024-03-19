<script lang="ts">
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "outlined"].includes(value),
    },
    text: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function as () => void,
      default: () => {},
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    iconLeft: String,
    iconRight: String,
    type: {
      type: String,
      default: "button",
      validator: (value) => ["submit", "reset", "button"].includes(value),
    },
  },
};
</script>

<template>
  <button :type="type" :class="['custom-button', `custom-button--${variant}`, `custom-button--${size}`]" @click="onClick">
    <slot></slot>
    <span v-if="iconLeft">{{ iconLeft }}</span>
    <span>{{ text }}</span>
    <span v-if="iconRight">{{ iconRight }}</span>
  </button>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

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
