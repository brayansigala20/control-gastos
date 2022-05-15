import { useState , useEffect } from 'react'
import Mensaje from './Mensaje'
import cerrarModal from '../img/cerrar.svg'
const Modal = ({setmodal, animarModal, setanimarModal, guardarGasto , editarGasto, setEditarGasto}) => {

    const [mensaje , setMensaje]= useState('')

    const [gasto , setgasto]= useState('')
    const [cantidad , setcantidad]= useState('')
    const [selecion , setselecion]= useState('')
    const [fecha, setFecha]= useState('')
    const [id , setID]= useState('')

    useEffect(()=>{
        setgasto(editarGasto.gasto)
        setcantidad(editarGasto.cantidad)
        setselecion(editarGasto.selecion)
        setID(editarGasto.id)
        setFecha(editarGasto.fecha)
    },[])

    const handlecerrar = ()=>{
        setanimarModal(false)
        setTimeout(() => {
            setmodal(false)
        }, 600);
      }

    const handleSubmit = e=>{
        e.preventDefault()

    if([gasto, cantidad, selecion].includes('')){
        setMensaje('obligatorio llenar campos')
    }
    guardarGasto({gasto,cantidad,selecion, id , fecha})
    }
  return (
    <div className="modal">
        <img 
          className='cerrar-modal'
          src={cerrarModal} 
          alt="cerrar modal" 
          onClick={handlecerrar}/>

          <form 
          className={`formulario ${animarModal ? 'animar' : 'cerrar' }`}
          onSubmit={handleSubmit} >
              <legend>{editarGasto.gasto ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
              {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
              <div className='campo'>
                  <label htmlFor="nombre">nombre gasto</label>

                  <input
                  id='nombre' 
                  type="text"
                   placeholder='ingresa el nombre del gasto'
                  value={gasto}
                  onChange={e=> setgasto(e.target.value)}
                   />
              </div>

              <div className='campo'>
                  <label htmlFor="nombre">Cantidad de gasto</label>

                  <input
                  id='nombre' 
                  type="text"
                   placeholder='ingresa la cantidad del gasto'
                   value={cantidad}
                   onChange={e=> setcantidad(e.target.value)}
                   />
              </div>

              <div className='campo'>
                  <label htmlFor="nombre">Tipo te gasto</label>

                  <select 
                  id="categoria"
                  value={selecion}
                  onChange={e=>setselecion(e.target.value)}>
                  

                   <option value="">-- selecion --</option>
                   <option value="comida">comida</option>
                   <option value="salud">salud</option>
                   <option value="vivienda">vivienda</option>
                   <option value="gastos">gastos varios</option>
                   <option value="ocio">ocio</option>
                   <option value="ahorro">ahorro</option>
                   <option value="suscripciones">suscripciones</option>
                  </select>
              </div>
                  <input 
                   type="submit"
                   value={editarGasto.gasto ? 'Anadir Cambio' : 'Anadir Gasto'}

                  />
              
              
          </form>
    </div>
  )
}

export default Modal