<template>
  <nuxt-link :to="url" class="file">
    <div class="file__icon">
      <img :src="icon" />
    </div>
    <div class="file__name">
      {{ file.name }}
    </div>
    <template v-if="!file.isDirectory">
      <div class="file__size">
        {{ file.size }}
      </div>
    </template>
  </nuxt-link>
</template>

<script>
export default {
  name: 'File',
  props: {
    file: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return this.file.isDirectory ? '/folder.png' : '/file.png';
    },
    url() {
      return this.file.isDirectory
        ? `/?path=${this.path}/${this.file.name}`
        : '/';
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
  justify-content: flex-end;
  align-items: center;

  &__icon {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
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
}
</style>
