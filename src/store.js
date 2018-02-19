import Vue from 'vue';
import Vuex from 'vuex';
import Axios from './axios';
import router from './router';

Vue.use(Vuex);

//export const store = new Vuex.Store({
export default new Vuex.Store({
    state: {
        usuario: null,
        respuesta: {},
        ejercicio_id: null,
        guestsExercises: [],
    },
    mutations: {
        storeUser(state, usuario) {
            state.usuario = usuario;
            localStorage.setItem('usuario', JSON.stringify(usuario));
        },
        storeRespuesta(state, respuesta) {
            state.respuesta = respuesta;
        },
        logout(state) {
            state.usuario = null;
            state.respuesta = null;
            localStorage.removeItem('usuario');
        },
        storeEjercicioId(state, id) {
            state.ejercicio_id = id;
        },
        storeGuestsExercise(state, exercise) {
            state.guestsExercises.push(exercise);
        },
        clearGuestsExercises(state) {
            state.guestsExercises = [];
        },
    },
    getters: {
        estaAutenticado(state) {
            return state.usuario !== null;
        },
        usuario(state) {
            return state.usuario;
        },
        respuesta(state) {
            return state.respuesta;
        },
        ejercicio_id(state) {
            return state.ejercicio_id;
        },
        guestsExercises(state) {
            return state.guestsExercises;
        }
    },
    actions: {
        login({commit, dispatch}, authData) {
            Axios.post('/login', authData)
                .then(res => {
                    let respuesta = {
                        status: res.status,
                        mensaje: res.data.status,
                    };
                    commit('storeUser', res.data.user);
                    commit('storeRespuesta', respuesta);
                    dispatch('saveExercisesAfterLogin');
                }).catch(error => {
                let respuesta = {
                    status: error.response.status,
                    mensaje: error.response.data.status,
                };
                commit('storeRespuesta', respuesta);
            });
        },
        signUp({commit}, authData) {
            Axios.post('/registro', authData)
                .then(res => {
                    let respuesta = {
                        status: res.status,
                        mensaje: res.data.status,
                    };
                    commit('storeRespuesta', respuesta);
                });
        },
        logout({commit, dispatch}) {
            commit('logout');
            dispatch('redirectToHome');
        },
        redirectToHome() {
            router.push({path: '/'});
        },
        checkIfLogin({commit}) {
            let usuario = localStorage.getItem('usuario');
            if (usuario) {
                usuario = JSON.parse(usuario);
                commit('storeUser', usuario);
            }
        },
        saveExerciseToRecord({}, exercise = null) {
            console.log(exercise);
            let usuario = this.getters.usuario;
            const data = {
                api_token: usuario.api_token,
                user_id: usuario.id,
                ejercicio_id: exercise || this.getters.ejercicio_id,
                //ejercicio_id: exercise,
            };
            console.log(data);
            Axios.post('/saveToRecord', data)
                .then(res => {
                    console.log(res);
                });
        },
        setEjercicioId({commit}, ejercicio_id) {
            commit('storeEjercicioId', ejercicio_id)
        },
        saveGuestsExercises({commit}) {
            commit('storeGuestsExercise', this.getters.ejercicio_id);
        },
        saveExercisesAfterLogin({commit, dispatch}) {
            let exercises = this.getters.guestsExercises;
            console.log(exercises);
            for (const exercise of exercises) {
                console.log(exercise);
                dispatch('saveExerciseToRecord', exercise);
            }
            //commit('clearGuestsExercises');
            console.log('It\'s supposed I already have done with this...');
        },
        clearGuestsExercises({commit}) {
            commit('clearGuestsExercises');
        },
    }
});