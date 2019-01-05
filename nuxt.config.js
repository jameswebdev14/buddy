const pkg = require("./package");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#FFFFFF" },

  /*
   ** Global CSS
   */
  css: ["vuetify/src/stylus/main.styl", "assets/css/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuetify"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // [
    //   "nuxt-fire",
    //   {
    //     config: {
    //       development: {
    //         apiKey: "AIzaSyAUMtRjxRXJXBEPZ_8IhAKz5csW0F0xQFc",
    //         authDomain: "workoutbuddy-a491d.firebaseapp.com",
    //         databaseURL: "https://workoutbuddy-a491d.firebaseio.com",
    //         projectId: "workoutbuddy-a491d",
    //         storageBucket: "workoutbuddy-a491d.appspot.com",
    //         messagingSenderId: "786290502823"
    //       },
    //       production: {
    //         apiKey: "AIzaSyAUMtRjxRXJXBEPZ_8IhAKz5csW0F0xQFc",
    //         authDomain: "workoutbuddy-a491d.firebaseapp.com",
    //         databaseURL: "https://workoutbuddy-a491d.firebaseio.com",
    //         projectId: "workoutbuddy-a491d",
    //         storageBucket: "workoutbuddy-a491d.appspot.com",
    //         messagingSenderId: "786290502823"
    //       }
    //     }
    //   }
    // ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
