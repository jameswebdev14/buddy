import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loggedStatus: { status: "", email: "", id: "" },
      workouts: [],
      exercises: [],
      stats: [],
      workout: {},
      userStatus: false
    }),
    getters: () => ({
      getLoggedStatus(state) {
        return state.loggedStatus;
      },
      getWorkouts(state) {
        return state.workouts;
      },
      getStats(state) {
        return state.stats;
      },
      getEmail(state) {
        return state.loggedStatus.user.email;
      },
      getExercises(state) {
        return state.exercises;
      },
      getUserStatus(state) {
        return state.userStatus;
      }
    }),
    // removed retun from setWorkout and setExercise
    mutations: {
      setLoggedStatus(state, payload) {
        return (state.loggedStatus = payload);
      },
      setWorkouts(state, routine) {
        state.workouts.push(routine);
      },
      setStats(state, payload) {
        return (state.stats = payload);
      },
      setExercises(state, exercise) {
        return state.exercises.push(exercise);
      },
      clearExercises(state) {
        return (state.exercises = []);
      },
      setUserStatus(state, status) {
        state.userStatus = status;
      }
    }
  });
};

export default createStore;
