<template>
  <h2>REPORTES</h2>
  <div id="buscarDiv">
    <h3>Reportes de Reservas</h3>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="ReservaInicio"
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
  </div>
  <button v-on:click="insertar" class="btn btn-secondary btn-sm">Buscar</button>
  <div id="reportesDiv">
    <table class="table">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Año de fabricación</th>
          <th>Cilindraje</th>
          <th>Avalúo</th>
          <th>Valor por día</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservasInicioLlenar: null,
      reservasFinLlenar: null,
    };
  },
  methods: {},
};
</script>

<style>
</style>