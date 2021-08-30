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
  setup(){
    const store = useStore();
    return {
      ...store.state,
    }
  },
  components: {
    Items,
  }
}
</script>
