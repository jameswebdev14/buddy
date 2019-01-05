<template>
  <section id="newExercise-container">
    <div id="newExercise-inputs">
      <div id="newName">
        <v-text-field
          v-model="name"
          label="Exercise Name"
          required
        ></v-text-field>
      </div>
      <div id="newSets">
        <v-text-field
          v-model="sets"
          label="Number of Sets"
          required
          default = 4
        ></v-text-field>
      </div>
      <div id="newRest">
          <v-text-field
            v-model="rest"
            label="Set rest period"
            required
            default = 2
          ></v-text-field>
      </div>
    </div>
    <div id="newExercise-btn">
      <v-btn @click="saveExercise">Save Exercise</v-btn>
      <v-alert v-show="missingData"
        :value='missingData'
        type= 'error'>
        Invalid data. Must have a name and set values
      </v-alert>
    </div>
    <h4>Selected Exercises:</h4>
    <div v-for="(exercise, index) in $store.getters.getExercises" :key="index">
    <p>exercise count: {{ $store.getters.getExercises.length }}</p>
      <p>{{ index + 1 }} : {{ exercise.name }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddExercise',
  data() {
    return {
      name: '',
      sets: 4,
      rest: 2,
      exercises: [],
      missingData: false
    }
  },
  methods: {
    saveExercise() {
      if(this.name == '' || this.sets < 1 ) {
        this.missingData = true;
        setTimeout(() => {
          this.missingData = false
        }, 3000)
        return
      }
      let exercise = {
        name: this.name,
        sets : this.sets,
        rest: this.rest
      }
      this.$store.commit('setExercises', exercise)
      this.name = ''
    }
  }
}
</script>

<style lang="scss" scoped>
/*****MOBILE DEFAULT VIEW*****/
.v-content {
  padding:10px;
}

#newExercise-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 10px;
  padding:10px;
}

#newExercise-inputs {
    display:flex;
    flex-wrap:wrap;
    grid-row: 1 / 2;
  }

  #newName, #newSets, #newRest {
    width:100%;
  }

  #newExercise-btn {
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items:center;
    grid-row: 2 / 3;
    height:70px;
  }


/****MEDIUM VIEW****/

@media screen and (min-width:768px) and (max-width:1199px) {
  #newExercise-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr minmax(1fr, 60px);
    grid-row-gap: 20px;
    opacity: 0.7;
  }

  #newExercise-inputs {
    width:60%;
    margin:auto;
    grid-column: 1 / 3;
  }

  #newExercise-btn {
    grid-row: 1 / 2;
    margin:auto;
    height:70px;
  }
}


/****LARGE VIEW****/

@media screen and (min-width: 1200px) {
  #newExercise-container {
    width:60%;
    margin:auto;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 70px;
  }

  #newExercise-inputs {
    display:flex;

  }

  #newExercise-btn {
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items:center;
  }
}
</style>
