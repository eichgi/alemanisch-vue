import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './components/layouts/home.vue'
import Login from './components/auth/login.vue'
import Signup from './components/auth/signup.vue'
import Logout from './components/auth/logout.vue'
import Admin from './components/perfil/admin.vue'
import Ejercicios from './components/layouts/ejercicios.vue'
import Personales from './components/pronombres/personales.vue'
import PronombreTipo from './components/pronombres/pronombres-tipo.vue'
import Verbos from './components/verbos/verbos.vue'
import Categoria from './components/verbos/categoria.vue'
import Contacto from './components/layouts/contacto.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
        beforeEnter(to, from, next){
            if (store.getters.estaAutenticado) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/registro',
        component: Signup,
        beforeEnter(to, from, next){
            if (store.getters.estaAutenticado) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/logout',
        component: Logout,
        beforeEnter(to, from, next){
            if (store.getters.estaAutenticado) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/ejercicios',
        component: Ejercicios,
    },
    {
        path: '/perfil',
        component: Admin,
        beforeEnter(to, from, next){
            if (store.getters.estaAutenticado) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/pronombres',
        component: Personales,
        children: [
            {
                path: ':tipo',
                component: PronombreTipo
            }
        ]
    },
    {
        path: '/verbos',
        component: Verbos,
        children: [
            {
                path: ':categoria',
                component: Categoria,
            }
        ]
    },
    {
        path: '/contacto',
        component: Contacto,
    },
];

export default new VueRouter({mode: 'history', routes});