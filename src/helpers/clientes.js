import axios from 'axios'

const insertarClientedesdeCliente =(body1) =>{
    const data = axios.post(`http://localhost:8085/APIBudget/V1/clientes`, body1).then(r=>r.data); 
    return data 
}

export const insertarCliente = async (cliente) => {
    return await insertarClientedesdeCliente(cliente);
}
const insertarClientedesdeEmpleado = (body1) =>{

}
export const insertarClienteE = async (cliente) => {
    return await insertarClientedesdeEmpleado(cliente); 
}


export default insertarCliente;