<template>
  <v-container fluid class="exercise">
    <section class="exercise-content">
      <section class="sideBar">
        <h2 class="mb-2">Legs</h2>
        <img class="muscle-anatomy" src="/img/leg-muscles.jpeg" alt="Leg Muscles">
        <div class="info">
          Upper leg anatomy and function<br>
          The upper leg is often called the thigh. It’s the area that runs from the hip to the knee in each leg.
          The hamstrings are three muscles located on the back of the thigh. They allow the knees to bend.<br>
          The three hamstrings are the: semimembranosus, semitendinosus, biceps femoris<br><br>
          The quadriceps are four muscles located on the front of the thigh. They allow the knees to straighten from a bent position.<br>
          The four quadriceps are the: vastus lateralis, vastus medialis, vastus intermedius and rectus femoris<br><br>
          The adductors are five muscles located on the inside of the thigh. They allow the thighs to come together.
          The five adductors are the: adductor magnus, adductor longus, adductor brevis and obturator externus gracilis<br><br>
          Knee anatomy and function<br>
          The knee joins the upper leg and the lower leg. It’s also the largest joint in the body. In addition to bearing the weight of the upper body, the knee allows for walking, running, and jumping. It also allows for rotation and pivoting.<br>
          Patella. Also called the kneecap, the patella serves as a point of attachment for different tendons and ligaments. It also helps protect them from damage.<br>
          Knee ligaments<br>
          Ligaments are bands of connective tissue that surround a joint. They help support joints and keep them from moving too much.<br>
          The knee contains four major ligaments:
          <ul>
            <li>Anterior cruciate ligament. This prevents the tibia in the lower leg from moving too far forward</li>
            <li>Posterior cruciate ligament. This prevents the knee from moving too far backward</li>
            <li>Medial collateral ligament. This provides stability for the inner knee</li>
            <li>Lateral collateral ligament. This helps stabilize the outer knee</li>
          </ul>
        </div>
      </section>
      <section class="exercises">
        <v-card v-for="item in legExercises" :key="item.name" sm12 md4 lg4>
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
  name: 'legs',
  data() {
    return {
      legExercises: [
        { name: 'Back Squats', video: 'https://www.youtube.com/embed/Dy28eq2PjcM', info: 'The King of leg exercises. One of the main mass & strength builders for legs. Also, with the deadlift, produces an anabolic effect on the whole body if done intensely', target: 'Hamstrings,thighs and buttocks'},
        { name: 'Front Squats', video: 'https://www.youtube.com/embed/VfBOBhwXbro', info: 'An alternative to the back squat. This version targets the thighs more and the posterial chain less. It usually requires less weight to be used', target: 'Thighs'},
        { name: 'Leg Extensions', video: 'https://www.youtube.com/embed/YyvSfVjQeL0', info: 'Isolation exercise for the thighs. Often used for definition or to pre-exhaust the thighs', target: 'Thighs'},
        { name: 'Lunges', video: 'https://www.youtube.com/embed/D7KaRcUTQeE', info: 'A lunge is a single-leg bodyweight exercise that works your hips, glutes, quads, hamstrings, core, and the hard-to-reach muscles of the inner thigh. Lunges can help you develop lower-body strength and endurance, and unlike squats, they are highly effective at evening out muscle imbalances.', target: 'Upper legs, core, and inner thigh'},
        { name: 'Leg Press', video: 'https://www.youtube.com/embed/IZxyjW7MPJQ', info: 'The leg press is a weight training exercise in which the individual pushes a weight or resistance away from them using their legs. The term leg press also refers to the apparatus used to perform this exercise. The leg press can be used to evaluate an athletes overall lower body strength', target: 'Full leg, buttocks & hip adductors'},
        { name: 'Stiff Leg Deadlifts', video: 'https://www.youtube.com/embed/1uDiW5--rAE', info: 'This deadlift version still targets the lower back but because the legs remain fixed only the hamstrings are stretched and stressed. Legs should be rigid but not fully straight', target: 'Hamstrings'},
        { name: 'Leg Curls', video: 'https://www.youtube.com/embed/ELOCsoDSmrg', info: 'Isolation exercise for the hamstrings. Often used for definition or to pre-exhaust the hamstrings', target: 'Hamstrings'},
        { name: 'Calf Raises', video: 'https://www.youtube.com/embed/ommnfVcLWxQ', info: 'These like all calf exercises have a limted range of motion. Therefore you should do 20 - 25 reps with a decent weight', target: 'Calfs'}
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
