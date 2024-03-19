<script setup lang="ts">
import { IUser } from "@/types";
import { defineProps } from "vue";
import Button from "@/components/Button.vue";
import ProfilePlaceholderIcon from "../assets/icons/profile-placeholder.svg";

const props = defineProps<{
  user: IUser;
}>();
</script>

<template>
  <div class="user-item">
    <router-link :to="`/profile/${user._id}`" class="user-card">
      <img :src="ProfilePlaceholderIcon" alt="profile" />
      <div class="user-info">
        <p class="user-username">{{ user.userName }}</p>
      </div>
      <Button text="See profile" />
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.user-item {
  width: 100%;
  .user-card {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    gap: 1rem;
    border: 1px solid $gray-200;
    padding: 2rem 1.25rem;
    align-items: center;
    justify-content: center;
    .user-info {
      display: flex;
      align-items: center;
      flex-direction: column;

      .user-name {
        color: $black;
        font-weight: bold;
        font-size: 18px;
      }
      .user-username {
        color: $gray-500;
        font-size: 12px;
      }
    }
  }
}
</style>
