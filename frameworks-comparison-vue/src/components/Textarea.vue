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
  },
};
</script>

<template>
  <div class="textarea-container">
    <label v-if="label" :class="['textarea-label', `textarea-label--${size}`]">{{ label }}</label>
    <textarea class="textarea-text" :class="['textarea-text--' + size]" :value="value" :placeholder="placeholder" @input="onChange"></textarea>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.textarea-container {
  display: flex;
  flex-direction: column;
  .textarea-label {
    color: $black;
    margin-bottom: 8px;
  }

  .textarea-label--small {
    font-size: 14px;
  }

  .textarea-label--medium {
    font-size: 16px;
  }

  .textarea-label--large {
    font-size: 18px;
  }

  .textarea-text {
    border: 1px solid $gray-200;
    color: $black;
    padding: 8px 16px;
    outline: none;
  }
  .textarea-text:focus,
  .textarea-text:hover,
  .textarea-text:active {
    border-color: $primary-500;
    border-width: 1px;
  }

  .textarea-text:focus {
    border-color: $primary-500;
    border-width: 2px;
    padding: 7px 15px;
  }

  .textarea-text--small {
    min-height: 32px;
    border-radius: 4px;
  }

  .textarea-text--medium {
    min-height: 80px;
    border-radius: 4px;
  }

  .textarea-text--large {
    min-height: 80px;
    border-radius: 6px;
  }
}
</style>
