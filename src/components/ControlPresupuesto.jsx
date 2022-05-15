import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar' 
import "react-circular-progressbar/dist/styles.css"
const ControlPresupuesto = ({NewPresupuesto, gastos}) => {
    const [disponible , setDisponible]= useState(0)
    const [gastado , setGastado]= useState(0)
    const [porcentaje, setPorcentaje]= useState(0)


    const formatear = (cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    useEffect(()=>{
     const totalGastado = gastos.reduce((total, gasto)=> Number(gasto.cantidad) + total, 0)
     setGastado(totalGastado)

     const totalDisponible =Number(NewPresupuesto) - Number(totalGastado)  
     setDisponible(totalDisponible)

     const porcentajePresupuesto = (((NewPresupuesto - totalDisponible) / NewPresupuesto) * 100).toFixed(1)

    setTimeout(() => {
        setPorcentaje(porcentajePresupuesto)
    }, 500);
    },[gastos])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
            value={porcentaje}
            styles={buildStyles({
                pathColor: '#3b82f6',
                trailColor: '#f5f5f5',
                textColor: '#3b82f6'
            })}
            text={`${porcentaje} % Gastado`} />
        </div>
        <div className="contenido-presupuesto">
            <p>
            <span>Presupuesto: {""}</span> {formatear(Number(NewPresupuesto))}
            </p>
            <p>
            <span>disponible: {""}</span> {formatear(Number(disponible))}
            </p>
            <p>
            <span>Gastado: {""}</span> {formatear(Number(gastado))}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto