<script>
import SearchIcon from "@/assets/icons/search.svg";

export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    onSearch: {
      type: Function,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    onChange: {
      type: Function,
      required: true,
    },
  },
  components: {
    SearchIcon,
  },
  data() {
    return {
      searchQuery: this.value,
    };
  },
  methods: {
    handleKeyPress(event) {
      if (event.key === "Enter") {
        this.onSearch(this.searchQuery);
      }
    },
  },
  computed: {
    SearchIcon() {
      return SearchIcon;
    },
  },
};
</script>

<template>
  <div class="search-container">
    <input type="search" class="input-search" :placeholder="placeholder" :value="value" :onChange="onChange" @keypress.enter="handleKeyPress" />

    <img :src="SearchIcon" alt="search" class="search-icon" />
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.search-container {
  position: relative;
  .input-search {
    border: 1px solid $gray-200;
    color: $black;
    padding: 0 16px;
    padding-left: 40px;
    outline: none;
    height: 40px;
    border-radius: 4px;
    width: 100%;
  }

  .search-icon {
    position: absolute;
    margin-left: 10px;
    top: 8px;
    left: 0;
    width: 20px;
    path {
      fill: $gray-500;
    }
  }

  .input-search::placeholder {
    color: $gray-400;
    padding-left: 0px;
  }

  .input-search:hover,
  .input-search:active {
    border-color: $primary-500;
    border-width: 1px;
  }
  .input-search:focus {
    border-color: $primary-500;
    border-width: 2px;
    padding: 0 15px;
    padding-left: 39px;
  }
}
</style>
