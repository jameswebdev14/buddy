<template>
  <v-container fluid class="exercise">
    <section class="exercise-content">
      <section class="sideBar">
        <h2 class="mb-2">Chest</h2>
        <img class="muscle-anatomy" src="/img/chest-muscles.gif" alt="Chest Muscles">
        <div class="info">
        Pectoralis muscle, any of the muscles that connect the front walls of the chest with the bones of the upper arm and shoulder.<br>
        There are two such muscles on each side of the sternum (breastbone) in the human body: pectoralis major and pectoralis minor.<br>
        The pectoralis major, the larger and more superficial, originates at the clavicle (collarbone), the sternum, the ribs, and a tendinous extension of the external oblique abdominal muscle. The pectoralis major extends across the upper part of the chest and is attached to a ridge at the rear of the humerus (the bone of the upper arm). Its major actions are adduction, or depression, of the arm (in opposition to the action of the deltoideus muscle) and rotation of the arm forward about the axis of the body.<br>
        When the raised arms are fixed (as in mountain climbing), it assists the latissimus dorsi and teres major muscles in pulling the trunk up.<br>
        The pectoralis minor lies, for the most part, beneath the pectoralis major, arising from the middle ribs and inserting into (attaching to) the scapula (shoulder blade). It aids in drawing the shoulder forward and downward (in opposition to the trapezius muscle).
        </div>
      </section>
      <section class="exercises">
        <v-card v-for="item in chestExercises" :key="item.name" sm12 md4 lg4>
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
  name: 'chest',
  data() {
    return {
      chestExercises: [
        { name: 'Barbell Bench Press', video: 'https://www.youtube.com/embed/Xyma7Bkvds0', info: 'The king of chest exercises. Allowing the greatest weight. Can be donne on incline or decline to target upper and lower chest areas', target: 'Complete chest area' },
        { name: 'Chest Dips', video: 'https://www.youtube.com/embed/x_3sNsauCsU', info: 'An excellant exercise for the middle to lower chest. To target the chest and not the triceps lean forward with legs back and allow elbows to go out to the sides. To increase intensity add weight via a weight belt', target: 'Middle and lower chest' },
        { name: 'Dumbell Flyes', video: 'https://www.youtube.com/embed/eozdVDA78K0', info: 'An isolation exercise for the chest. Often used as a warmup, shaping or pre-fatigue exercise before moving to the press', target: 'Middle chest' },
        { name: 'Pulley Crossbody Pull', video: 'https://www.youtube.com/embed/6KObip9bSDM', info: 'By altering the height of the pulley you can target different parts of the chest. Offers a good range of motion and can be done one handed or two', target: 'Complete chest area' },
        { name: 'Dumbell Bench Press', video: 'https://www.youtube.com/embed/SHsUIZiNdeY', info: 'Greater range of motion and also effects stabiliser muscles more than the barbell version. Can also be used in incline or decline position to target upper or lower chest.', target: 'Complete chest area' },
        { name: 'Press Ups', video: 'https://www.youtube.com/embed/IODxDxX7oi4', info: 'An excellent bodyweight chest exercise. Ideal as a warmup or final pumping exercise. Can be varied with incline and decline or weighted versions', target: 'Complete chest' },
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
