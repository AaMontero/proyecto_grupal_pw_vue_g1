<template>
  <router-view/>
</template>
  
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Clientes from './components/Clientes.vue'
import Empleados from './components/Empleados.vue'
import Reportes from './components/Reportes.vue'
import Navegacion from './components/Navegacion.vue'
import Reservas from './components/Reservas.vue'
export default {
  name: 'App',
  components: {
    Clientes, 
    Empleados, 
    Reportes, 
    Navegacion,
    Reservas,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
