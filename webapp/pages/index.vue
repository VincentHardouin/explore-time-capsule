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
      <div class="form">
        <div class="form__title">
          Veuillez remplir ce formulaire, pour utiliser l'application :
        </div>
        <form class="form__fields" @submit.prevent="saveConfig">
          <label for="address">Adresse IP de la Time Capsule :</label>
          <input
            id="address"
            v-model="address"
            type="text"
            placeholder="Adresse IP"
          />
          <label for="password">
            Mot de passe du disque de la Time Capsule :
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Mot de passe"
          />
          <div class="form__button">
            <button type="submit">Sauvegarder la configuration</button>
          </div>
        </form>
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
  data() {
    return {
      address: '',
      password: '',
    };
  },
  watchQuery: ['path'],
  methods: {
    async saveConfig() {
      await this.$axios.$post('/api/configurations', {
        address: this.address,
        password: this.password,
      });
      this.$router.app.refresh();
    },
  },
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

.form {
  width: 600px;
  margin: 24px auto;

  &__title {
    font-size: 20px;
    font-family: 'Roboto', arial, sans-serif;
    font-weight: 600;
    margin-bottom: 14px;
  }

  &__fields {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 14px;
      font-size: 14px;
      font-family: 'Roboto', arial, sans-serif;
    }

    input {
      height: 30px;
      margin-bottom: 14px;
      font-family: 'Roboto', arial, sans-serif;
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__button {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      height: 30px;
      width: 300px;
      background-color: #4348ca;
      border: none;
      color: #fff;
      font-family: 'Roboto', arial, sans-serif;
      font-size: 16px;
      line-height: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
