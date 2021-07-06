<template>
  <div>
    <h1>{{ slug }}</h1>
    <div class="files">
      <File v-for="file in files" :key="file.name" :file="file" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const slug = params.slug ? params.slug : '/';
    const response = await $axios.get('/api/files');
    return { slug, files: response.data };
  },
};
</script>

<style lang="scss">
.files {
  display: flex;
  flex-wrap: wrap;
}
</style>
