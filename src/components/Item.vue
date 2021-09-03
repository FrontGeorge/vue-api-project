<template>  
    <li class="card--item">
        <router-link class="card--item--link" :to="{ name: 'detail', params: { id: person.id, body: person.body, title: person.title }}">
            <strong class="card--item--title">título</strong>
            <strong class="card--item--title__text">{{ person.title }}</strong>
            <span class="card--item--body">{{ person.body }}</span>
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

            &--link {
                border: 1px solid #EEE;
                box-sizing: border-box;
                display: block;
                height: 100%;
                padding: 30px;
                text-decoration: none;

                @media (hover: hover) {
                    &:hover {
                        border: 1px solid #CCC;
                    }
                }
            }
    
            &--title {
                color: #AAA;
                display: block;
                font-size: 12px;
                font-style: italic;

                &__text {
                    color: #666;
                    display: block;
                }
            }

            &--body {
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                display: block;
                display: -webkit-box;
                height: calc(20px * 2);
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>