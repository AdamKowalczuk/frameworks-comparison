<script>
import Button from "../components/Button.vue";
import ProfilePlaceholder from "../assets/icons/profile-placeholder.svg";
import UserService from "../services/userService";
import { useAuthStore } from "@/stores/useAuthStore";

export default {
  components: {
    Button,
  },
  data() {
    return {
      activeUser: null,
      authStore: useAuthStore(),
    };
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
    user() {
      return this.authStore.user;
    },
    ProfilePlaceholder() {
      return ProfilePlaceholder;
    },
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const userId = this.userId;
      if (userId) {
        UserService.getUserById(userId)
          .then((response) => {
            this.activeUser = response.user;
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      }
    },
    handleEditProfile() {
      if (this.activeUser) {
        this.$router.push(`/update-profile/${this.activeUser._id}`);
      }
    },
  },
};
</script>

<template>
  <div class="right-container">
    <div class="user-profile">
      <div class="profile-header">
        <img :src="activeUser?.imageUrl ? activeUser.imageUrl : ProfilePlaceholder" alt="profile" class="profile-img" />
        <div class="profile-info">
          <p class="profile-username">{{ activeUser ? activeUser.userName : "" }}</p>
          <p class="profile-bio">{{ activeUser ? activeUser.bio : "" }}</p>
        </div>
        <Button v-if="user.userId === userId" text="Edit Profile" @click="handleEditProfile" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.user-profile {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  .profile-header {
    display: flex;
    gap: 1.75rem;
    .profile-img {
      width: 9rem;
      height: 9rem;
      border-radius: 100%;
    }
    .profile-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .profile-username {
        font-size: 36px;
        font-weight: bold;
      }
    }
  }
  .posts-tabs {
    width: 100%;
    display: flex;
    .tab {
      display: flex;
      width: 12rem;
      gap: 0.75rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      align-items: center;
      justify-content: center;
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
        backdrop-filter, -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      background-color: $primary-100;
      cursor: pointer;
      border: 1px solid $primary-500;
      background-color: transparent;
      color: $primary-500;
    }
    .tab:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    .tab:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    .tab:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;

      &.active {
        background-color: $primary-500;
        color: $white;
        svg {
          path {
            stroke: $white;
          }
          circle {
            stroke: $white;
          }
        }
      }
    }
    .tab:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      &.active {
        background-color: $primary-500;
        color: $white;
        svg {
          path {
            fill: $white;
          }
        }
      }
    }
  }
}
</style>
