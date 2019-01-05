<template>
  <v-container id="exercise-container">
    <h1 class="mb-3">Exercises</h1>
     <section id="exercises">
        <div v-for="item in exerciseList" :key="item.name">
          <v-tooltip top>
            <v-card justify-content-center  slot="activator">
              <nuxt-link :to="item.name"><img :src='item.img' alt="No Image"/>
              <v-card-title>{{ item.name }}</v-card-title></nuxt-link>
            </v-card>
            <span>go to {{ item.name }} page</span>
          </v-tooltip>
        </div>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'exercises',
  methods: {

  },
  data() {
    return {
      exerciseList: [
        {
        name: 'Abdominals',
        img: '/img/abs/abs-profile.jpg'
        },
        {
          name: 'Arms',
          img: '/img/arms/arms-profile.jpg'
        },
        {
          name: 'Back',
          img: '/img/back/back-profile.jpg'
        },
        {
          name: 'Chest',
          img: '/img/chest/chest-profile.jpg'
        },
        {
          name: 'Legs',
          img: '/img/legs/legs-profile.jpg'
        },
        {
          name: 'Shoulders',
          img: '/img/shoulders/shoulders-profile.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/* DEFAULT MOBILE */
.card {
  width:100%;
  margin-bottom:15px;
  cursor: pointer;

  img {
    width:100%;
    height:250px;
  }
}

.v-card__title {
  font-size:1.2rem;
  font-style:bold;
  letter-spacing:5px;
  color:white;
  text-decoration: none;
}


/* MEDIUM VIEW */
@media screen and (min-width:768px) {
  .card {
    max-width: 400px;
    margin: 30px;

    img {
      height:400px
    }
  }

  .v-card__title {
    font-size:1.2rem;

  }
}


/* LARGE VIEW */
@media screen and (min-width:1200px) {
  #exercise-container {
    padding: 50px 10%;
  }



  h1 {
    margin-left:30px;
  }

  .card {
    margin: 30px;

    img {
      height:400px;
    }
  }

  .card__title {
    font-size:1.4rem;

  }

}
</style>

