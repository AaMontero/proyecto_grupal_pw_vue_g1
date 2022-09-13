<template>
  <h2>Reservas</h2>
  <h3 v-on:click="cambiarMostrarBusqueda">Buscar vehiculos disponibles</h3>
  <br />
  <div v-if="muestraBusqueda">
    <div id="buscarAutos">
      <form name="f1">
        <div class="input-group input-group-sm mb-3">
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
        </div>
        <div class="input-group input-group-sm mb-3">
          <label for="modelo"> Modelo del Vehiculo: </label>
          <select
            class="form-select form-select-sm"
            v-model="modeloSeleccionado"
          >
            <option value="0">Seleccione el Modelo</option>
            <option v-for="(modelo, index) in listaModelos" :key="index">
              {{ modelo }}
            </option>
          </select>
        </div>
      </form>
      <button
        class="btn btn-secondary btn-sm"
        v-on:click="obtenerResultadosBusqueda"
      >
        BUSCAR
      </button>
    </div>
    <br />
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
      <h5 v-if="noseEncontroVehi">
        No se encontraron vehiculos con las especificaciones
      </h5>
    </div>
    <br />
  </div>
  <h3 v-on:click="mostrarReservaAuto">Reservar un vehiculo</h3>
  <br />
  <div id="reservarAutoDiv" v-if="muestraReservaAuto">
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
        <label class="input-group-text" for="nTarjeta">
          Numero de Tarjeta:
        </label>
        <input
          class="form-control"
          id="nTarjeta"
          type="text"
          v-model="agregarNumTarjeta"
        />
        <input
          type="button"
          value="Registrar Tarjeta"
          v-on:click="agregarTarjeta"
          class="btn btn-secondary btn-sm"
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
    <h5 v-if="generoReserva">
      Se realizo correctamente la reserva! Su numero de reserva es:
      {{ numReserva }}
    </h5>
  </div>
  <br />
  <h3 v-on:click="mostrarBusquedaReserva">Buscar Reserva</h3>
  <br />
  <div v-if="muestraBusquedaReserva">
    <div id="buscarDiv">
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
    <br />
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
      <h5 v-if="seCambioVehiculo">
        Se cambió el estado del vehículo y la reserva ha sido ejecutada
      </h5>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { cambia_modelos, obtenerVehMarMod } from "../helpers/vehiculosjs";
import { reservar } from "../helpers/reservas.js";
import { cambiar } from "../helpers/reservas.js";
import { cambiarTarjeta } from "../helpers/clientes.js";
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
      agregarNumTarjeta: "",
      reservaEncontrada: {
        placa: "",
        modelo: "",
        estado: "",
        fecha: "",
        reservadoPor: "",
      },
      noseEncontroVehi: false,
      numReserva: "",
      generoReserva: false,
      seCambioVehiculo: false,
      muestraBusqueda: false,
      muestraReservaAuto: false,
      muestraBusquedaReserva: false,
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
      if (this.listaBusqueda.length === 0) {
        this.noseEncontroVehi = true;
      } else {
        this.noseEncontroVehi = false;
      }
      console.log(this.listaBusqueda);
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
      if (response != null) {
        this.numReserva = response;
        this.generoReserva = true;
      }
      this.buscarCedula = "";
      this.buscarPlaca = "";
      this.buscarFechaInicio = null;
      this.buscarFechaFin = null;
      this.agregarNumTarjeta = "";
    },
    async cambiarReserva() {
      console.log("Entra al metodo en VUE");
      var response = await cambiar(this.reservaBuscarIngresar);
      if (response != null) {
        this.seCambioVehiculo = true;
      }
      console.log(response);
      this.reservaEncontrada = response;
    },
    async agregarTarjeta() {
      const response = await cambiarTarjeta(
        this.buscarCedula,
        this.agregarNumTarjeta
      );
      return "Hola";
    },
    cambiarMostrarBusqueda() {
      if (this.muestraBusqueda) {
        this.muestraBusqueda = false;
      } else {
        this.muestraBusqueda = true;
      }
    },
    mostrarReservaAuto() {
      if (this.muestraReservaAuto) {
        this.muestraReservaAuto = false;
      } else {
        this.muestraReservaAuto = true;
      }
    },
    mostrarBusquedaReserva() {
      if (this.muestraBusquedaReserva) {
        this.muestraBusquedaReserva = false;
      } else {
        this.muestraBusquedaReserva = true;
      }
    },
  },
};
</script>

<style>
</style>