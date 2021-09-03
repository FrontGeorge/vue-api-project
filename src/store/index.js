import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: 'Articles',
    people: [],
  },
  mutations: {
    setPeople(state, payload) {
      state.people = payload;
    }
  },
  actions: {
    // commit para ejecutat un mutation
    async getPeople( {commit} ) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const result = await response.json();
        const people = result;
        console.log(result);
        commit("setPeople", result);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    
  }
})
