<template>
  <v-container fluid>
    <section id="home-top-section">
      <div xs12 sm12 md5 id="home-image-ctn">
        <img class="home-image" src="../assets/img/the-fitness-pro-mansarovar.jpg" alt="No Image">
      </div>
      <div xs12 sm12 md7 id="home-text">
        <v-card justify-center align-center text-align-center>
          <v-card-title class="headline">
            Welcome to your
            <span id="heading">WorkoutBuddy</span>
          </v-card-title>
          <v-card-text>
            <h3>WorkoutBuddy is designed to help you with your training goals by</h3>
            <ul>
              <li>Providing information about exercises, diet and nutrition</li>
              <li>Allowing you to easily keep track of your training progress - sets, reps, rest and weights used</li>
              <li>Instant viewing of progress and plataus</li>
              <li>To add relevent training notes for future guidence</li>
              <li>To easily allow the creation of new customised exercise routines so you can structure your training to suit your needs</li>
            </ul>
            <br>
            <h3
              v-if="!this.$store.getters.getLoggedStatus"
            >Please create a free account or login to utilize all the features of the app</h3>
            <h3>I hope you enjoy it and find it useful</h3>
          </v-card-text>
        </v-card>
      </div>
    </section>
    <section id="video-section" hidden-md-and-down justify-space-around>
      <div id="home-vid1">
        <p>Gym Fails</p>
        <iframe
          title="Gym Fails"
          src="https://www.youtube.com/embed/hmeZ9eaCB2s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div id="home-vid2">
        <p>Eating for Muscle Growth</p>
        <iframe
          title="Eating for muscle growth"
          src="https://www.youtube-nocookie.com/embed/C1s_2au4qcM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div id="home-vid3">
        <p>Hardgainer Training for Muscle Growth</p>
        <iframe
          title="Hardgainer Training for Muscle Growth"
          src="https://www.youtube-nocookie.com/embed/NR6ysjEeJvI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
/* DEFAULT MOBILE */
.container {
  padding: 0 !important;
}

#home-top-section {
  flex-flow: column;
}

.card {
  margin: 20px auto;
}

.toolbar__title {
  font-size: 1.4rem;
}

#heading {
  font-weight: bold;
  font-style: italic;
  font-size: 1.4rem;
}

.card-text h3 {
  margin-bottom: 12px;
  color: bisque;
  line-height: 25px;
}

.home-image {
  max-width: 100%;
  margin: auto;
}

#video-section {
  display: none;
}

/* MEDIUM VIEW */
@media screen and (min-width: 768px) and (max-width: 1263px) {
  home-top-section {
    flex-flow: row;
    flex-wrap: wrap;
  }

  #heading {
    font-size: 2rem;
    margin-left: 30px;
  }

  .card {
    margin: 0 20px;
    padding: 20px;
  }

  .card__text h3 {
    margin-bottom: 20px;
  }

  .home-image {
    height: 460px;
    width: 100%;
  }

  #video-section {
    display: block;
    margin: 20px 80px;
    display: grid;
    grid-row-gap: 20px;
    grid-template-rows: repeat(3, 400px);
    grid-template-columns: 1fr;
    justify-items: center;
  }

  #video-section div {
    width: 80%;
  }

  .home-image2 {
    display: none;
  }

  iframe {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
}

/******LARGE SCREENS *******/
@media screen and (min-width: 1264px) {
  .container {
    padding: 0 50px;
  }

  #home-top-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;
    grid-column-gap: 30px;
  }

  #home-image-ctn {
    height: 400px;
  }

  #home-text {
    height: 100%;
  }

  .home-image {
    height: 400px;
    width: 100%;
  }

  #heading {
    font-size: 2rem;
    margin-left: 20px;
    letter-spacing: 3px;
    text-shadow: 2px 2px red;
  }

  .v-card {
    margin: 0;
    height: 100%;
    width: 100%;
    padding: 0;
  }

  .card__text {
    padding: 20px;
    height: 400px;
  }

  .home-image2 {
    display: none !important;
  }

  #video-section {
    margin-top: 30px;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 320px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
  }

  iframe {
    width: 100%;
    height: 320px;
  }
}
</style>

