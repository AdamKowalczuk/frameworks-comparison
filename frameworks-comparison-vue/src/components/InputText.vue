<script lang="ts">
export default {
  props: {
    label: String,
    placeholder: String,
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    onChange: {
      type: Function as () => void,
      default: () => {},
    },
    value: String,
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<template>
  <div :class="'input-container'">
    <label v-if="label" :class="['input-label', `input-label--${size}`]">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" @input="onChange" :value="value" :class="['input-text', `input-text--${size}`]" />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.input-container {
  display: flex;
  flex-direction: column;
  .input-text {
    border: 1px solid $gray-200;
    color: $black;
    padding: 0 16px;
    outline: none;
  }

  .input-text::placeholder {
    color: $gray-400;
  }

  .input-text:hover,
  .input-text:active {
    border-color: $primary-500;
    border-width: 1px;
  }

  .input-text:focus {
    border-color: $primary-500;
    border-width: 2px;
    padding: 0 15px;
  }

  .input-text--small {
    height: 32px;
    border-radius: 4px;
  }

  .input-text--medium {
    height: 40px;
    border-radius: 4px;
  }

  .input-text--large {
    height: 48px;
    border-radius: 6px;
  }

  .input-label {
    color: $black;
    margin-bottom: 8px;
  }

  .input-label--small {
    font-size: 14px;
  }

  .input-label--medium {
    font-size: 16px;
  }

  .input-label--large {
    font-size: 18px;
  }
}
</style>
