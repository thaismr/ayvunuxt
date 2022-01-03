<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Log in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="username"
                v-model="username"
                prepend-icon="mdi-account"
                name="username"
                label="Username"
                type="text"
                :error="error"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                :error="error"
                :rules="[rules.required]"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              id="login"
              color="primary"
              to="/"
              :loading="loading"
              @click="login"
              >Log in</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      username: process.env.NODE_ENV === 'production' ? '' : 'test',
      password: process.env.NODE_ENV === 'production' ? '' : 'vwtte7bw896866',
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  created() {
    this.$axios.get('/api/login-set-cookie/')
  },

  methods: {
    login() {
      const vm = this
      const { username, password } = this
      this.username = ''
      this.password = ''
      this.$store
        .dispatch('auth/login', {
          username,
          password,
        })
        .then(() => {
          vm.$router.push('/')
        })
    },
  },
}
</script>

<style></style>
