import Vue from 'vue';
import Vuex from 'vuex';
import Axios from './axios';
import router from './router';

Vue.use(Vuex);

//export const store = new Vuex.Store({
export default new Vuex.Store({
    state: {
        usuario: null,
        respuesta: null,
        ejercicio_id: null,
    },
    mutations: {
        storeUser(state, usuario){
            state.usuario = usuario;
            localStorage.setItem('usuario', JSON.stringify(usuario));
        },
        storeRespuesta(state, status){
            state.respuesta = status;
        },
        logout(state){
            state.usuario = null;
            state.respuesta = null;
            localStorage.removeItem('usuario');
        },
        storeEjercicioId(state, id){
            state.ejercicio_id = id;
        }
    },
    getters: {
        estaAutenticado(state){
            return state.usuario !== null;
        },
        usuario(state){
            return state.usuario;
        },
        respuesta(state){
            return state.respuesta;
        },
        ejercicio_id(state){
            return state.ejercicio_id;
        }
    },
    actions: {
        login({commit}, authData){
            Axios.post('/login', authData)
                .then(res => {
                    commit('storeUser', res.data.user);
                    commit('storeRespuesta', res.data.status);
                }).catch(error => {
                console.log(error.response);
                commit('storeRespuesta', error.response.data.status);
            });
        },
        signUp({commit}, authData){
            Axios.post('/registro', authData)
                .then(res => {
                    commit('storeRespuesta', res.data.status);
                });
        },
        logout({commit, dispatch}){
            commit('logout');
            dispatch('redirectToHome');
        },
        redirectToHome(){
            router.push({path: '/'});
        },
        checkIfLogin({commit}){
            let usuario = localStorage.getItem('usuario');
            if (usuario) {
                usuario = JSON.parse(usuario);
                commit('storeUser', usuario);
            }
        },
        saveExerciseToRecord({commit}){
            let usuario = this.getters.usuario;
            const data = {
                api_token: usuario.api_token,
                user_id: usuario.id,
                ejercicio_id: this.getters.ejercicio_id,
            };
            Axios.post('/saveToRecord', data)
                .then(res => {
                    console.log(res);
                });
        },
        setEjercicioId({commit}, ejercicio_id){
            commit('storeEjercicioId', ejercicio_id)
        }
    }
});