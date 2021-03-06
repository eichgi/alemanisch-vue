import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './components/layouts/home.vue'
import Login from './components/auth/login.vue'
import Signup from './components/auth/signup.vue'
import Logout from './components/auth/logout.vue'
import Perfil from './components/perfil/admin.vue'
import Ejercicios from './components/layouts/ejercicios.vue'
import Personales from './components/pronombres/personales.vue'
import PronombreTipo from './components/pronombres/pronombres-tipo.vue'
import Verbos from './components/verbos/verbos.vue'
import CategoriaVerbos from './components/verbos/categoria.vue'
import Sustantivos from './components/sustantivos/sustantivos.vue'
import CategoriaSustantivos from './components/sustantivos/categoria.vue'
import Conjugador from './components/conjugador/conjugador.vue'
import CategoriaConjugador from './components/conjugador/categoria.vue'
import Contacto from './components/layouts/contacto.vue'
import Biblioteca from './components/biblioteca/index.vue'
import Admin from './components/admin/index.vue'
import Post from './components/admin/post.vue'
import PostView from './components/admin/post-view.vue'
import Editor from './components/admin/editor.vue'
import AdminIntro from './components/admin/intro.vue'
import BibliotecaIntro from './components/biblioteca/intro.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
        beforeEnter(to, from, next) {
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
        beforeEnter(to, from, next) {
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
        beforeEnter(to, from, next) {
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
        component: Perfil,
        beforeEnter(to, from, next) {
            if (store.getters.estaAutenticado) {
                next();
            } else {
                next('/');
            }
        },
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
                component: CategoriaVerbos,
            }
        ]
    },
    {
        path: '/sustantivos',
        component: Sustantivos,
        children: [
            {
                path: ':categoria',
                component: CategoriaSustantivos,
            }
        ]
    },
    {
        path: '/conjugador',
        component: Conjugador,
        children: [
            {
                path: ':categoria',
                component: CategoriaConjugador,
            }
        ]
    },
    {
        path: '/contacto',
        component: Contacto,
    },
    {
        path: '/biblioteca',
        component: Biblioteca,
        children: [
            {
                path: '',
                component: BibliotecaIntro,
            },
            {
                path: 'post',
                component: Post,
                children: [
                    {
                        path: ':id',
                        component: PostView,
                    },
                ],
            },
        ],
    },
    {
        path: '/admin',
        component: Admin,
        beforeEnter(to, from, next) {
            if (store.getters.estaAutenticado && store.getters.esAdministrador) {
                next();
            } else {
                next('/');
            }
        },
        children: [
            {
                path: '',
                component: AdminIntro,
            },
            {
                path: 'editor',
                component: Editor,
                children: [
                    {
                        path: ':id',
                        component: Editor
                    }
                ],
            },
            {
                path: 'post',
                component: Post,
                children: [
                    {
                        path: ':id',
                        component: PostView,
                    },
                ],
            },
        ],
    },
];

export default new VueRouter({mode: 'history', routes});