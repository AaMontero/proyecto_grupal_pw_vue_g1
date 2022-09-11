import axios from 'axios'
let marcas = ['Chevrolet','KIA','Hyundai','Toyota','Renault','Nissan','Volkswagen']
var modelos_1= ['Aveo','Camaro','Captiva','Corvette','Cruze','Malibu','Orlando','Spark','Trax','Volt']
var modelos_2 = ['Picanto','Soluto','Rio Sedán','Rio 5','Cerato','Stringer','EV 6','Soul EV']
var modelos_3 = ['Kona','Tucson','Bayon','i20','i30','IONIQ ','Santa fé','Staria']
var modelos_4 = ['Etios','Yaris','GR','Corolla','Prius','Camry','GR Yaris']
var modelos_5 = ['Kwid','Logan','Sandero','Stepway','Duster','Captur','Koleos','Magnum']
var modelos_6 = ['X-Trail','Versa','March','Kicks','Altima','Frontier','Sentra']
var modelos_7 = ['Amarok','Beetle','Caravelle','Eos','Golf','Jetta','Polo','Touran']

var todosModelos = [
    [],
    modelos_1,
    modelos_2,
    modelos_3,
    modelos_4,
    modelos_5,
    modelos_6,
    modelos_7

]
const obtenerVehiculoMarcaModelo = async (marca,modelo) => {
    const data = axios.get(`http://localhost:8085/APIBudget/V1/vehiculos/?marca=${marca}&modelo=${modelo}`).then(r => r.data)
    console.log(data)
    return data
}

export const obtenerVehMarMod =  async (marca, modelo) => {
    return await obtenerVehiculoMarcaModelo(marca,modelo);
}
export const cambia_modelos = (num) => { 
    return todosModelos[num]
}

 export default cambia_modelos; obtenerVehMarMod; 