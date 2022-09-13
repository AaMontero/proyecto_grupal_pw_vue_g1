<template>
<h2>Reservas</h2>
  <div id="buscarAutos">
    <h3>Buscar vehiculos disponibles</h3>
    <form name="f1">
      <label for="marca"> Marca del Vehiculo: </label>
      <select
        class="form-select form-select-sm"
        v-model="marcaSeleccionada"
        v-on:change="llenarModelos"
      >
        <option value="0">Selecione la marca</option>
        <option value="1">Chevrolet</option>
        <option value="2">KIA</option>
        <option value="3">Hyundai</option>
        <option value="4">Toyota</option>
        <option value="5">Renault</option>
        <option value="6">Nissan</option>
        <option value="7">Volkswagen</option>
      </select>
      <label for="modelo"> Modelo del Vehiculo: </label>
      <select class="form-select form-select-sm" v-model="modeloSeleccionado">
        <option value="0">Seleccione el Modelo</option>
        <option v-for="(modelo, index) in listaModelos" :key="index">
          {{ modelo }}
        </option>
      </select>
    </form>
    <button
      class="btn btn-secondary btn-sm"
      v-on:click="obtenerResultadosBusqueda"
    >
      BUSCAR
    </button>
  </div>
  <br>
  <div id="tablaBusqueda" v-if="mostrarBusqueda">
    
    <b-table
      class="
        table table-striped table-bordered table-fixed table-secondary
        align-middle
      "
    >
      <thead>
        <tr class="table-primary">
          <th>Placa</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Año</th>
          <th>Estado</th>
          <th>Valor x Hora</th>
        </tr>
      </thead>
      <tr v-for="auto in listaBusqueda" :key="auto.placa">
        <td>{{ auto.placa }}</td>
        <td>{{ auto.modelo }}</td>
        <td>{{ auto.marca }}</td>
        <td>{{ auto.anio }}</td>
        <td>{{ auto.estado }}</td>
        <td>{{ auto.valorPorDia }}</td>
      </tr>
    </b-table>
  </div>
  <br>
  <div id="reservarAutoDiv">
    <h3>Reservar un vehiculo</h3>
    <form action="RegistrarVehiculo">
      
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Placa"> Placa: </label>
        <input
          class="form-control"
          id="Placa"
          type="text"
          v-model="buscarPlaca"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Cedula"> Cédula: </label>
        <input
          class="form-control"
          id="Cedula"
          type="text"
          v-model="buscarCedula"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="fInicio"> Fecha Inicio: </label>
        <input
          class="form-control"
          id="fInicio"
          type="date"
          v-model="buscarFechaInicio"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="fFin"> Fecha Fin: </label>
        <input
          class="form-control"
          id="fFin"
          type="date"
          v-model="buscarFechaFin"
        />
      </div>
    </form>
    <button v-on:click="reservarVehiculo" class="btn btn-secondary btn-sm">
      Buscar Disponible
    </button>
  </div>
  <br>
  <div id="buscarDiv">
    <h3>Buscar Reserva</h3>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="ReservaBuscar">Reserva: </label>
      <input
        class="form-control"
        id="ReservaBuscar"
        type="text"
        v-model="reservaBuscarIngresar"
      />
    </div>
    <button v-on:click="cambiarReserva" class="btn btn-secondary btn-sm">
      Cambiar Reserva
    </button>
  </div>
  <br>
  <div id="resultadoReservaDiv">
    <b-table
      class="
        table table-striped table-bordered table-fixed table-secondary
        align-middle
      "
    >
      <thead>
        <tr class="table-primary">
          <th>Placa</th>
          <th>Modelo</th>
          <th>Estado</th>
          <th>Fecha</th>
          <th>Reservado por</th>
        </tr>
      </thead>
      <tr>
        <td>{{ reservaEncontrada.placa }}</td>
        <td>{{ reservaEncontrada.modelo }}</td>
        <td>{{ reservaEncontrada.estado }}</td>
        <td>{{ reservaEncontrada.fecha }}</td>
        <td>{{ reservaEncontrada.reservadoPor }}</td>
      </tr>
    </b-table>
  </div>
</template>

<script>
import { cambia_modelos, obtenerVehMarMod } from "../helpers/vehiculosjs";
import { reservar } from "../helpers/reservas.js";
import { cambiar } from "../helpers/reservas.js";
export default {
  data() {
    return {
      marcaSeleccionada: 0,
      modeloSeleccionado: 0,
      listaModelos: [],
      mostrarBusqueda: false,
      listaMarcas: [
        "Chevrolet",
        "KIA",
        "Hyundai",
        "Toyota",
        "Renault",
        "Nissan",
        "Volkswagen",
      ],
      listaBusqueda: [],
      cedulaIngresar: "",
      nombreIngresar: "",
      apellidoIngresar: "",
      fechaNacIngresar: "",
      generoIngresar: "",
      buscarPlaca: "",
      buscarCedula: "",
      buscarFechaInicio: null,
      buscarFechaFin: null,
      estaDisponible: false,
      reservaBuscarIngresar: "",
      reservaEncontrada: {
        placa: "",
        modelo: "",
        estado: "",
        fecha: "",
        reservadoPor: "",
      },
    };
  },
  methods: {
    llenarModelos() {
      this.listaModelos = cambia_modelos(this.marcaSeleccionada);
    },
    async obtenerResultadosBusqueda() {
      var marca = this.listaMarcas[this.marcaSeleccionada - 1];
      const response = await obtenerVehMarMod(marca, this.modeloSeleccionado);
      this.listaBusqueda = response;
      this.mostrarBusqueda = true;
      this.marcaSeleccionada = 0;
      this.modeloSeleccionado = 0;
    },
    async reservarVehiculo() {
      const reserva = {
        fechaI: this.buscarFechaInicio,
        fechaF: this.buscarFechaFin,
        cedula: this.buscarCedula,
        placa: this.buscarPlaca,
      };
      console.log(reserva.fechaI);
      console.log(reserva.fechaF);
      const response = await reservar(reserva);
      (this.buscarCedula = ""),
        (this.buscarPlaca = ""),
        (this.buscarFechaInicio = null),
        (this.buscarFechaFin = null);
    },
    async cambiarReserva() {
      console.log("Entra al metodo en VUE");
      var response = await cambiar(this.reservaBuscarIngresar);
      console.log(response);
      this.reservaEncontrada = response;
    },
  },
};
</script>

<style>
</style>