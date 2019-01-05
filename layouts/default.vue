<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app disable-route-watcher>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/">
              <v-list-tile-title @click="drawer = false">HOME</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fitness_center</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/exercises">
              <v-list-tile-title @click="drawer = false">EXERCISES</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/nutrition">
              <v-list-tile-title @click="drawer = false">NUTRITION</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="this.$store.getters.getLoggedStatus">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/workouts">
              <v-list-tile-title @click="drawer = false">WORKOUTS</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="this.$store.getters.getLoggedStatus">
          <v-list-tile-action>
            <v-icon>insert_chart_outlined</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/stats">
              <v-list-tile-title @click="drawer = false">STATS</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="this.$store.getters.getLoggedStatus">
          <v-list-tile-action>
            <v-icon>cloud_upload</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/gallery">
              <v-list-tile-title @click="drawer = false">GALLERY</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-if="!this.$store.getters.getLoggedStatus">
          <v-list-tile-action>
            <v-icon>person_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/login">
              <v-list-tile-title @click="drawer = false">LOGIN</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!this.$store.getters.getLoggedStatus">
          <v-list-tile-action>
            <v-icon>group_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/register">
              <v-list-tile-title @click="drawer = false">REGISTER</v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="this.$store.getters.getLoggedStatus">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/">
              <v-list-tile-title @click="logout, drawer = false">
                <i class="fas fa-sign-out-alt"></i>LOGOUT
              </v-list-tile-title>
            </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left router>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-up"></v-toolbar-side-icon>
      <v-toolbar-title>WORKOUT BUDDY</v-toolbar-title>
      <v-toolbar-items class="white--text hidden-md-and-down">
        <v-btn to="/">
          <v-icon>home</v-icon>HOME
        </v-btn>
        <v-btn to="/exercises">
          <v-icon>fitness_center</v-icon>EXERCISES
        </v-btn>
        <v-btn to="/nutrition">
          <v-icon>favorite</v-icon>NUTRITION
        </v-btn>
        <div style="width:2px; height:100%; background-color:white; margin:0 20px;"></div>
        <v-btn to="/workouts" v-if="$store.state.userStatus">MY WORKOUTS</v-btn>
        <v-btn to="/stats" v-if="$store.state.userStatus">
          <v-icon>insert_chart_outlined</v-icon>MY STATS
        </v-btn>
        <v-btn to="/gallery" v-if="$store.state.userStatus">
          <v-icon>cloud_upload</v-icon>MY GALLERY
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="navy white--text hidden-md-and-down">
        <v-btn flat to="/login" v-if="!$store.state.userStatus">
          <v-icon>person_outline</v-icon>LOGIN
        </v-btn>
        <v-btn flat to="/register" v-if="!$store.state.userStatus">
          <v-icon>group_add</v-icon>REGISTER
        </v-btn>
        <v-btn flat @click="logout" to="/" v-if="$store.state.userStatus">LOGOUT</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed justify-content-center>
      <span>&copy; Nigel Wheeldon 2018</span>
    </v-footer>
    <v-snackbar v-model="snackbar" :timeout="4000" top @showMsg="snackbar = true">
      <v-btn flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import firebase from "firebase/auth";

export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      miniVariant: true,
      snackbar: false
    };
  },

  methods: {
    logout() {
      firebase.signOut();
    }
  },
  computed: {
    userStatus() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          this.$store.commit("setUserStatus", true);
        } else {
          // No user is signed in.
          this.$store.commit("setUserStatus", false);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* DEFAULT MOBILE VIEW */
.v-container {
  padding: 0;
}

.v-btn {
  color: white;
}

.toolbar__title {
  font-size: 1.7rem;
}

.icon {
  margin-right: 5px;
}

navigation__drawer {
  background-color: rgba(210, 10, 10, 0.6);
}

/* MEDIUM VIEW */
@media screen and (min-width: 768px) {
  .toolbar__title {
    margin-right: 100px;
  }
}
</style>


