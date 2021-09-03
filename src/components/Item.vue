<template>  
    <li class="card--item">
        <router-link class="card--item--link" :to="{ name: 'detail', params: { id: person.id, body: person.body, title: person.title }}">
            <strong>{{ person.id }}</strong>
            <strong>{{ person.title }}</strong>
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        person: Object,
    }
}
</script>

<style scoped lang="scss">
    .card {
        &--item{          
            box-sizing: border-box;
            margin: 10px;
            text-align: left;
            width: calc(33% - 20px);

            &--author {
                display: block;
                font-size: 12px;
                font-style: italic;
            }

            &--img {
                height: 100px;
                object-fit: cover;
                width: 100%;
            }

            &--link {
                border: 1px solid #EEE;
                padding: 30px;
                display: block;

                @media (hover: hover) {
                    &:hover {
                        border: 1px solid #CCC;
                    }
                }
            }
        }
    }
</style>