<script>
import ProfilePlaceholder from "../assets/icons/profile-placeholder.svg";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    showUser: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <ul class="grid-container">
    <li v-for="post in posts" :key="post._id" class="relative min-w-80 h-80">
      <router-link :to="`/posts/${post._id}`" class="grid-post_link">
        <img :src="post.imageUrl" alt="post" class="h-full w-full object-cover" />
      </router-link>

      <div class="grid-post_user" v-if="showUser">
        <div class="grid-post_user-wrapper">
          <img :src="post.creator.imageUrl || ProfilePlaceholder" alt="creator" class="w-8 h-8 rounded-full" />
          <p class="line-clamp-1">{{ post.creator.userName }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.75rem;
  width: 100%;
  list-style: none;
  padding: 0;
}

.grid-container li {
  position: relative;
  width: 100%;
  height: 20rem;
}

.grid-post_link {
  display: flex;
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 16px;
}

.grid-post_link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
}

.grid-post_user {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  .grid-post_user-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    p {
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
