<script>
import { useRoute } from "vue-router";
import { sidebarLinks } from "@/constants/index";
import { useAuthStore } from "@/stores/useAuthStore";
import ProfilePlaceholder from "@/assets/icons/profile-placeholder.svg";

export default {
  data() {
    return {
      sidebarLinks,
      authStore: useAuthStore(),
      route: useRoute(),
      ProfilePlaceholder,
    };
  },
  methods: {
    isLinkActive(route) {
      return this.route.path === route;
    },
    handleLogout() {
      this.authStore.logout();
      this.$router.push("/sign-in");
    },
  },
};
</script>

<template>
  <nav class="left-sidebar">
    <div class="sidebar-wrapper">
      <router-link to="/">
        <h4>PostShare</h4>
      </router-link>

      <router-link :to="`/profile/${authStore.user?.userId}`">
        <div class="sidebar-profile">
          <img :src="authStore.user?.imageUrl ? authStore.user?.imageUrl : ProfilePlaceholder" alt="profile" />
          <div class="user-info">
            <p class="username">{{ authStore.user?.userName }}</p>
          </div>
        </div>
      </router-link>

      <ul>
        <li
          v-for="link in sidebarLinks"
          :key="link.label"
          :class="[
            'left-sidebar-link',
            {
              'left-sidebar-link--active': isLinkActive(link.route),
              'left-sidebar-link--inactive': !isLinkActive(link.route),
            },
          ]"
        >
          <router-link :to="link.route">
            <img :src="link.imgURL" :alt="link.label" />
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <ul>
      <li class="left-sidebar-link" @click="handleLogout">
        <div class="logout-button">
          <img src="@/assets/icons/logout.svg" alt="logout" />
          Logout
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.left-sidebar {
  background-color: $primary-500;
  display: flex;
  min-width: 270px;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  .sidebar-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
    .sidebar-profile {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
        border-radius: 100%;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        .username {
          color: $white;
          font-weight: bold;
          font-size: 18px;
        }
        .text-secondary {
          color: $gray-200;
          font-size: 12px;
        }
      }
    }
  }

  h4 {
    color: $white;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .left-sidebar-link {
    border-radius: 0.5rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
      backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    color: $white;

    a,
    .logout-button {
      display: flex;
      padding: 1rem;
      gap: 1rem;
      align-items: center;
      cursor: pointer;
    }
  }
  .left-sidebar-link--active {
    background-color: $primary-700;
  }
  .left-sidebar-link:hover {
    background-color: $primary-700;
  }
}
</style>
