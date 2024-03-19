<script setup lang="ts">
import { ref, onMounted } from "vue";
import AllUsersIcon from "@/assets/icons/people-black.svg";
import UserService from "../services/userService";
import UserCard from "@/components/UserCard.vue";
import Loader from "@/components/Loader.vue";
import { IUser } from "@/types";

const users = ref<IUser[]>([]);
const loading = ref(false);

onMounted(() => {
  loading.value = true;
  UserService.getUsers()
    .then((response) => {
      users.value = response.users;
      console.log(response.users);

      loading.value = false;
    })
    .catch((error) => {
      loading.value = false;
    });
});
</script>

<template>
  <div class="right-container">
    <div class="title-wrapper">
      <img :src="AllUsersIcon" alt="all users" />
      <h4>Users</h4>
    </div>
    <div v-if="loading && !users">
      <Loader />
    </div>
    <div v-else class="users-list">
      <UserCard v-for="(user, index) in users" :key="index" :user="user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.users-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  gap: 1.75rem;
}
</style>
