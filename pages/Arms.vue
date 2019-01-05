<template>
  <v-container fluid class="exercise">
    <section class="exercise-content">
      <section class="sideBar">
        <h2 class="mb-2">Arms</h2>
        <img class="muscle-anatomy" src="/img/arm-muscles.jpg" alt="Abdominal Muscles">
        <div class="info">
          The muscles of the arm that can be seen easily on the surface include:<br><br>
          <span class="highlight-text">Biceps</span><br>This large muscle of the upper arm is formally known as the biceps brachii muscle, and rests on top of the humerus bone. It rotates the forearm and also flexes the elbow.<br><br>
          <span class="highlight-text">Triceps</span><br>This large muscle in the back of the upper arm helps straighten the arm. It is formally known as the triceps brachii muscle.<br><br>
          <span class="highlight-text">Brachioradialis</span><br>This muscle, located at the top of the forearm near the elbow, helps rotate the forearm both outwardly and inwardly. It also flexes the forearm at the elbow.<br><br>
          <span class="highlight-text">Extensor carpi radialis longus</span><br>This muscle next to the brachioradialis is one of five major muscles that help to move the wrist in multiple directions. When you clench your fist, this muscle bulges out from the skin.<br><br>
          The Biceps are stimulated by most back exercises, especially rows and versions of the pullup and the Triceps are stimulated by all pressing movements for the chest and shoulders
          as well the direct bicep and tricep exercises mentioned below. On pressing movements narrowing the grip places more stress on the triceps and less on the chest or shoulders.<br><br>
          The forearms are used in all upper body exercises but to target the forearms specifically additional forearm exercises are used.
        </div>
      </section>
      <section class="exercises">
        <v-card v-for="item in armExercises" :key="item.name" sm12 md4 lg4>
            <v-card-title class="my-1">{{ item.name }}</v-card-title>
            <v-card-text class="card-target">{{ item.target }}</v-card-text>
            <iframe :src="item.video" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>></iframe>
            <v-card-text>{{ item.info }}</v-card-text>
        </v-card>
      </section>
    </section>
  </v-container>
</template>

<script>
export default {
name: 'arms',
data() {
  return {
    armExercises: [
      { name: 'Tricep Cable Pushdown', video: 'https://www.youtube-nocookie.com/embed/2-LAMcpzODU', target: 'Triceps', info: 'Keep back slightly bent forward and push down, using just the arms untill almost locked out' },
      { name: 'Lying Tricep Extension', video: 'https://www.youtube-nocookie.com/embed/d_KZxkY_0cM', target: 'Triceps', info: 'Keeping upper arm straight up, slowly lower forearm at the elbpw to the forehead or just behind, and return' },
      { name: 'Tricep Kickbacks', video: 'https://www.youtube-nocookie.com/embed/6SS6K3lAwZ8', target: 'Triceps', info: 'Keep upper arm level with the floor and extend your lower arm back. Go for maximun contraction at the top and hold for at least 2 seconds' },
      { name: 'Close Grip Bench Press', video: 'https://www.youtube.com/embed/cXbSJHtjrQQ', target: 'Triceps', info: 'Keep grid 6 - 12 inches apart and elbows tucked close to the body, raise and lower slowly without bouncing at the bottom' },
      { name: 'Single Arm Rear Extension', video: 'https://www.youtube.com/embed/_gsUck-7M74', target: 'Triceps', info: 'Keep elbow back and go for full stretch. Use your other hand to assist a few more reps if needed' },
      { name: 'Barbel Curl', video: 'https://www.youtube.com/embed/kwG2ipFRgfo', target: 'Biceps', info: 'Main bulk and strength bicep exercise' },
      { name: 'Dumbell Curl', video: 'https://www.youtube.com/embed/ykJmrZ5v0Oo', target: 'Biceps', info: 'More flexible alternative to barbell curls allowing greater range of motion' },
      { name: 'Close Grip Pullup', video: 'https://www.youtube.com/embed/e_sWgp9knEU', target: 'Biceps', info: 'The close grip pull up places more stress on the biceps compared to the standard/wide width back version. Keep elbows in and do not release tension at the bottom' },
      { name: 'Reverse Grip Rows', video: 'https://www.youtube.com/embed/3gdGSSgDby8', target: 'Biceps', info: 'Rows are primarily used for the back, however by reversing your grip you put much more stress on the biceps. Pull up with your elbow' },
      { name: 'Concentration Curls', video: 'https://www.youtube.com/embed/Jvj2wV0vOYU', target: 'Biceps', info: 'Concentration curls are a specific and strict bicep exercise' },
      { name: 'Forearm Exercises', video: 'https://www.youtube.com/embed/UvYfOYVpEVQ', target: 'Forearms', info: 'Most forearm exercises include some type of wrist curl, either with a overhand or underhand grip' },
    ]
  }
}
}
</script>

<style lang="scss" scoped>


@media screen and (min-width:768px) {



}

/*****LARGE VIEW*******/
@media screen and (min-width:1200px) {
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

</style>
