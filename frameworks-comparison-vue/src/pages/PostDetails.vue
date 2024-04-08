<script>
import PostCard from "@/components/PostCard.vue";
import PostService from "@/services/postService";
import Loader from "@/components/Loader.vue";
import BackIcon from "@/assets/icons/back.svg";

export default {
  components: {
    PostCard,
    Loader,
  },
  data() {
    return {
      postId: null,
      post: null,
      isPostLoading: true,
      BackIcon: BackIcon,
    };
  },
  methods: {
    handleGetPost() {
      if (this.postId) {
        PostService.getPostById(this.postId)
          .then((response) => {
            this.post = response.post;
            this.isPostLoading = false;
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
          });
      }
    },
    navigateBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.postId = this.$route.params.id;
    this.handleGetPost();
  },
};
</script>

<template>
  <div class="right-container">
    <div class="title-wrapper">
      <img :src="BackIcon" alt="back" style="cursor: pointer" @click="navigateBack" class="title-wrapper-img" />
      <h4>Back</h4>
    </div>
    <div v-if="isPostLoading && !post">
      <Loader />
    </div>
    <div v-else>
      <PostCard :post="post" :getPosts="handleGetPost" />
    </div>
  </div>
</template>
