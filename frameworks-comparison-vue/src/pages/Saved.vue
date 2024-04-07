<script>
import SavedIcon from "../assets/icons/bookmark-black.svg";
import Loader from "../components/Loader.vue";
import GridPostList from "../components/GridPostList.vue";
import PostService from "../services/postService";
import { useAuthStore } from "@/stores/useAuthStore";

export default {
  components: {
    Loader,
    GridPostList,
  },
  data() {
    return {
      isPostsLoading: false,
      savedPosts: [],
      authStore: useAuthStore(),
    };
  },
  created() {
    this.fetchSavedPosts();
  },
  methods: {
    fetchSavedPosts() {
      this.isPostsLoading = true;
      const user = this.authStore.user;
      PostService.getLikedPosts(user.userId)
        .then((response) => {
          this.savedPosts = response.likedPosts;
          this.isPostsLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    },
  },
  computed: {
    SavedIcon() {
      return SavedIcon;
    },
  },
};
</script>

<template>
  <div class="right-container">
    <div class="title-wrapper">
      <img :src="SavedIcon" alt="saved" class="title-wrapper-img" />
      <h4>Saved</h4>
    </div>
    <template v-if="isPostsLoading && !savedPosts">
      <Loader />
    </template>
    <template v-else>
      <GridPostList :posts="savedPosts" />
    </template>
  </div>
</template>
