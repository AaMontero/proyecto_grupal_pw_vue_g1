import axios from 'axios'
const insertarReserva =(body1) =>{
    const data = axios.post(`http://localhost:8085/APIBudget/V1/reservaciones`, body1).then(r=>r.data); 
    return data 
}

export const reservar = async (reserva) => {
    return await insertarReserva(reserva)
}

export default reservar; 