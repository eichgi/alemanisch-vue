import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/home.vue'
import Pronombres from './components/pronombres/pronombres.vue'
import Personales from './components/pronombres/personales.vue'
import PronombreTipo from './components/pronombres/pronombres-tipo.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
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
    }
];

export default new VueRouter({mode: 'history', routes});