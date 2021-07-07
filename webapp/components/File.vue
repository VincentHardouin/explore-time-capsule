<template>
  <nuxt-link v-if="file.isDirectory" :to="url" class="file">
    <div class="file__icon file__icon--directory">
      <img :src="icon" />
    </div>
    <div class="file__name">
      {{ file.name }}
    </div>
  </nuxt-link>
  <div v-else class="file" @click="download">
    <div class="file__icon file__icon--file">
      <img :src="icon" />
    </div>
    <div class="file__name">
      {{ file.name }}
    </div>
    <div class="file__size">
      {{ file.size }}
    </div>
  </div>
</template>

<script>
import fileDownload from 'js-file-download';

export default {
  name: 'File',
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  computed: {
    icon() {
      return this.file.isDirectory ? '/folder.png' : '/file.png';
    },
    url() {
      return this.file.name === '...'
        ? `/?path=${this.file.path}`
        : `/?path=${this.file.path}/${this.file.name}`;
    },
    urlForDownload() {
      return `/api/files/download?path=${this.file.path}/${this.file.name}`;
    },
  },
  methods: {
    async download() {
      const result = await this.$axios.$get(this.urlForDownload);
      fileDownload(result, this.file.name);
    },
  },
};
</script>

<style lang="scss">
.file {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: default;
  text-decoration: none;
  color: #111827;

  &:visited {
    color: #111827;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease-in;
  }

  &__icon {
    width: 50px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }

    &--directory {
      img {
        height: 40px;
      }
    }

    &--file {
      img {
        width: 32px;
        height: 40px;
      }
    }
  }

  &__name,
  &__size {
    width: 100%;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &__size {
    font-size: 11px;
  }
}
</style>
