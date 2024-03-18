<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Textarea from "@/components/Textarea.vue";
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";
import PostService from "@/services/postService";
import Loader from "@/components/Loader.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import CreatePostIcon from "@/assets/icons/gallery-add-black.svg";
import FileUploadIcon from "@/assets/icons/file-upload.svg";

const router = useRouter();

const caption = ref("");
const location = ref("");
const file = ref(null);
const fileURL = ref(null);
const tags = ref("");
const loading = ref(false);
const authStore = useAuthStore();

const handleFileChange = (event) => {
  const selectedFile = event.target.files?.[0];
  if (selectedFile) {
    file.value = selectedFile;
    fileURL.value = URL.createObjectURL(selectedFile);
  }
};

const handleLocationChange = (event: any) => {
  location.value = event.target.value;
};

const handleTagsChange = (event: any) => {
  tags.value = event.target.value;
};

const handleCaptionChange = (event: any) => {
  caption.value = event.target.value;
};

const handleCreatePost = () => {
  loading.value = true;

  PostService.createPost({
    creator: {
      userId: authStore.user.userId,
      imageUrl: authStore.user.imageUrl,
      userName: authStore.user.userName,
    },
    caption: caption.value,
    file: file.value,
    location: location.value,
    tags: tags.value,
  })
    .then(() => {
      router.push("/");
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
};

const handleCancel = () => {
  router.go(-1);
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
        <Textarea
          label="Caption"
          :onChange="handleCaptionChange"
          :value="caption"
        />
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
        <InputText
          label="Add Location"
          placeholder="location"
          :onChange="handleLocationChange"
          :value="location"
        />
      </div>

      <div class="tags-section">
        <InputText
          label="Add Tags (separate by comma “,”)"
          placeholder="Travel, Art, Sport"
          :onChange="handleTagsChange"
          :value="tags"
        />
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