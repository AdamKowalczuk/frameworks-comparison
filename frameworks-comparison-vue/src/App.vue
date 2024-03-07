<template>
  <div class="app">
    <LeftSidebar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import LeftSidebar from './components/LeftSidebar.vue';

export default defineComponent({
  name: 'App',
  components:{
    LeftSidebar
  },
  setup() {
    const store = useStore();
    const router = useRouter();



    return {};
  }
});
</script>
