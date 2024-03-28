<script lang="ts">
import Textarea from "@/components/Textarea.vue";
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";
import PostService from "@/services/postService";
import Loader from "@/components/Loader.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import CreatePostIcon from "@/assets/icons/gallery-add-black.svg";
import FileUploadIcon from "@/assets/icons/file-upload.svg";

export default {
  data() {
    return {
      caption: "",
      location: "",
      file: null,
      fileURL: null,
      tags: "",
      loading: false,
      authStore: useAuthStore(),
    };
  },
  components: {
    Textarea,
    InputText,
    Button,
    Loader,
  },
  methods: {
    handleFileChange(event: any) {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        this.file = selectedFile;
        this.fileURL = URL.createObjectURL(selectedFile);
      }
    },
    handleLocationChange(event: any) {
      this.location = event.target.value;
    },
    handleTagsChange(event: any) {
      this.tags = event.target.value;
    },
    handleCaptionChange(event: any) {
      this.caption = event.target.value;
    },
    handleCreatePost() {
      this.loading = true;

      PostService.createPost({
        creator: {
          userId: this.authStore.user.userId,
          imageUrl: this.authStore.user.imageUrl,
          userName: this.authStore.user.userName,
        },
        caption: this.caption,
        file: this.file,
        location: this.location,
        tags: this.tags,
      })
        .then(() => {
          this.$router.push("/");
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleCancel() {
      this.$router.go(-1);
    },
  },
  computed: {
    CreatePostIcon() {
      return CreatePostIcon;
    },
    FileUploadIcon() {
      return FileUploadIcon;
    },
  },
};
</script>

<template>
  <div class="right-container">
    <div class="title-wrapper">
      <img :src="CreatePostIcon" alt="Create post" />
      <h4>Create Post</h4>
    </div>

    <form @submit.prevent="handleCreatePost" class="create-post-form">
      <div class="caption-section">
        <Textarea label="Caption" :onChange="handleCaptionChange" :value="caption" />
      </div>

      <div class="image-upload-section">
        <div class="add-photo-wrapper" style="margin-top: 8px">
          <img :src="FileUploadIcon" alt="File Upload" />
          <span>Upload a photo in PNG, JPG or SVG format</span>
          <input type="file" id="upload" @change="handleFileChange" hidden />
          <label
            for="upload"
            :style="{
              backgroundColor: 'white',
              color: '#805AD5',
              border: '1px solid',
              borderColor: '#805AD5',
              padding: '0 1rem',
              height: '40px',
              borderRadius: '0.3rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '16px',
              width: 'fit-content',
            }"
            class="upload-label"
            >Select from computer</label
          >

          <img v-if="fileURL" :src="fileURL" alt="Selected File" />
        </div>
      </div>

      <div class="location-section">
        <InputText label="Add Location" placeholder="location" :onChange="handleLocationChange" :value="location" />
      </div>

      <div class="tags-section">
        <InputText label="Add Tags (separate by comma “,”)" placeholder="Travel, Art, Sport" :onChange="handleTagsChange" :value="tags" />
      </div>

      <div class="buttons-section">
        <Button variant="outlined" text="Cancel" @click="handleCancel" />
        <Button type="submit">
          <template v-if="loading">
            <div class="loader-wrapper">
              <Loader />
              Loading...
            </div>
          </template>
          <template v-else> Create Post </template>
        </Button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.create-post-form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 100%;
  margin-top: 1rem;

  .image-upload-section {
    .add-photo-wrapper {
      border: 1px solid $gray-200;
      padding: 50px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      gap: 15px;
      svg {
        width: 70px;
        margin-bottom: -20px;
      }
      img {
        max-height: 250px;
      }
    }
  }

  .buttons-section {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
