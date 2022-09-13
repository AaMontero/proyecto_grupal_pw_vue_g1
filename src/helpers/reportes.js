import axios from 'axios'

const buscarReportTo = (fechaI, fechaF) =>{
    const datos = axios.get(`http://localhost:8085/APIBudget/V1/reservaciones?fechaI=${fechaI}&fechaF=${fechaF}`).then(r=>r.data); 
    return datos
}
export const buscarRep = async (fechaI, fechaF) =>{
    return await buscarReportTo(fechaI, fechaF); 
}

const buscarDatosTodos = () =>{
    const datos = axios.get(`http://localhost:8085/APIBudget/V1/clientes/vips`).then(r=>r.data); 
    return datos
}
export const buscarTodosC = async () =>{
    return await buscarDatosTodos(); 
}


export default buscarRep; buscarTodosC; 