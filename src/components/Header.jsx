import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
const Header = ( { 
  gastos,
  NewPresupuesto, 
  setNewPresupuesto,
  IsValidPresupuesto,
  setIsValidPresupuesto}) => {
  return (
<header>
    <h1>planificacion de gastos</h1>

    {IsValidPresupuesto ? (
      <ControlPresupuesto
      gastos={gastos}
      NewPresupuesto={NewPresupuesto} />
    )
    :(
    <NuevoPresupuesto
    NewPresupuesto={NewPresupuesto}
    setNewPresupuesto={setNewPresupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}/>) }

</header>
  )
}

export default Header