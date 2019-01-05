<template>
  <v-container>
    <v-content class="form-container">
      <h2>Register</h2>
      <v-form ref="form">
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
        <v-text-field v-model="email" label="E-mail" :rules="emailRules" required></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          :rules="passwordRules"
          type="password"
          required
        ></v-text-field>
        <v-btn @click.prevent="register">Register</v-btn>
      </v-form>
    </v-content>
  </v-container>
</template>

<script>
import "../firebase_config";
import firebase from "firebase/app";

export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length < 15) || "Name must be less than 15 characters"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 6) || "Password must be more than 6 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    register() {
      console.log(this.name);
      if (this.$refs.form.validate) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(res => {
            console.log("User registered");
            this.$store.commit("setUserStatus", true);
            let newUser = {
              status: true,
              email: this.email,
              id: res.user.uid
            };
            this.$store.commit("setLoggedStatus", newUser);
            this.$router.push("/");
            // firebase.auth().onAuthStateChanged(function(user) {
            //   if (user) {
            //     // User is signed in.
            //     this.$store.commit("setUserStatus", true);
            //   } else {
            //     // No user is signed in.
            //     this.$store.commit("setUserStatus", false);
            //   }
            // });
            // console.log(res.user.uid);
          })
          .catch(err => {
            console.log("Unable to register user: " + err.message);
            let u = {
              status: false,
              email: "",
              id: ""
            };
            this.$store.commit("setLoggedStatus", newUser);
            this.$store.commit("setUserStatus", false);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .content {
    margin: 0 50px;
  }
}
</style>
