<template>
  <v-container fluid class="exercise">
    <section class="exercise-content">
      <section class="sideBar">
        <h2 class="mb-2">Back</h2>
        <img class="muscle-anatomy" src="/img/back-muscles.jpg" height="100%" alt="Abdominal Muscles">
        <div class="info">
        The back is made up of the trapezius muscle, latissimus dorsi muscle, levator scapulae muscle and the rhomboid major & minor muscles<br><br>
        <span class="highlight-text">Trapezius muscle</span><br>The Trapezius muscle is a broad, flat and triangular muscle. The muscles on each side form a trapezoid shape. It is the most superficial of all the back muscles.
        Attachments: Originates from the skull, ligamentum nuchae and the spinous processes of C7-T12. The fibres attach to the clavicle, acromion and the scapula spine.
        Innervation: Motor innervation is from the accessory nerve. It also receives proprioceptor fibres from C3 and C4 spinal nerves.
        Actions: The upper fibres of the trapezius elevates the scapula and rotates it during abduction of the arm. The middle fibres retract the scapula and the lower fibres pull the scapula inferiorly.<br><br>
        <span class="highlight-text">The Latissimus Dorsi muscle</span><br>The Latissimus Dorsi muscle originates from the lower part of the back, where it covers a wide area.<br>
        Attachments: Has a broad origin – arising from the spinous processes of T6-T12, iliac crest, thoracolumbar fascia and the inferior three ribs. The fibres converge into a tendon that attaches to the intertubercular sulcus of the humerus.
        Innervation: Thoracodorsal nerve.
        Actions: Extends, adducts and medially rotates the upper limb.<br><br>
        <span class="highlight-text">The Levator Scapulae</span><br>The Levator Scapulae is a small strap-like muscle. It begins in the neck, and descends to attach to the scapula.<br>
        Attachments: Originates from the transverse processes of the C1-C4 vertebrae and attaches to the medial border of the scapula.
        Innervation: Dorsal scapular nerve.
        Actions: Elevates the scapula.<br><br>
        <span class="highlight-text">Rhomboid muscles</span><br>
        There are two rhomboid muscles – major and minor.
        The rhomboid minor is situated superiorly to the major.<br>
        Rhomboid Major
        Attachments: Originates from the spinous processes of T2-T5 vertebrae. Attaches to the medial border of the scapula, between the scapula spine and inferior angle.
        Innervation: Dorsal scapular nerve.
        Actions: Retracts and rotates the scapula.<br>
        Rhomboid Minor
        Attachments: Originates from the spinous processes of C7-T1 vertebrae. Attaches to the medial border of the scapula, at the level of the spine of scapula.
        Innervation: Dorsal scapular nerve.
        Actions: Retracts and rotates the scapula.
        </div>
      </section>
      <section class="exercises">
        <v-card v-for="item in backExercises" :key="item.name" sm12 md4 lg4>
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
  name: 'back',
  data() {
    return {
      backExercises: [
        { name: 'Deadlift', video: 'https://www.youtube-nocookie.com/embed/ytGaGIn3SjE?start=51', info: 'Probably the King of weight exercises. Targets multiple muscles including most of the back muscles', target: 'Complete back & posterial core' },
        { name: 'Chins', video: 'https://www.youtube-nocookie.com/embed/eGo4IYlbE5g?start=51', info: 'Chins can be done with various hand spacing to target slightly different parts of the back. Experiment to find what suits you. Use a exercise rope to assist if you are not able to do many initially', target: 'Upper back, lats and biceps' },
        { name: 'Rows', video: 'https://www.youtube-nocookie.com/embed/IqJozIKT_Uc?start=51', info: 'Rows are a core back exercise. They can be done with barbell, dumbells or pulleys. Experiment to find what works best for you', target: 'Upper and middle back' },
        { name: 'Lat Pull Down', video: 'https://www.youtube-nocookie.com/embed/CAwf7n6Luuc', info: 'An easier alternative to chins because you are not lifting your body weight. Useful for a beginner before building up to chins', target: 'Upper back, lats and biceps' },
        { name: 'T-Bar Rows', video: 'https://www.youtube-nocookie.com/embed/j3Igk5nyZE4?start=51', info: 'A version of a barbell row where the hands are close together. Effectively targets the back and can be preferred over most other barbell row variations', target: 'Upper and middle back' },
        { name: 'Back Extensions', video: 'https://www.youtube-nocookie.com/embed/ph3pddpKzzw?start=51', info: 'Specifically targets the lower back and lumbar regions', target: 'Lower back' }
      ]
    }
  }
}
</script>

<style scoped>
/** MOBILE DEFAULT **/
.muscle-anatomy {
    width: 100%;
    height: 300px;
}

.info {
    padding: 5px;
    font-size: 1rem;
}

.info ul li {
    list-style: none;
}

/**********************************************/
@media screen and (min-width:768px) and (max-width:1200px) {
  .exercise-content {
      margin: 0 20px;
  }

  .sideBar {
    display: grid;
    grid-row-gap: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto auto;
  }

  .exercises {
      margin-top:30px;
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(350px, auto) auto;
      justify-content: center;

  }

  .muscle-anatomy {
      width: 100%;
      height: 150% !important;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
  }

  .info {
      padding: 15px;
      font-size: 1.3rem;
      grid-column: 1 / -1;
      grid-row: 3 / 4;
  }
}

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
