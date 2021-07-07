<template>
  <div>
    <h1>{{ path }}</h1>
    <div class="files">
      <File v-for="file in files" :key="file.name" :file="file" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ query, $axios }) {
    const path = query.path ? query.path : '';
    const files = await $axios.$get('/api/files', { params: { path } });
    return { path, files };
  },
  watchQuery: ['path'],
};
</script>

<style lang="scss">
.files {
  display: flex;
  flex-wrap: wrap;
}
</style>
