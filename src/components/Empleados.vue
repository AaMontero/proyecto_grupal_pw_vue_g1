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
  <button v-on:click="insertar" class="btn btn-secondary btn-sm">
    Insertar
  </button>
  <div id="ConsultaDeClientes">
    <h3>Consultar los datos de un cliente</h3>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="Cedula"> Cedula Cliente: </label>
      <input
        class="form-control"
        id="Cedula"
        type="text"
        v-model="cedulaIngresar"
      />
    </div>
    <button v-on:click="insertar" class="btn btn-secondary btn-sm">
      Buscar
    </button>
  </div>
  <div id="resultadoCliente">
    <table class="table">
      <thead>
        <tr>
          <th>Cedula</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nacimiento</th>
          <th>Registro</th>
        </tr>
      </thead>
      <tr>
        <td>Cedula1</td>
        <td>Nombre1</td>
        <td>Apellido1</td>
        <td>FechaNacimiento1</td>
        <td>Registro1</td>
      </tr>
    </table>
  </div>
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
        <label class="input-group-text" for="Modelo"> Modelo: </label>
        <input
          class="form-control"
          id="Modelo"
          type="text"
          v-model="modeloIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Marca"> Marca: </label>
        <input
          class="form-control"
          id="Marca"
          type="text"
          v-model="marcaIngresar"
        />
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
    <button v-on:click="insertar" class="btn btn-secondary btn-sm">
      Insertar
    </button>
  </div>
  <div id="buscarDiv">
    <div class="input-group input-group-sm mb-3">
      <h3>BUSCAR VEHICULO</h3>
      <label class="input-group-text" for="PlacaBuscar">Placa: </label>
      <input
        class="form-control"
        id="valorPorDia"
        type="text"
        v-model="placaBuscarIngresar"
      />
    </div>
    <button v-on:click="insertar" class="btn btn-secondary btn-sm">
      Buscar
    </button>
  </div>
  <div id="resultadoVehiculo">
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
      <tr v-for="auto in listprovicionales" :key="auto.placa">
        <th>{{ auto.Placa }}</th>
        <th>{{ auto.Modelo }}</th>
        <th>{{ auto.Marca }}</th>
        <th>{{ auto.AnioDeFabricacion }}</th>
        <th>{{ auto.Cilindraje }}</th>
        <th>{{ auto.Avaluo }}</th>
        <th>{{ auto.ValorPorDia }}</th>
      </tr>
    </table>
  </div>
  <div id="buscarDiv">
    <h3>BUSCAR RESERVA</h3>
    <div class="input-group input-group-sm mb-3">
      <label class="input-group-text" for="ReservaBuscar">Reserva: </label>
      <input
        class="form-control"
        id="ReservaBuscar"
        type="text"
        v-model="reservaBuscarIngresar"
      />
    </div>
  </div>
  <div id="resultadoReservaDiv">
    <table class="table">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Estado</th>
          <th>Fecha</th>
          <th>Reservado por</th>
        </tr>
      </thead>
      <tr>
        <td>Placa1</td>
        <td>Modelo1</td>
        <td>Estado1</td>
        <td>Fecha1</td>
        <td>Reservado por1</td>
      </tr>
    </table>
  </div>
  <div>
    <h3>Retirar un vehículo sin reserva</h3>
    <div>
        
    </div>

  </div>
</template>

<script>
import { insertarCliente } from "../helpers/clientes.js";
export default {
  data() {
    return {
      cedulaIngresar: "",
      nombreIngresar: "",
      apellidoIngresar: "",
      fechaNacIngresar: "",
      generoIngresar: "",
      cedulaIngresar: "",
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
      listprovicionales: [
        {
          Modelo: "modelo1",
          Marca: "marca1",
          AnioDeFabricacion: "2020",
          PaísDeFabricaciónD: "Ecuador",
          Cilindraje: "1500cc",
          Avaluo: 0,
          ValorPorDia: 0,
        },
        {
          Modelo: "modelo1",
          Marca: "marca1",
          AnioDeFabricacion: "2020",
          PaísDeFabricacion: "Ecuador",
          Cilindraje: "1500cc",
          Avaluo: 25000,
          ValorPorDia: 300,
        },
      ],
    };
  },
  methods: {
    async ingresarCliente() {
      const cliente = {
        cedula: this.cedulaIngresar,
        nombre: this.nombreIngresar,
        apellido: this.apellidoIngresar,
        fechaNacimiento: this.fechaNacIngresar,
        genero: this.generoIngresar,
      };
      const response = await insertarCliente(cliente);
      this.cedulaIngresar = "";
      this.nombreIngresar = "";
      this.apellidoIngresar = "";
      this.fechaNacIngresar = null;
      this.generoIngresar = null;
    },
    insertarunVehiculo() {},
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