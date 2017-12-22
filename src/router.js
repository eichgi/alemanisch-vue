import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/home.vue'
import Pronombres from './components/pronombres/pronombres.vue'
import Personales from './components/pronombres/personales.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {
        path: '/pronombres',
        component: Pronombres,
        children: [
            {path: 'personales', component: Personales}
        ]
    }
];

export default new VueRouter({mode: 'history', routes});