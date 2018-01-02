import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './components/home/home.vue'
import Login from './components/auth/login.vue'
import Registro from './components/auth/registro.vue'
import Logout from './components/auth/logout.vue'
import Admin from './components/perfil/admin.vue'
import Personales from './components/pronombres/personales.vue'
import PronombreTipo from './components/pronombres/pronombres-tipo.vue'
import Verbos from './components/verbos/verbos.vue'
import Categoria from './components/verbos/categoria.vue'

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
        component: Registro,
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
    /*{
     path: '/pronombres',
     component: Pronombres,
     children: [
     {
     path: 'personales',
     component: Personales,
     children: [
     {
     path: ':tipo',
     component: PronombreTipo
     }
     ]
     }
     ]
     },*/
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
                component: Categoria
            }
        ]
    }
];

export default new VueRouter({mode: 'history', routes});