import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [
    
        {path:'/Clientes', component: () => import ('../components/Clientes.vue')}, 
        {path:'/Empleados', component: () => import ('../components/Empleados.vue')},
        {path:'/Reportes', component: () => import ('../components/Reportes.vue')}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;
