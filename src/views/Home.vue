<template>
  <div class="home">
    <h1>{{ titleApp }}</h1>
    <Items />
  </div>
</template>
<script>
import { useStore } from 'vuex';
import Items from '../components/Items';
export default {
  name: 'Home',
  setup() {
      const store = useStore();
      console.log(store.state.miPeople);
      return {
          ...store.state,
      }
  },
  components: {
    Items,
    
  },
}
</script>
