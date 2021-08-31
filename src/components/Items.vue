<template>
    <ul class="card--list">
        <template v-for="person in news" :key="person.login.uuid">
            <Item :person="person" />
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
        const news = computed(() => store.state.news)
        onMounted(() => {
            store.dispatch("getNews");
        })
        return {
            news,
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