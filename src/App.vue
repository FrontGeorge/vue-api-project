<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const people = computed(() => store.state.people);
        const filterPeople = computed(() => store.state.miPeople);
        onMounted(() => {
            store.dispatch("getPeople");
        })
        return {
            people,
            filterPeople,
            ...store.state,
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

    li {
    list-style: none;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
