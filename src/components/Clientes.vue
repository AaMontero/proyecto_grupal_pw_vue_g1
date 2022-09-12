<template>
  <div id="buscarAutos">
    <h2>Clientes</h2>
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

  <div id="tablaBusqueda" v-if="mostrarBusqueda">
    <h4>Los resultados de su busqueda son:</h4>
    <table class="table">
      <thead>
        <tr>
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
    </table>
  </div>
  <div id="reservarAutoDiv">
    <form action="RegistrarVehiculo">
      <h3>Reservar un vehiculo</h3>
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
    <button v-on:click="reservarVehiculo" class="btn btn-secondary btn-sm">Buscar Disponible</button>
  </div>

  <div id="registroDeClientesDiv" class="input-group">
    <form action="Register">
      <h3>Registro de clientes</h3>
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
  <button v-on:click="insertar" class="btn btn-secondary btn-sm">
    Insertar
  </button>
</template>

<script>
import { cambia_modelos, obtenerVehMarMod, buscarDisponible} from "../helpers/vehiculosjs";
import { insertarCliente } from "../helpers/clientes.js";
import {reservar} from "../helpers/reservas.js"

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
      estaDisponible : false, 
    };
  },
  methods: {
    llenarModelos() {
      this.listaModelos = cambia_modelos(this.marcaSeleccionada)
    },
    async obtenerResultadosBusqueda() {
      var marca = this.listaMarcas[this.marcaSeleccionada - 1]
      const response = await obtenerVehMarMod(marca, this.modeloSeleccionado)
      this.listaBusqueda = response
      this.mostrarBusqueda = true
      this.marcaSeleccionada=0
      this.modeloSeleccionado=0 
    },
    async insertar() {
      const cliente = {
        cedula: this.cedulaIngresar,
        nombre: this.nombreIngresar,
        apellido: this.apellidoIngresar,
        fechaNacimiento: this.fechaNacIngresar,
        genero: this.generoIngresar,
      }
      const response = await insertarCliente(cliente);
      this.cedulaIngresar=""
      this.nombreIngresar=""
      this.apellidoIngresar=""
      this.fechaNacIngresar=null
      this.generoIngresar=null
    },
    async reservarVehiculo(){
        const reserva = {
          fechaI: this.buscarFechaInicio,
          fechaF: this.buscarFechaFin,
          cedula: this.buscarCedula,
          placa: this.buscarPlaca,
        }
        console.log(reserva.fechaI)
        console.log(reserva.fechaF)
      const response = await reservar(reserva);
      this.buscarCedula = "",
      this.buscarPlaca ="", 
      this.buscarFechaInicio=null,
      this.buscarFechaFin= null
    },
  },
};
</script>

<style>
option {
  margin-left: 30px;
}
form {
  margin: auto;
  text-align: center;
}
#buscarAutos {
  height: 250px;
  width: 600px;
  text-align: center;
  margin: auto;
}

#tablaBusqueda {
  width: 800px;
  margin: auto;
}
#reservarAutoDiv {
  width: 600px;
  margin: auto;
}
label {
  width: 150px;
}
</style>