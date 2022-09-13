import axios from 'axios'

const insertarClientedesdeCliente =  (body1) =>{
    const data = axios.post(`http://localhost:8085/APIBudget/V1/clientes`, body1).then(r=>r.data); 
    return data 
}

export const insertarCliente = async (cliente) => {
    return await insertarClientedesdeCliente(cliente);
}
const insertarClientedesdeEmpleado = (body1) =>{
    const data = axios.post(`http://localhost:8085/APIBudget/V1/clientes/Empleado`, body1).then(r=>r.data); 
    return data 
}
export const insertarClienteE = async (cliente) => {
    return await insertarClientedesdeEmpleado(cliente); 
}

const buscarclienteCedula = (id) =>{
    const datos = axios.get(`http://localhost:8085/APIBudget/V1/clientes?cedula=${id}`).then(r=>r.data); 
    return datos
}
export const buscarCliente = async (cedula) =>{
    return await buscarclienteCedula(cedula); 
}

export default insertarCliente;buscarCliente;insertarClienteE; 