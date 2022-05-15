import Gasto from "./Gasto"
const ListadoGastos = ({ gastos , setEditarGasto , eliminarGasto }) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? "gastos" : "no hay gastos"}</h2>

        {gastos.map((gastos)=>(
            <Gasto 
             key={gastos.id}
             gastos={gastos}
             setEditarGasto={setEditarGasto} 
             eliminarGasto={eliminarGasto} />
        ))}
    </div>
  )
}

export default ListadoGastos