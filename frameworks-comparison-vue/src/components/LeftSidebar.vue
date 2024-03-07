<template>
  <nav class="left-sidebar">
    <div class="sidebar-wrapper">
      <router-link to="/">
        <h4>PostShare</h4>
      </router-link>

      <router-link :to="'/profile/'">
        <div class="sidebar-profile">
          <img :src="ProfilePlaceholder" alt="profile" />
          <div class="user-info">
            <p class="username">Username</p>
          </div>
        </div>
      </router-link>

      <ul>
        <li v-for="link in sidebarLinks" :key="link.label" :class="['left-sidebar-link']">
          <router-link :to="link.route">
            <img :src="ProfilePlaceholder" :alt="link.label" />
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <ul>
      <li class="left-sidebar-link" >
        <div class="logout-button">
          <!-- <img src="@/assets/icons/logout.svg" alt="logout" /> -->
          Logout
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



import { sidebarLinks } from '../constants';
// import ProfilePlaceholder from '@/assets/icons/profile-placeholder.svg';
// import Logout from '@/assets/icons/logout.svg';


export default defineComponent({
  name: 'LeftSidebar',
  components: {

  },
  setup() {



    // const isActiveLink = (routePath: string) => {
    //   return routePath === route.path;
    // };


    return {

      sidebarLinks,
      // isActiveLink,

      // ProfilePlaceholder,
      // Logout
    };
  }
});
</script>

<style scoped>


</style>
