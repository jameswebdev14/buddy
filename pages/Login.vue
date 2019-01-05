<template>
  <v-container>
    <v-content class="form-container">
      <h2>Login</h2>
      <v-form @submit.prevent="login">
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="password" label="Password" :rules="passwordRules" required></v-text-field>
        <v-btn>Log In</v-btn>
      </v-form>
    </v-content>
  </v-container>
</template>

<script>
import "../firebase_config";
import firebase from "firebase/app";

export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 8) || "Password must be more than 8 characters"
      ]
    };
  },
  methods: {
    login() {
      console.log("logging in");
      if (this.$refs.form.validate) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(res => {
            console.log("User registered");
            let user = {
              status: true,
              email: this.email,
              id: res.uid
            };
            this.$store.commit("setLoggedStatus", user);
            this.$router.push("/");
            this.$store.commit("setUserStatus", true);
            // firebase.auth().onAuthStateChanged(function(user) {
            //   if (user) {
            //     // User is signed in.
            //     this.$store.commit("setUserStatus", true);
            //   } else {
            //     // No user is signed in.
            //     this.$store.commit("setUserStatus", false);
            //   }
            // });
          })
          .catch(error => {
            console.log("Unable to register user: " + error);
            let user = {
              status: false,
              email: ""
            };
            this.$store.commit("setUserStatus", false);
            this.$store.commit("setLoggedStatus", user);
          });
      }
    }
  }
};
</script>

<style>
</style>
