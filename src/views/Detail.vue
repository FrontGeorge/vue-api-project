<template>
   <div>
      <h1>{{ titleApp }}</h1>
      <form>
         <fieldset>
            <legend>Usuario con id:</legend>
            <label for="title">
               <span>titulo:</span>
               <textarea id="title" v-model="routeTitle" />
            </label>
            <label for="body">
               <span>Cuerpo:</span>
               <textarea id="body" v-model="routeBody" />
            </label>
         </fieldset>
      </form>
   </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from 'vuex'

export default {
   name: 'Detalle usuario',
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