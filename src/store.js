import Vue from 'vue';
import Vuex from 'vuex';
import Axios from './axios';
import router from './router';

Vue.use(Vuex);

//export const store = new Vuex.Store({
export default new Vuex.Store({
    state: {
        usuario: null,
        respuesta: null
    },
    mutations: {
        storeUser(state, usuario){
            state.usuario = usuario;
        },
        storeRespuesta(state, status){
            state.respuesta = status;
        },
        logout(state){
            state.usuario = null;
            state.respuesta = null;
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
        }
    }
});