<template>
  <section id="workouts" @exerciseAdded="displayNotification">
    <aside>
      <v-btn @click="createWorkout = !createWorkout">Create a Workout</v-btn>
      <v-container v-if="createWorkout === true" class="newWorkout">
        <v-snackbar v-model="showNotification" :timeout="3000">
          <v-btn flat color="red">Exercise Added</v-btn>
          <v-btn flat>Close</v-btn>
        </v-snackbar>
        <section class="form-container">
          <v-text-field
            v-model="name"
            label="Workout Name"
            required
          ></v-text-field>
          <!--v-btn id="addExercise-btn">Add Exercise</v-btn>  -->
          <AddExercise />
          <v-alert
            :value= warningAlert
            type="error"
          >
            No exercises chosen - can not save workout without at least one exercise!
          </v-alert>
          <v-btn id="addWorkout-btn" @click="saveWorkout">Save Workout</v-btn>
        </section>
      </v-container>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="workout in workouts" :key="workout.id">
          <div slot="header"><v-btn flat>{{ workout.name }}</v-btn></div>
          <v-card v-for="item in workout" :key="item.name">
            <v-card-text>

            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </aside>
    <WorkoutList/>
  </section>
</template>

<script>
import '../firebase_config'
import firebase from 'firebase/app'
import {db} from '../firebase_config.js'
import AddExercise from '@/components/AddExercise'
import WorkoutList from '@/components/Workout-list'
import { setTimeout } from 'timers';

export default {
  name: 'workouts',
  data() {
    return {
      workouts: [],
      name: '',
      exercises: [],
      createWorkout: true,
      showNotification: false,
      warningAlert: false
    }
  },
  fetch(context) {
    // get firestore workouts
    //context.store.commit('setWorkouts') = db.collection('workouts')
    // db.collection('workoutbuddy').doc('workouts').set({

    // }).then({})
    // .catch({})
    //   context.store.commit('setWorkouts', res.data)
    // })
    console.log('workouts data: '+ context.store.state.workouts)
  },
  methods: {
    saveWorkout() {
      if(this.$store.state.exercises.length < 1 || this.name === '') {
        this.warningAlert = true;
        setTimeout(() => {
          this.warningAlert = false
        }, 3000)
        return
      }

      // write workout to firestore
      db.collection().set({
        totalweigth: '0',
        workout: this.name,
        exercises: this.$store.state.exercises
      }) //  .collection('workoutbuddy').doc('workouts').set({

      // }).then({})
      // .catch({})
      //this.$store.commit('setWorkout', { name: this.name, exercises: this.$store.state.exercises, totalWeight: this.totalWeight })

      // reset workout data
      this.name = ''
      this.$store.commit('clearExercises')
    },
    displayNotification() {
      console.log('emit received')
      this.showNotification = true
    }

  },
  components: {
    AddExercise, WorkoutList
  }
}
</script>

<style lang="scss" scoped>
/****MOBILE DEFAULT VIEW****/
#workout {
    display: flex;
    justify-content:flex-start;
    align-items:flex-start;
  }

.form-container {
  padding: 0;
}

.newWorkout {
  padding-top:-30px;
}

.v-alert {
  opacity: 0.7;
  border-radius:5px;
  margin:10px 0;
}
#addExercise-btn, #addWorkout-btn  {
  margin:0;
  margin-bottom:15px;
  padding:10px;
}



/****MEDIUM VIEW***/
@media screen and (min-width:768px) and (max-width:1199px) {
  #workout {
    width:80%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 30px;
    justify-content:flex-start;
  }

  aside {
    grid-column: 1 / 2;
  }

  main {
    grid-template-columns: 2 / -1;
  }
}

/****LARGE VIEW***/
@media screen and (min-width:1200px) {
  #workout {
    width:80%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 30px;
    justify-content:flex-start;
  }

  aside {
    grid-column: 1 / 2;
  }

  main {
    grid-template-columns: 2 / -1;
  }
}

</style>
