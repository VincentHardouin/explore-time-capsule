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
    const slug = params.slug ? params.slug : '';
    const files = await $axios.$get('/api/files', { params: { path: slug } });
    return { slug, files };
  },
};
</script>

<style lang="scss">
.files {
  display: flex;
  flex-wrap: wrap;
}
</style>
