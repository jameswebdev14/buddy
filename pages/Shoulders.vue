<template>
  <v-container fluid class="exercise">
    <section class="exercise-content">
      <section class="sideBar">
        <h2 class="mb-2">Shoulders</h2>
        <img class="muscle-anatomy" src="/img/shoulder-muscles.jpg" alt="Shoulder Muscles">
        <div class="info">
          The deltoid muscle is a rounded, triangular muscle located on the uppermost part of the arm and the top of the shoulder. It is named after the Greek letter delta, which is shaped like an equilateral triangle.<br>
          The shoulder muscle, collectively known as the Deltoids, is a three-headed muscle that caps the shoulder area. The three heads of the Deltoid are the Anterior, Lateral, and Posterior. All three Deltoid heads attach to the humerus.<br>
          The scapulohumeral muscles are the muscles that connect the shoulder blades to the upper arms; essentially, these are the muscles around the shoulder joint.
          The primary scapulohumeral muscles include the four muscles that make up the rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis) and deltoid.
        </div>
      </section>
      <section class="exercises">
        <v-card v-for="item in shoulderExercises" :key="item.name" sm12 md4 lg4>
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
  name: 'shoulders',
  data() {
    return {
      shoulderExercises: [
        { name: 'Barbell Shoulder Press', video: 'https://www.youtube.com/embed/2yjwXTZQDDI', info: 'Primarily targets side and front deltoids with assistance from triceps', target: 'Deltoids and triceps' },
        { name: 'Dumbell Shoulder press', video: 'https://www.youtube-nocookie.com/embed/qEwKCR5JCog', info: 'Dumbells allow for a greater range of motion and variations to maximize the muscle building process. As dumbells can sit further back than a barbell they target the side deltoids more, especially if squeezed together at the top', target: 'Deltoids and triceps' },
        { name: 'Upright Rows', video: 'https://www.youtube-nocookie.com/embed/IhZLB48kluc', info: 'This exercise can be hard on the wrist and shoulder joints so it is recommended to use dumbells over a barbell. Works the entire deltoid area and the traps in the back', target: 'Deltoids and trapezium' },
        { name: 'Side Lateral Raise', video: 'https://www.youtube-nocookie.com/embed/b_LEX4n9lOs', info: 'Isolates the side lateral deltoid muscle. The lateral deltoid givers the shoulders width and is not directly effected by other exercises as  much as the rear and front deltoids', target: 'Side Lateral Deltoid' },
        { name: 'Front Lateral Raise', video: 'https://www.youtube-nocookie.com/embed/-t7fuZ0KhDA', info: 'Isolates the front lateral deltoid muscle. This muscle gets significant stimulas from other pressing exercises so direct stimulas might not be needed', target: 'Front Anterior Deltoid' },
        { name: 'Rear Lateral Raise', video: 'https://www.youtube-nocookie.com/embed/Z0HTsZEMedA', info: 'Isolates the rear posterior deltoid muscle. The rear posterior deltoid is at the back of the shoulder and is often stimulated by upper back exercises. This muscle helps to give a full round deltoid when viewed from the side', target: 'Rear Posterior Deltoid' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/****LARGE VIEW****/
@media screen and (min-width:1201px) {
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
