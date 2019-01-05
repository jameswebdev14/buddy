<template>
  <div id="nutrition">
    <h1>Nutrition</h1><br>
    <h4>An active lifestyle requires a good well balanced diet consisting primarily of healthy, natural and unprocessed food</h4><br><br>
    <h2>Basic Nutritional Facts</h2><br>
    <h4>Food is split into macro and micro nutrients.</h4>
    <h4 style="margin-bottom:20px;">Macro nutrients - Carbohydrates, Fats and Protein - are the building blocks of a good diet</h4>
    <v-card class="macro-section">
      <v-card-title>Carbohydrates</v-card-title>
      <v-card-text>Carbohydates or carbs are the main fuel for your workouts.<br>
      Carbs are the easiest macro nutrient for your body to breakdown and use for energy. In fact it can often be too easy!
      Carbs that have a simple structure, simply called simple carbohydrates, are easily turned to fat if not used quickly after consumption. They also tend to be lacking in nutrients. An excessive comsumption of these type of foods can lead to fat gain, diabetes, water retention, lack of energy and mood swings.
      These foods are to be avoided where possible as they can really interfear with your training and progress and offer no or very little nutritional value.<br>
      These foods also lead to a sudden surge of insulin in the blood to breakdown these simple foods and over time can lead to diabetes.<br>
      These simple carbs include cakes and biscuits, sweets, carbonated drinks, white bread and rice and most breakfast cereals.<br>
      <div class="img-group">
        <img class="proImage" src="../assets/img/nutrition/carbs-good-bad.jpg" alt="No Image">
        <img class="proImage" src="../assets/img/nutrition/badcarbs1.jpg" alt="No Image">
        <img class="proImage" src="../assets/img/nutrition/carb1.jpg" alt="No Image">
        <img class="proImage" src="../assets/img/nutrition/Workout-Fat-Burning-foods.jpg" alt="No Image">
      </div><br>
      Cards that have a more complex structure take longer for the body to digest and breakdown and tend to contain far more nutrients.<br>
      As they breakdown slowly they do not cause a sudden rush of insulin and provide a longer more sustained form of energy.<br>
      These complex carbohydrates should account for a large part of your fitness diet. All carbs have about 4 calories per gram.
      </v-card-text>
    </v-card>
    <v-card class="macro-section">
      <v-card-title>Fats</v-card-title>
      <v-card-text>Fats have gotton a bad reputation in the past as being unhealthy heart clogging substances that will make you fat or cause heart attacks.<br>
      However this is incorrect. The only really unhealthy fats are man made fats like hydrogenated fats and trans fats which have been shown to be very unhealthy and should be avoided as much as possible.
      These fats are added to many processed foods which is another reason to try and eat unprocessed food where possible.<br>
      Healthy fats include polyunsaturated and monounsaturated. These do not cause any heart issues or clog arteries. They contain numerous oil based vitamins and minerals and omega 3 which has shown to be very beneficial to health<br>
      Naturally fatty fish like salmon, mackerel, herring, lake trout, sardines, and albacore tuna are good sources of omega-3 fatty acids are the best choices.
      All fats have 9 calories per gram so should be consumed with care if on a calorie restricted diet. The best sources of good quality fats are oily fish, nuts and seeds.
      <div class="img-group">
        <img class="proImage" src="../assets/img/nutrition/fats2.jpg" alt="No Image">
        <img class="proImage" src="../assets/img/nutrition/fats1.jpg" alt="No Image">
        <img class="proImage" src="../assets/img/nutrition/healthy-fats2.jpg" alt="No Image">
      </div>
      </v-card-text>
    </v-card>
    <v-card class="macro-section">
      <v-card-title>Protein</v-card-title>
      <v-card-text>Protein is the building blocks of muscle.<br>
        An adaquate supply of good quality protein is vital if your are training intensively or are building muscle via any resistance training.<br>
        Protein is broken down into amino acids which are then used for a multitude of purposes within the body. Protein is the least calorie dense food group because although it has roughly the same calories as carbohydrates
        more calories are used to digest protein, so about a third of calories from protein are used by the body for digestion of that protein.
        The body can sythesize some amino acids from other amino acids if required, however it is much better if all the amino acids are provided by eating complete protein sources.<br>
        The best sources are eggs and milk as these contain the best balance of amino acids and have the highest bioavailability which means more of the protein will be available to be used by the body once broken down and digested.<br>
        Other excellent sources include cheese, meat and fish. Nuts are also a good source of protein but, although high in quantity, the quality is not as good and should be combined with other complete protein sources for best results.<br>
        <div class="img-group">
          <img class="proImage" src="../assets/img/nutrition/eggs.jpg" alt="No Image">
          <img class="proImage" src="../assets/img/nutrition/cheese.jpg" alt="No Image">
          <img class="proImage" src="../assets/img/nutrition/steak.jpg" alt="No Image">
          <img class="proImage" src="../assets/img/nutrition/chicken.jpg" alt="No Image">
          <img class="proImage" src="../assets/img/nutrition/salmon.jpg" alt="No Image">
        </div>
      </v-card-text>
    </v-card>
    <br>
    <v-card class="micro-section">
      <v-card-title>Micro Nutrients</v-card-title>
      <v-card-text>Micro nutrients are the vitamins, minerals and other elements contained in food.<br>
      We won't go into too much detail on these because, although very important, if a healthy diet is maintained these should be plentiful in your diet and don't need further discussion.<br>
      All these nutrients will help your general health and energy and increase resistance to viruses that could prevent you from training.
      </v-card-text>
    </v-card>
    <section>
      <h1>Diet</h1><br>
      <h4>A bad diet will seriously effect your ability to train and the results you get from your training.</h4>
      <h4>Everybody is different so it is important to experiment to find your ideal diet, howver one that consists of 55% complex carbs, 30% protein and 15% good fats is a good starting point</h4>
      <h4>This should provide enough energy for training, plenty of protein for muscle growth and additional vitamins, minerals and Omega 3 from healthy fats.</h4>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#nutrition {
  color:white;
  letter-spacing:2px;
  padding:5px;
  font-family: 'Montserrat', sans-serif;

  .macro-section, .micro-section {
    background-color:grey;
    margin-bottom:15px;
    width:100%;
    display:flex;
    flex-flow:column;
  }

  .card__title {
    font-size: 1.3rem;
    text-shadow:2px 0 black;
    padding:10px;
    margin: 0;
  }

  .img-group {
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
  }

  .proImage {
    width:90%;
    max-width:480px;
    margin:20px auto;
  }
}

/*** MEDIUM VIEW ***/
@media screen and (min-width:768px) {
  #nutrition {
    .macro-section {
      flex-flow:column;
    }

    .img-group {
      flex-flow: row;
      justify-content:space-evenly;
      flex-wrap: wrap;
    }

    .proImage {
      width:30%;
      max-width:330px;
      height:250px;
    }

  }
}
</style>
