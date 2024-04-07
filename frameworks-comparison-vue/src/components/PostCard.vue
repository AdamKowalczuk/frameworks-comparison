<script>
import moment from "moment";
import ProfilePlaceholder from "../assets/icons/profile-placeholder.svg";
import LikeIcon from "../assets/icons/like.svg";
import LikedIcon from "../assets/icons/liked.svg";
import PostService from "../services/postService";
import { useAuthStore } from "@/stores/useAuthStore";

export default {
  props: {
    post: Object,
    getPosts: Function,
  },

  data() {
    return {
      authStore: useAuthStore(),
    };
  },
  methods: {
    formatCreatedAt(createdAt) {
      return moment(createdAt, "YYYYMMDD, h:mm:ss a").calendar();
    },
    handleLikePost() {
      //   console.log(authStore);
      if (this.post.likes.includes(this.authStore.user.userId)) {
        PostService.unlikePostById(this.post._id)
          .then(() => {
            this.getPosts();
          })
          .catch((error) => {
            console.error("Error unliking post:", error);
          });
      } else {
        PostService.likePostById(this.post._id)
          .then(() => {
            this.getPosts();
          })
          .catch((error) => {
            console.error("Error liking post:", error);
          });
      }
    },
  },
  computed: {
    ProfilePlaceholder() {
      return ProfilePlaceholder;
    },
    LikeIcon() {
      return LikeIcon;
    },
    LikedIcon() {
      return LikedIcon;
    },
  },
};
</script>

<template>
  <div class="post-card">
    <div class="post-header">
      <router-link :to="`/profile/${post.creator.userId}`">
        <img :src="post.creator.imageUrl || ProfilePlaceholder" alt="creator" class="post-avatar" />
      </router-link>

      <div class="post-details">
        <p class="post-creator">{{ post.creator.userName }}</p>
        <div class="post-date-location">
          <p>{{ formatCreatedAt(post.createdAt) }}</p>
          <p>{{ post.location }}</p>
        </div>
      </div>
    </div>

    <div class="post-body">
      <router-link :to="`/posts/${post._id}`">
        <p class="post-title">{{ post.caption }}</p>
      </router-link>
      <div class="post-tags">
        <span v-for="(tag, index) in post.tags" :key="index">{{ `#${tag}` }}</span>
      </div>

      <img :src="post.imageUrl" alt="post" class="post-img" />
      <div class="likes-wrapper">
        <img :src="post.likes.includes(authStore.user?.userId) ? LikedIcon : LikeIcon" alt="like" class="like-icon" @click="handleLikePost" />
        <span>{{ post.likes.length }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.post-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .post-header {
    display: flex;
    gap: 20px;
    .post-avatar {
      width: 64px;
      height: 64px;
      border-radius: 100%;
    }
    .post-details {
      .post-creator {
        font-weight: bold;
      }
      .post-date-location {
        display: flex;
        gap: 10px;
        color: $gray-500;
        font-weight: 400;
        font-size: 14px;
      }
    }
  }

  .post-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .post-title {
      font-weight: bold;
    }
    .post-tags {
      font-size: 14px;
      color: $gray-500;
      font-weight: 400;
      display: flex;
      gap: 10px;
    }
    .post-img {
      max-height: 300px;
      width: fit-content;
    }
    .likes-wrapper {
      display: flex;
      gap: 7px;
      color: $primary-500;
      .like-icon {
        // height: 20px;
        width: fit-content;
        cursor: pointer;
      }
    }
  }
}
</style>
