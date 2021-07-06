<template>
  <div>
    <h1>{{ this.slug }}</h1>
    <h2>{{ this.files }}</h2>
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
