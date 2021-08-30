<template>
    <ul class="card--list">
        <template v-for="person in news" :key="person.name">
            <li class="card--item">
                <template v-if="person.picture.medium !== undefined">
                    <img class="card--item--img" :src="person.picture.medium" alt="" />
                </template>
                <strong>{{ person.name.title }} {{ person.name.first }} {{ person.name.last }}</strong>
                <span class="card--item--author">{{ person.email }}</span>
                <span class="card--item--author">{{ person.email }}</span>
            </li>
        </template>
    </ul>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
export default {
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

<style>
    .card--list {
        display: flex;
        flex-wrap: wrap;
    }
    .card--item{
        border: 1px solid #EEE;
        margin: 10px;
        box-sizing: border-box;
        padding: 30px;
        text-align: left;
        width: calc(50% - 20px);
    }
    .card--item--img {
        height: 200px;
        object-fit: cover;
        width: 100%;
    }

    .card--item--author {
        font-size: 12px;
        display: block;
        font-style: italic;
    }
</style>