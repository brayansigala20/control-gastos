import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatearFecha } from './helper'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'


const Gasto = ({gastos , setEditarGasto , eliminarGasto}) => {
        const {cantidad,gasto,id,selecion,fecha} = gastos
        const iconosGastos={ 
        comida: iconoComida ,
        salud : iconoSalud,
        vivienda: iconoCasa,
        gastos: iconoGastos,
        ocio: iconoOcio,
        ahorro: iconoAhorro,
        suscripciones: iconoSuscripciones } 

        const leadingActions =() =>(
            <LeadingActions>
                <SwipeAction
                onClick={()=>setEditarGasto(gastos)}
                >
                    Editar
                </SwipeAction>
            </LeadingActions>
        )

        const trailingActions =() =>(
            <TrailingActions>
                <SwipeAction 
                onClick={()=>eliminarGasto(id)}
                destructive={true}>
                    Eliminar
                </SwipeAction>
            </TrailingActions>
        )
    return (
        <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
        <div className='gasto sombra '>
        <div className='contenido-gasto'>
        <img src={iconosGastos[selecion]} alt="icono" />
            <div className='descripcion-gasto'>
            <p className='categoria'>{gastos.selecion}</p>
            <p className='nombre-gasto'>{gastos.gasto}</p>
            <p className='fecha-gasto'>Agregado el : {""}
            <span>{formatearFecha(fecha)}</span></p>
            </div>
        </div>
            <p className='cantidad-gasto'>${gastos.cantidad}</p>
        </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto