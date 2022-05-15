import { useState } from "react"
import Mensaje from "./Mensaje"
const NuevoPresupuesto = ({
    NewPresupuesto,
    setNewPresupuesto, 
    setIsValidPresupuesto}
    ) => {
    const [Mnsj , setMnsj] =useState("")

    const handleSumit = e=>{
        e.preventDefault()

        if((!Number(NewPresupuesto) || Number( NewPresupuesto) < 0 )){
               setMnsj("presupuesto invalido") 
               return
        }
               setMnsj("")
               setIsValidPresupuesto(true)

    
    }
    
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form 
        className="formulario "
        onSubmit={handleSumit}>
            <div className="campo">
                <label>Definir presupuesto</label>

                <input  
                   className="nuevo-presupuesto" 
                   type="text"
                   placeholder="inscribe tu presupuesto"
                   value={Number(NewPresupuesto)} 
                   onChange={ e => Number(setNewPresupuesto(e.target.value))}
                />

                <input 
                   type="submit" 
                   value="agregar" 
                />
                {Mnsj && <Mensaje tipo="error">{Mnsj}</Mensaje> }
            </div>
        </form>
    </div>
  )
}

export default NuevoPresupuesto