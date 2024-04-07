<script lang="ts">
import HomeIcon from "../assets/icons/home-black.svg";
import Search from "@/components/Search.vue";
import Loader from "@/components/Loader.vue";
import PostCard from "../components/PostCard.vue";
import PostService from "../services/postService";
import { IPost } from "../types/index";

export default {
  data() {
    return {
      posts: [] as IPost[],
      searchQuery: "",
      isPostsLoading: true as boolean,
    };
  },
  components: {
    Search,
    PostCard,
    Loader,
  },
  methods: {
    handleSearchPosts() {
      this.isPostsLoading = true;

      if (this.searchQuery.length > 0) {
        PostService.searchPosts(this.searchQuery)
          .then((response) => {
            this.posts = response.posts;
            this.isPostsLoading = false;
          })
          .catch((error) => {
            this.posts = [];
            console.error("Error fetching posts:", error);
          });
      } else {
        this.handleGetPosts();
      }
    },
    handleGetPosts() {
      this.isPostsLoading = true;
      PostService.getPosts()
        .then((response) => {
          this.posts = response.posts.reverse();
          this.isPostsLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    },
    handleSearchQueryChange(e: any) {
      this.searchQuery = e.target.value;
    },
  },
  computed: {
    HomeIcon() {
      return HomeIcon;
    },
  },
  mounted() {
    this.handleGetPosts();
  },
};
</script>

<template>
  <div class="right-container">
    <div class="title-wrapper">
      <img :src="HomeIcon" alt="home" class="title-wrapper-img" />
      <h4>Home Page</h4>
    </div>
    <Search placeholder="Search" @search="handleSearchPosts" :onChange="handleSearchQueryChange" :value="searchQuery" />
    <div v-if="isPostsLoading && !posts">
      <Loader />
    </div>
    <div v-else>
      <div v-for="(post, postId) in posts" :key="postId">
        <PostCard :post="post" :getPosts="handleGetPosts" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
