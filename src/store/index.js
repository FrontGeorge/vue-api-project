import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: 'Articles',
    news: [],
  },
  mutations: {
    setNews(state, payload) {
      state.news = payload;
    }
  },
  actions: {
    async getNews( {commit} ) {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const result = await response.json();
        const news = result.results;    
        commit("setNews", result.results);

      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
