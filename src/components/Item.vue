<template>  
    <li class="card--item">
        <a :href="'detail/' + person.login.uuid">
            <template v-if="person.picture.medium !== undefined">
                <img class="card--item--img" :src="person.picture.medium" :alt="person.name.first" />
            </template>
            <strong>{{ person.name.title }} {{ person.name.first }} {{ person.name.last }}</strong>
            <span class="card--item--author">{{ person.email }}</span>
            <span class="card--item--author">{{ person.email }}</span>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        person: Object,
    }
}
</script>

<style scoped>
    .card--item{
        border: 1px solid #EEE;
        margin: 10px;
        box-sizing: border-box;
        padding: 30px;
        text-align: left;
        width: calc(33% - 20px);
    }
    .card--item--img {
        height: 100px;
        object-fit: cover;
        width: 100%;
    }

    .card--item--author {
        font-size: 12px;
        display: block;
        font-style: italic;
    }
</style>