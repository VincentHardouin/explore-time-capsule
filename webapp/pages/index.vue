<template>
  <div class="index">
    <div class="navbar">
      <div class="navbar__title">🔎 Explore Time Capsule</div>
    </div>
    <template v-if="isConfig">
      <h1>{{ path }}</h1>
      <div class="files">
        <File v-for="file in files" :key="file.name" :file="file" />
      </div>
    </template>
    <template v-else>
      <div class="information">
        <div class="information__title">
          Veuillez lancer le script d'installation ("sudo npm run connfigure") puis
          relancez à nouveau les containers.
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({ query, $axios }) {
    const { isConfig } = await $axios.$get('/api/configurations/is-set');
    if (!isConfig) {
      return { isConfig };
    }
    const path = query.path ? query.path : '';
    const files = await $axios.$get('/api/files', { params: { path } });
    return { path, files, isConfig };
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

.information {
  width: 100%;
  text-align: center;

  &__title {
    height: 40px;
    font-size: 20px;
    font-family: 'Roboto', arial, sans-serif;
    font-weight: 700;
  }
}
</style>
