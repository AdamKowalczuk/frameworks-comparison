<script setup lang="ts">
import Button from "../components/Button.vue";
import InputText from "../components/InputText.vue";
import TextButton from "../components/TextButton.vue";

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loading = ref(false);

const router = useRouter();

const handleEmailChange = (event: any) => {
  email.value = event.target.value;
};

const handlePasswordChange = (event: any) => {
  password.value = event.target.value;
};
</script>

<template>
  <div>
    <div className="auth-page">
      <div className="left-side">
        <h2 className="logo">PostShare</h2>
        <div className="auth-header">
          <h4>Log in to your account</h4>

          <p className="normal-md gray-500">
            Welcome back! Please enter your details
          </p>
        </div>
        <form onSubmit="{handleLogin}" className="auth-form">
          <div className="form-group">
            <InputText
              label="Email"
              placeholder="Email"
              onChange="{handleEmailChange}"
              value="{email}"
            />
          </div>
          <div className="form-group">
            <InputText
              type="password"
              label="Password"
              placeholder="Password"
              onChange="{handlePasswordChange}"
              value="{password}"
            />
          </div>

          <Button @click="handleLogin" type="submit">
            <template v-if="loading">
              <div class="loader-wrapper">
                <Loader />
                Loading...
              </div>
            </template>
            <template v-else> Log in </template>
          </Button>
        </form>
        <div className="signup-link">
          <span>Don’t have an account? </span>
          <Link to="/sign-up">
            <TextButton text="Sign Up" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

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
