<script>
import UpdateIcon from "../assets/icons/edit.svg";
import InputText from "../components/InputText.vue";
import Textarea from "../components/Textarea.vue";
import Button from "../components/Button.vue";
import Loader from "../components/Loader.vue";
import ProfilePlaceholder from "../assets/icons/profile-placeholder.svg";
import { useAuthStore } from "@/stores/useAuthStore";

export default {
  components: {
    InputText,
    Textarea,
    Button,
    Loader,
  },
  data() {
    return {
      userName: "",
      bio: "",
      file: null,
      fileURL: null,
      loading: false,
      authStore: useAuthStore(),
    };
  },
  computed: {
    user() {
      return this.authStore.user;
    },
    ProfilePlaceholder() {
      return ProfilePlaceholder;
    },
    UpdateIcon() {
      return UpdateIcon;
    },
  },
  mounted() {
    this.userName = this.user.userName;
    this.bio = this.user.bio;
  },
  methods: {
    handleUsernameChange(e) {
      this.userName = e.target.value;
    },
    handleBioChange(e) {
      this.bio = e.target.value;
    },
    handleUpdateUser() {
      const userData = {
        userName: this.userName,
        bio: this.bio,
        file: this.file,
      };

      this.loading = true;
      updateUser(this.user.userId, userData)
        .then(() => {
          this.loading = false;
          this.$router.push(`/profile/${this.user.userId}`);
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleFileChange(event) {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        this.file = selectedFile;
        this.fileURL = URL.createObjectURL(selectedFile);
      }
    },
    handleCancel() {
      this.$router.go(-1);
    },
    handleButtonClick() {
      this.$refs.fileInputRef.click();
    },
  },
};
</script>

<template>
  <div class="right-container">
    <div class="title-wrapper">
      <img :src="UpdateIcon" alt="edit" />
      <h4>Edit Profile</h4>
    </div>
    <div class="update-profile-container">
      <div class="profile-photo">
        <img :src="fileURL || user.imageUrl || ProfilePlaceholder" alt="profile" class="profile-img" />
        <div class="profile-input-file">
          <input type="file" name="file" @change="handleFileChange" style="display: none" ref="fileInputRef" />
          <p class="custom-file-button" @click="handleButtonClick">Change profile photo</p>
        </div>
      </div>

      <InputText label="Username" placeholder="Username" :onChange="handleUsernameChange" :value="userName" />
      <Textarea label="Bio" :onChange="handleBioChange" :value="bio" />
      <div class="buttons-section">
        <Button variant="outlined" text="Cancel" @click="handleCancel" />
        <Button @click="handleUpdateUser" type="submit">
          <template v-if="loading">
            <div class="loader-wrapper">
              <Loader />
              Loading...
            </div>
          </template>
          <template v-else> Update Profile </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.update-profile-container {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 1rem;
  .profile-photo {
    display: flex;
    gap: 1rem;
    align-items: center;
    .profile-input-file {
      background: transparent;
      color: $primary-500;
    }
    p {
      color: $primary-500;
      cursor: pointer;
    }
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 100%;
    }
  }
  .buttons-section {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
  }

  .profile-input-file .custom-file-button {
    cursor: pointer;
    color: $primary-500;
  }

  .profile-input-file .custom-file-button:hover {
    color: $primary-700;
  }
}
</style>
