import axios from 'axios'
const insertarReserva =(body1) =>{
    const data = axios.post(`http://localhost:8085/APIBudget/V1/reservaciones`, body1).then(r=>r.data); 
    return data 
}

export const reservar = async (reserva) => {
    return await insertarReserva(reserva)
}
const cambiarReserva = (numeroR) =>{
    console.log("Entra al metodo en JS")
    const data = axios.put(`http://localhost:8085/APIBudget/V1/reservaciones/${numeroR}`).then(r=>r.data)
    console.log("Los datos son: ", data)
    return data; 

}
export const cambiar = async (num) =>{
    return await cambiarReserva(num)
}



export default reservar;cambiar;  