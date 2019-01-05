<template>
  <v-container fluid class="exercise">
    <section class="exercise-content">
      <section class="sideBar">
        <h2 class="mb-2">Abdominals</h2>
        <img class="muscle-anatomy" src="/img/ab-muscle.jpg" alt="Abdominal Muscles">
        <div class="info">
          The four main abdominal muscle groups that combine to completely cover the internal organs include:<br><br>
          <span class="highlight-text">Transversus abdominis - the deepest muscle layer.</span><br>Its main roles are to stabilise the trunk and maintain internal abdominal pressure<br><br>
          <span class="highlight-text">Rectus abdominis - slung between the ribs and the pubic bone at the front of the pelvis.</span><br>When contracting, this muscle has the characteristic bumps or bulges that are commonly called ‘the six pack’. The main function of the rectus abdominis is to move the body between the ribcage and the pelvis<br><br>
          <span class="highlight-text">External oblique muscles - these are on each side of the rectus abdominis.</span><br>The external oblique muscles allow the trunk to twist, but to the opposite side of whichever external oblique is contracting. For example, the right external oblique contracts to turn the body to the left<br><br>
          <span class="highlight-text">Internal oblique muscles - these flank the rectus abdominis and are located just inside the hipbones.</span><br>They operate in the opposite way to the external oblique muscles. For example, twisting the trunk to the left requires the left side internal oblique and the right side external oblique to contract together<br><br>
        </div>
      </section>
      <section class="exercises">
        <v-card v-for="item in abExercises" :key="item.name" sm12 md4 lg4>
            <v-card-title class="my-1">{{ item.name }}</v-card-title>
            <iframe :src="item.video" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>></iframe>
            <v-card-text>{{ item.info }}</v-card-text>
        </v-card>
      </section>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'abs',
  data() {
    return {
      abExercises: [
        { name: 'Crunch', video: 'https://www.youtube-nocookie.com/embed/_M2Etme-tfE', info: 'A core abdominal exercise that effects the front abdominal muscles. Raise and curl youe shoulders towards your knees using your abdominal muscles.' },
        { name: 'Hanging Leg Raise', video: 'https://www.youtube-nocookie.com/embed/wQkDkFQPpbQ', info: 'An intense abdominal exercise. Start with legs bent and curl the hips forward or to the side. As you get more advanced extend the legs to increase intensity' },
        { name: 'Plank', video: 'https://www.youtube-nocookie.com/embed/pSHjTRCQxIw', info: 'The plank is a good core exercise. Keep your abdominals tight and pulled in' },
        { name: 'Reverse Crunch', video: 'https://www.youtube-nocookie.com/embed/hyv14e2QDq0', info: 'In the reserver crunch raise your hipes towards your chest, wihtout using any swinging and assistance. This targets the lower abdominals' },
        { name: 'Ab Wheel', video: 'https://www.youtube-nocookie.com/embed/rqiTPdK1c_I?start=51', info: 'Difficult to get right but when done properly is a excellent core strengthening exercise' },
        { name: 'Oblique Crunches', video: 'https://www.youtube.com/embed/unMZPDjMn10', info: 'Training the oblique muscles at the side of the abdominal area tightens the waist'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/* MOBILE DEFAULT */
.container {
  margin:0;
  padding:0;

  h2 {
    color:white;
    font-size:1.4rem;

  }

}


/******  MEDIUM VIEW  ******/
@media screen and (min-width:768px) and (max-width:1199px) {
  .container {
    margin:0 20px;

    h2 {
      font-size: 1.6rem;
    }



    iframe {
      width:100%;
      height:300px;
    }
  }

}

/******  LARGE VIEW  ******/
@media screen and (min-width:1200px) {
  .container {
    h2 {
      font-size: 1.6rem;

    }

    .card {
      margin: 10px;
    }

    .card__title {
      color: white;
      font-size:1.4rem;
      text-decoration: none;
    }

    iframe {
      height:300px;
    }

    .sideBar {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: minmax(350px, 450px) 1fr;
        margin-bottom:30px
    }

    .exercises {
        grid-column: 1 / -1;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: 2 / -1;
    }
    .muscle-anatomy {
        width: 100%;
        height: 100%;
        grid-column: 1 / 2;
    }
    .info {
        padding: 20px;
        font-size: 1.4rem;
        grid-column: 2 / -1;
    } display: grid;
  }

}
</style>

