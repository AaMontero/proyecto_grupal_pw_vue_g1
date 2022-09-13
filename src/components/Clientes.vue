<template>
  <h2>Clientes</h2>
  <h3 v-on:click="mostrarBuscar">Buscar Vehiculos Marca/Modelo</h3>
  <br />
  <div id="buscarAutos" v-if="muestraBuscar">
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
      <h5 v-if="noEncontroVehi">No se encontraron Vehiculos</h5>
    </div>
  </div>
  <br />
  <h3 v-on:click="mostrarReserva">Reservar un vehiculo</h3>
  <br />
  <div id="reservarAutoDiv" v-if="muestraReservar">
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
  <h3 v-on:click="cambiarMostrar">Registro de clientes</h3>
  <br />
  <div v-if="mostrarRegCliente" id="registroDeClientesDiv" class="input-group">
    <form action="Register">
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Cedula"> Cedula: </label>
        <input
          class="form-control"
          id="Cedula"
          type="text"
          v-model="cedulaIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Nombre"> Nombre: </label>
        <input
          class="form-control"
          id="Nombre"
          type="text"
          v-model="nombreIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Apellido"> Apellido: </label>
        <input
          class="form-control"
          id="Apellido"
          type="text"
          v-model="apellidoIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="FechaNacimiento">
          Fecha de Nacimiento:
        </label>
        <input
          class="form-control"
          id="FechaNacimiento"
          type="date"
          v-model="fechaNacIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Genero"> Genero: </label>
        <select
          class="form-select form-select-sm"
          name="Genero"
          id="genero"
          v-model="generoIngresar"
        >
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </div>
    </form>
  </div>
  <button
    v-if="mostrarRegCliente"
    v-on:click="insertar"
    class="btn btn-secondary btn-sm"
  >
    Registrar
  </button>
  <h5 v-if="seRegistro">El cliente se registro correctamente</h5>
</template>

<script>
import { cambia_modelos, obtenerVehMarMod } from "../helpers/vehiculosjs";
import { insertarCliente, cambiarTarjeta } from "../helpers/clientes.js";
import { reservar } from "../helpers/reservas.js";

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
      agregarNumTarjeta: "",
      buscarFechaInicio: null,
      buscarFechaFin: null,
      estaDisponible: false,
      noEncontroVehi: false,
      numReserva: "",
      generoReserva: false,
      seRegistro: false,
      mostrarRegCliente: false,
      muestraReservar: false,
      muestraBuscar: false,
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
        this.noEncontroVehi = true;
      } else {
        this.noEncontroVehi = false;
      }
      this.mostrarBusqueda = true;
      this.marcaSeleccionada = 0;
      this.modeloSeleccionado = 0;
    },
    async insertar() {
      const cliente = {
        cedula: this.cedulaIngresar,
        nombre: this.nombreIngresar,
        apellido: this.apellidoIngresar,
        fechaNacimiento: this.fechaNacIngresar,
        genero: this.generoIngresar,
      };
      const response = await insertarCliente(cliente);
      if (response != null) {
        this.seRegistro = true;
      }
      this.cedulaIngresar = "";
      this.nombreIngresar = "";
      this.apellidoIngresar = "";
      this.fechaNacIngresar = null;
      this.generoIngresar = null;
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
      console.log(response);
      if (response != null) {
        this.numReserva = response;
        this.generoReserva = true;
      } else {
      }

      this.buscarCedula = "";
      this.buscarPlaca = "";
      this.buscarFechaInicio = null;
      this.buscarFechaFin = null;
      this.agregarNumTarjeta = "";
    },
    async agregarTarjeta() {
      const response = await cambiarTarjeta(
        this.buscarCedula,
        this.agregarNumTarjeta
      );
      return "Hola";
    },
    cambiarMostrar() {
      if (this.mostrarRegCliente) {
        this.mostrarRegCliente = false;
      } else {
        this.mostrarRegCliente = true;
      }
    },
    mostrarReserva() {
      if (this.muestraReservar) {
        this.muestraReservar = false;
      } else {
        this.muestraReservar = true;
      }
    },
    mostrarBuscar() {
      if (this.muestraBuscar) {
        this.muestraBuscar = false;
      } else {
        this.muestraBuscar = true;
      }
    },
  },
};
</script>

<style>
option {
  margin-left: 30px;
}
h2 {
  font-weight: bold;
  text-transform: capitalize;
}
h3 {
  font-style: italic;
}
form {
  margin: auto;
  text-align: center;
}
#buscarAutos {
  height: fit-content;
  width: fit-content;
  text-align: center;
  margin: auto;
}

#tablaBusqueda {
  width: fit-content;
  height: fit-content;
  margin: auto;
}
#reservarAutoDiv {
  width: 400px;
  margin: auto;
  height: fit-content;
}
label {
  width: 150px;
}
h3 {
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  width: fit-content;
  margin: auto;
  padding: 5px;
}
</style>