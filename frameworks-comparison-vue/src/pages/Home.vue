<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PostService from "@/services/postService";

const posts = ref("");

const loading = ref(false);

const router = useRouter();

const getPosts = () => {
  loading.value = true;

  PostService.getPosts()
    .then((res) => {
      console.log("🚀 ~ posts:", res.posts);
      posts.value = res.posts;
      loading.value = false;
    })
    .catch((error) => {
      loading.value = false;
    });
};

onMounted(() => {
  getPosts();
});
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{ post.caption }}
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>