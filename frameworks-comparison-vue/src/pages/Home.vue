<script lang="ts">
import PostService from "../services/postService";

export default {
  data() {
    return {
      loading: false,
      posts: [],
    };
  },
  methods: {
    getPosts() {
      this.loading = true;
      PostService.getPosts()
        .then((res) => {
          this.posts = res.posts;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{ post.caption }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
