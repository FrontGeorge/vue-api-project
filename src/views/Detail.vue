<template>
   <div>
      <h1>{{ titleApp }}</h1>
      <DetailForm :id="routeId" :title="routeTitle" :body="routeBody"  />
   </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from 'vuex';

import DetailForm from '../components/DetailForm';

export default {
   name: 'Detalle usuario',
   components: {
        DetailForm,
    },
   setup() {
      const route = useRoute();
      const store = useStore();
      const routeId = route.params.id;
      const routeBody = route.params.body;
      const routeTitle = route.params.title;
      return {
         routeId,
         routeBody,
         routeTitle,
      } 
   }
}
</script>

<style>
  
</style>