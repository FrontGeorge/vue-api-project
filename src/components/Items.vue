<template>
    <ul class="card--list">
        <template v-for="person in filterPeople" :key="person.id">
            <template v-if="person.id <= 3">
                <Item :person="person" />
            </template>
        </template>
    </ul>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

import Item from './Item';

export default {
    components: {
        Item,
    },
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
        }
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
</style>