<template>
    <div>
        <form>
            <fieldset class="form--fieldset">
                <legend class="form--legend">Usuario con id: {{id}}</legend>
                <label class="form--label" for="title">
                    <span class="form--label--text">titulo:</span>
                    <textarea required class="form--texarea" id="title" v-model="title" />
                </label>
                <label class="form--label" for="body">
                    <span class="form--label--text">Cuerpo:</span>
                    <textarea required class="form--texarea" id="body" v-model="body" />
                </label>
            </fieldset>
        </form>
        <button v-on:click="updateMiPeople">Update</button>
    </div>
</template>

<script>
import { useStore,computed } from 'vuex';
import router from '../router';

export default {
    data() {
        return {
            title: '',
            body: '',
        }
    },
    props: {
        id: Number,
        title: String,
        body: String,
    },
    setup(props)  {    
        const store = useStore();
        const updateMiPeople = () => {
            const propId = parseInt(props.id);
            const miPerson = store.state.miPeople.find(element => element.id === propId);
            miPerson.body = props.body;
            miPerson.title = props.title;
            router.push({ path: '/' })

        };
        return {
            updateMiPeople,
        }
    }
}
</script>

<style scoped lang="scss">
    .form {
        &--fieldset {
            border:none;
        }
        &--legend {
            font-size: 2em;
            font-weight: bolder;
        }
        &--label{  
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            text-align: left;

            &--text {
                display: block;
            }

        }
        &--texarea {
            border: 1px solid #CCC;
            height: 100px;
        }
    }
</style>