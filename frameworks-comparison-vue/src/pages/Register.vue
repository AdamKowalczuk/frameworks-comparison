<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/useAuthStore";
import Button from "../components/Button.vue";
import InputText from "../components/InputText.vue";
import TextButton from "../components/TextButton.vue";
import Loader from "../components/Loader.vue";

const authStore = useAuthStore();

const userName = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);
const showSnackbar = ref(false);

const router = useRouter();

const handleUsernameChange = (event: any) => {
  userName.value = event.target.value;
};

const handleEmailChange = (event: any) => {
  email.value = event.target.value;
};

const handlePasswordChange = (event: any) => {
  password.value = event.target.value;
};

const handleSignUp = () => {
  loading.value = true;

  authStore
    .register(userName.value, email.value, password.value)
    .then(() => {
      loading.value = false;
      showSnackbar.value = true;
      setTimeout(() => router.push("/"), 3000);
    })
    .catch(() => {
      loading.value = false;
      showSnackbar.value = true;
    });
};
</script>

<template>
  <div class="auth-page">
    <div class="left-side">
      <h2 class="logo">PostShare</h2>
      <div class="auth-header">
        <h4>Create a new account</h4>
        <p class="normal-md gray-500">Please enter your details</p>
      </div>
      <form
        v-on:submit.prevent="
          {
            handleSignUp;
          }
        "
        class="auth-form"
      >
        <div class="form-group">
          <InputText label="Username" placeholder="Username" :onChange="handleUsernameChange" :value="userName" />
        </div>
        <div class="form-group">
          <InputText label="Email" placeholder="Email" :onChange="handleEmailChange" :value="email" />
        </div>
        <div class="form-group">
          <InputText type="password" label="Password" placeholder="Password" :onChange="handlePasswordChange" :value="password" />
        </div>

        <Button type="submit" :onClick="handleSignUp">
          <template v-if="loading">
            <div class="loader-wrapper">
              <Loader />
              Loading...
            </div>
          </template>
          <template v-else>Sign Up</template>
        </Button>
      </form>
      <div class="login-link">
        <span>Already have an account? </span>
        <router-link to="/sign-in">
          <TextButton text="Log in" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.auth-page {
  .left-side {
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    .logo {
      color: $primary-500;
      font-size: 40px;
    }

    .auth-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .auth-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
