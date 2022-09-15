<template>
  <v-card>
    <v-card-title> Iniciar Sesión </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
          label="Username"
          v-model="username"
          :rules="[(v) => !!v || 'Se requiere su Usuario']"
          required
        >
        </v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          :rules="[(v) => !!v || 'Se requiere su contraseña']"
          required
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" :disabled="!isValid" @click="submit">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SessionService from "@/services/session-service";
export default {
  name: "sign-in",
  data() {
    return {
      username: null,
      password: null,
      isValid: true,
      found: false,
      owners: [],
      test: "",
      consultants: [],
    };
  },
  async beforeMount(){
    const cookie = this.$cookie.get("token")
    if (cookie != null) {
      await this.$router.push({name: "home"});
    }
  },
  methods: {
    navigateToSignUp() {
      this.$router.push({ name: "sign-up" });
    },
    submit() {
      SessionService.login(this.username, this.password).then(({ data }) => {
        this.$cookie.set("token", data.access_token);
        this.$router.push({ name: "home" });
      });
    },
    navigateToHomeOwner() {
      this.$router.push({ name: "home-owner" });
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
