import Header from './components/Header'
import NuevoPresupuesto from './components/NuevoPresupuesto'
import IconoNuevogasto from './img/nuevo-gasto.svg'
import { generarId } from './components/helper'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { useState , useEffect} from 'react'

function App() {
    const [NewPresupuesto,setNewPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
    const [IsValidPresupuesto, setIsValidPresupuesto] = useState(false)

    const [modal, setmodal]= useState(false)
    const [animarModal, setanimarModal]= useState(false)

    const [gastos, setGasto]= useState( localStorage.getItem('gasto') ? JSON.parse(localStorage.getItem('gasto')): [])

    const [editarGasto, setEditarGasto]= useState([])

    useEffect(()=>{
     if (Object.keys(gastos).length > 0) {
       setmodal(true)
       setTimeout(() => {
         setanimarModal(true)
       }, 600);
     }
    }, [editarGasto])
    


    useEffect(()=>{
      localStorage.setItem('presupuesto', NewPresupuesto ?? 0) 
    },[NewPresupuesto])

    useEffect(()=>{
      localStorage.setItem('gasto',JSON.stringify(gastos) ?? [])
    },[gastos])

    useEffect(()=>{
      const presupuestoLs = Number( localStorage.getItem('presupuesto')) ?? 0;
      if (presupuestoLs > 0) {
        setIsValidPresupuesto(true)
      }
    },[])

    useEffect(()=>{
      setmodal(false)
      setanimarModal(false)
    },[])

    const handleModal =()=>{
      setmodal(true)
      setEditarGasto({})
      setTimeout(() => {
        setanimarModal(true)
      }, 600)
  }

  const guardarGasto = (gasto)=>{

    if(gasto.id){
      const gastosActualizados =  gastos.map(gastoState=>gastoState.id === gasto.id ? gasto : gastoState)
      setGasto(gastosActualizados)
      setEditarGasto({})
    }else{
      gasto.id = generarId()
      gasto.fecha = Date.now()
      
      setGasto([...gastos, gasto])
    }
    setanimarModal(false)
    setTimeout(() => {
      setmodal(false)
    },600 );

  }
  

  const eliminarGasto = (id)=>{
    const gastoaEliminar = gastos.filter(gasto=> gasto.id !== id )
    setGasto(gastoaEliminar)
  }


  return (
<div className={ modal ? 'fijar' : ''}>
    <Header
     gastos={gastos}
     NewPresupuesto={NewPresupuesto}
     setNewPresupuesto={setNewPresupuesto}
     IsValidPresupuesto={IsValidPresupuesto}
     setIsValidPresupuesto={setIsValidPresupuesto}/>

     {IsValidPresupuesto &&(
        <>
        <main>
          <ListadoGastos
            gastos={gastos}
            setEditarGasto={setEditarGasto}
            eliminarGasto={eliminarGasto} />
        </main>
      <div className='nuevo-gasto'>
        <img src={IconoNuevogasto}
        onClick={handleModal} 
        alt='nuevo gasto'/>
      </div>
        </>
     )}

     {modal && <Modal
                modal={modal}
                setmodal={setmodal}
                animarModal={animarModal}
                setanimarModal={setanimarModal}
                guardarGasto={guardarGasto}
                editarGasto={editarGasto}
                setEditarGasto={setEditarGasto}
               />}
</div>
  )
}

export default App
