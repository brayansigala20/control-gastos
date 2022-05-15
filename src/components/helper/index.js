

export const generarId = ()=>{
    const num = Math.random().toString(36).substr(2)
    const date = Date.now().toString(34)
    return num+date
}

export const formatearFecha = fecha=>{
    const nuevaFecha = new Date(fecha)
    const opciones = { year: 'numeric',
                       month: 'long',
                       day: '2-digit'}
     return nuevaFecha.toLocaleDateString('es-ES', opciones)
}