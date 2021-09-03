<template>
  <div class="home">
    <h1>{{ titleApp }}</h1>
    <Items />
  </div>
</template>
<script>
import Items from '../components/Items';
export default {
  name: 'Home',
  components: {
    Items,
  }
}
</script>
