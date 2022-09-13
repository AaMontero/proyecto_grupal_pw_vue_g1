<template>
  <h2>Empleados</h2>
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
  <button v-on:click="ingresarClienteE" class="btn btn-secondary btn-sm">
    Insertar Cliente
  </button>
  <br />
  <br />

  <div id="ConsultaDeClientes">
    <h3>Consultar los datos de un cliente</h3>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="Cedula"> Cedula Cliente: </label>
      <input
        class="form-control"
        id="Cedula"
        type="text"
        v-model="cedulaBuscarIngresar"
      />
      <button v-on:click="buscarCedula" class="btn btn-secondary btn-sm">
        Buscar Cliente
      </button>
    </div>
  </div>
  <div id="resultadoCliente">
    <b-table
      class="
        table table-striped table-bordered table-fixed table-secondary
        align-middle
      "
    >
      <thead>
        <tr class="table-primary">
          <th>Cedula</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nacimiento</th>
          <th>Registro</th>
        </tr>
      </thead>
      <tr>
        <td>{{ clienteEncontrado.cedula }}</td>
        <td>{{ clienteEncontrado.nombre }}</td>
        <td>{{ clienteEncontrado.apellido }}</td>
        <td>{{ clienteEncontrado.fechaN }}</td>
        <td>{{ clienteEncontrado.registro }}</td>
      </tr>
    </b-table>
  </div>
  <br />
  <div id="insertarAutoDiv">
    <form action="register">
      <h3>Registro de vehiculos</h3>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Placa"> Placa: </label>
        <input
          class="form-control"
          id="Placa"
          type="text"
          v-model="placaIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Marca"> Marca: </label>
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
        <label class="input-group-text" for="Modelo"> Modelo: </label>
        <select class="form-select form-select-sm" v-model="modeloIngresar">
          <option value="0">Seleccione el Modelo</option>
          <option v-for="(modelo, index) in listaModelos" :key="index">
            {{ modelo }}
          </option>
        </select>
      </div>

      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="anioFab">
          Año de Fabricación:
        </label>
        <input
          class="form-control"
          id="anioFab"
          type="text"
          v-model="anioFabIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="paisFab"
          >Pais de fabricación:
        </label>
        <input
          class="form-control"
          id="paisFab"
          type="text"
          v-model="paisFabIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="cilindraje">Cilindraje: </label>
        <input
          class="form-control"
          id="cilindraje"
          type="text"
          v-model="cilindrajeIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="avaluo">Avaluo: </label>
        <input
          class="form-control"
          id="avaluo"
          type="text"
          v-model="avaluoIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="valorPorDia"
          >Valor por día:
        </label>
        <input
          class="form-control"
          id="valorPorDia"
          type="text"
          v-model="valorPorDiaIngresar"
        />
      </div>
    </form>
    <button v-on:click="insertarunVehiculo" class="btn btn-secondary btn-sm">
      Insertar Vehiculo
    </button>
  </div>
  <br />
  <div id="buscarDiv">
    <h3>Buscar Vehículo</h3>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="PlacaBuscar">Placa: </label>
      <input
        class="form-control"
        id="valorPorDia"
        type="text"
        v-model="placaBuscarIngresar"
      /><button
        v-on:click="buscarVehicPorPlaca"
        class="btn btn-secondary btn-sm"
      >
        Buscar Vehículo
      </button>
    </div>
  </div>
  <div id="resultadoVehiculo">
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
          <th>Año de fabricación</th>
          <th>Cilindraje</th>
          <th>Avalúo</th>
          <th>Valor por día</th>
        </tr>
      </thead>
      <tr>
        <th>{{ vehiculoEncontrado.placa }}</th>
        <th>{{ vehiculoEncontrado.modelo }}</th>
        <th>{{ vehiculoEncontrado.marca }}</th>
        <th>{{ vehiculoEncontrado.anio }}</th>
        <th>{{ vehiculoEncontrado.cilindraje }}</th>
        <th>{{ vehiculoEncontrado.avaluo }}</th>
        <th>{{ vehiculoEncontrado.valorPorDia }}</th>
      </tr>
    </b-table>
  </div>
  <br />
  <div id="buscarDiv">
    <h3>Buscar Reserva</h3>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="ReservaBuscar">Reserva: </label>
      <input
        class="form-control"
        id="ReservaBuscar"
        type="text"
        v-model="reservaBuscarIngresar"
      /><button v-on:click="cambiarReserva" class="btn btn-secondary btn-sm">
        Cambiar Reserva
      </button>
    </div>
  </div>
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
import { buscarCliente, insertarClienteE } from "../helpers/clientes.js";
import {
  insertarVehiculo,
  cambia_modelos,
  buscarPlaca,
} from "../helpers/vehiculosjs.js";
import { cambiar } from "../helpers/reservas.js";
export default {
  data() {
    return {
      cedulaIngresar: "",
      nombreIngresar: "",
      apellidoIngresar: "",
      fechaNacIngresar: "",
      generoIngresar: "",
      cedulaBuscarIngresar: "",
      clienteEncontrado: {
        nombre: "",
        apellido: "",
        cedula: "",
        fechaN: "",
        registro: "",
      },
      reservaEncontrada: {
        placa: "",
        modelo: "",
        estado: "",
        fecha: "",
        reservadoPor: "",
      },
      placaIngresar: "",
      modeloIngresar: "",
      marcaIngresar: "",
      anioFabIngresar: "",
      paisFabIngresar: "",
      cilindrajeIngresar: "",
      avaluoIngresar: "",
      valorPorDiaIngresar: "",
      placaBuscarIngresar: "",
      reservaBuscarIngresar: "",
      valorPred: "",
      modeloSeleccionado: 0,
      marcaSeleccionada: 0,
      vehiculoEncontrado: {
        placa: "",
        modelo: "",
        marca: "",
        anio: "",
        cilindraje: "",
        avaluo: "",
        valorPorDia: "",
      },
      listaMarcas: [
        "Chevrolet",
        "KIA",
        "Hyundai",
        "Toyota",
        "Renault",
        "Nissan",
        "Volkswagen",
      ],
      listaModelos: [],
    };
  },
  methods: {
    async ingresarClienteE() {
      const cliente = {
        cedula: this.cedulaIngresar,
        nombre: this.nombreIngresar,
        apellido: this.apellidoIngresar,
        fechaNacimiento: this.fechaNacIngresar,
        genero: this.generoIngresar,
      };
      const response = await insertarClienteE(cliente);
      this.cedulaIngresar = "";
      this.nombreIngresar = "";
      this.apellidoIngresar = "";
      this.fechaNacIngresar = null;
      this.generoIngresar = null;
    },
    async insertarunVehiculo() {
      var marca = this.listaMarcas[this.marcaSeleccionada - 1];
      const vehiculo = {
        placa: this.placaIngresar,
        modelo: this.modeloIngresar,
        marca: marca,
        anio: this.anioFabIngresar,
        pais: this.paisFabIngresar,
        cilindraje: this.cilindrajeIngresar,
        avaluo: this.avaluoIngresar,
        valorPorDia: this.valorPorDiaIngresar,
      };
      var response = await insertarVehiculo(vehiculo);
      this.placaIngresar = "";
      this.modeloIngresar = "";
      this.marcaIngresar = "";
      this.anioFabIngresar = "";
      this.paisFabIngresar = "";
      this.cilindrajeIngresar = "";
      this.avaluoIngresar = 0;
      this.valorPorDiaIngresar = 0;
    },
    async buscarCedula() {
      var response = await buscarCliente(this.cedulaBuscarIngresar);
      this.clienteEncontrado = response;
      this.cedulaBuscarIngresar = "";
    },
    llenarModelos() {
      console.log("Entra a llenar Modelos");
      this.listaModelos = cambia_modelos(this.marcaSeleccionada);
    },
    async buscarVehicPorPlaca() {
      var response = await buscarPlaca(this.placaBuscarIngresar);
      this.vehiculoEncontrado = response;
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
#ConsultaDeClientes {
  width: 400px;
  margin: auto;
}
#insertarAutoDiv {
  width: 400px;
  margin: auto;
}
#buscarDiv {
  width: 400px;
  margin: auto;
}
</style>