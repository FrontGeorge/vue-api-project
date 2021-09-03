<template>
    <ul class="card--list">
        <template v-for="person in store.state.miPeople" :key="person.id">
            <Item :person="person" />
        </template>
    </ul>
</template>

<script>
import { useStore } from 'vuex';
import Item from './Item';

export default {
    setup() {
        const store = useStore();
        console.log(store.state.miPeople);
        return {
            store,
        }
    },
    components: {
        Item,
    },
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
</style>