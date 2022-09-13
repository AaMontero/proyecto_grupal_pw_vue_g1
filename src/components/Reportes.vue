<template>
  <h2>REPORTES</h2>
  <div id="buscarDiv">
    <h4>Reportes de Reservas</h4>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text " for="ReservaInicio"
        >Fecha de Inicio:
      </label>
      <input
        class="form-control"
        id="ReservaInicio"
        type="date"
        v-model="reservasInicioLlenar"
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="ReservaFin">Fecha de Fin: </label>
      <input
        class="form-control"
        id="ReservaFin"
        type="date"
        v-model="reservasFinLlenar"
      />
    </div>
    <button v-on:click="buscarReportesFecha" class="btn btn-secondary btn-sm">
      Buscar Reportes
    </button>
  </div>

  <br />
  <div id="TablaLarga">
    <b-table
      class="
        table table-striped table-bordered table-fixed table-secondary
        align-middle
      "
    >
      <thead>
        <tr class="table-primary">
          <th>Número</th>
          <th>Cedula Cliente</th>
          <th>Placa Vehículo</th>
          <th>Detalles</th>
        </tr>
        <tr v-for="reporte in listaReportesFechas" :key="reporte.numReserva">
          <td>{{ reporte.numReserva }}</td>
          <td>{{ reporte.cedulaCl }}</td>
          <td>{{ reporte.placaVehi }}</td>
          <td> <a v-bind:href="reporte.links[0].href">Detalles</a></td>
        </tr>
      </thead>
    </b-table>
    <h5 v-if="noseEncontroReportes">No se encontraron datos de reportes entre las fechas seleccionadas</h5>
  </div>
  <br />
  <div>
    <h4>Reporte de Clientes VIP</h4>
    <div id="TablaPequenia">
      <b-table
        class="
          table table-striped table-bordered table-fixed table-secondary
          align-middle
        "
      >
        <thead>
          <tr class="table-primary">
            <th>Cédula</th>
            <th>Valor IVa</th>
            <th>Valor Total</th>
          </tr>
          <tr v-for="cliente in listaTodosVip" :key="cliente.cedula">
            <td>{{ cliente.cedula }}</td>
            <td>${{ cliente.valorIva }}</td>
            <td>${{ cliente.valorTotal }}</td>
          </tr>
        </thead>
      </b-table>
    </div>
  </div>
</template>

<script>
import { buscarRep, buscarTodosC } from "../helpers/reportes.js";
export default {
  data() {
    return {
      reservasInicioLlenar: null,
      reservasFinLlenar: null,
      listaReportesFechas: [],
      listaTodosVip: [],
      linkReserva:"", 
      noseEncontroReportes:false,
    };
  },
  methods: {
    async buscarReportesFecha() {
      var response = await buscarRep(
        this.reservasInicioLlenar,
        this.reservasFinLlenar
      );
      if(response.length===0){
        this.noseEncontroReportes=true; 
      }
      console.log(response);
      
      this.listaReportesFechas = response;
    },
    async buscarTodos() {
      var response = await buscarTodosC();
      console.log(response);
      this.listaTodosVip = response;
    },
  },
  mounted() {
    this.buscarTodos();
  },
};
</script>

<style>
</style>