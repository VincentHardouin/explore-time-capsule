<template>
  <div class="index">
    <div class="navbar">
      <div class="navbar__title">🔎 Explore Time Capsule</div>
    </div>
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
body {
  margin: 0;
}

.navbar {
  height: 70px;
  color: white;
  background: #4348ca;
  display: flex;
  align-items: center;
  padding: 0 14px;

  &__title {
    font-size: 36px;
    font-family: 'Inter', arial, sans-serif;
    font-weight: 800;
  }
}

.files {
  display: flex;
  margin: 8px;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
