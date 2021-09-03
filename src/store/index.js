import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: 'Articles',
    people: [],
    miPeople: [],
  },
  mutations: {
    setPeople(state, payload) {
      state.people = payload;
    },
    setClonedPeople(state) {
      state.miPeople = [...state.people].splice(0,3);
    }
  },
  actions: {
    // commit para ejecutat un mutation
    async getPeople( {commit} ) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const result = await response.json();
        const people = result;
        commit("setPeople", result);
        commit("setClonedPeople");
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    
  }
})
