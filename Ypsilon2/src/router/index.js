import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RicercaCorsi from '../components/RicercaCorsi.vue'
import AreaProfilo from '../components/AreaProfilo.vue'
import MyCorso from '../components/MyCorso.vue'


const routes =  [
    { path: '/home', name: 'home', component: HomePage },
    { path: '/courses', name: 'courses', component: RicercaCorsi },
    { path: '/profile', name: 'profile', component: AreaProfilo },
    { path: '/courses/name', name: 'course', component: MyCorso },
    


]

const router = createRouter({history: createWebHistory(), routes});
export default router;