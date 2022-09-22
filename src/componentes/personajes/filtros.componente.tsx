import React, { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { buscarPersonajeThunk } from '../../thunks/thunks';
import './filtros.css';

/**
 * Esta funcion dispara el llamado al thunk para que este realice el pedido a la api con el input que va ingresando
 * 
 * @returns {React.ReactElement} un JSX element
 */


const Filtros: FC = () => {
    
    const dispatch = useDispatch();

    const searchPersonaje = async (e: ChangeEvent<HTMLInputElement>) => {
        //Hacemos el dispatch del thunk
        dispatch(buscarPersonajeThunk(e.target.value))
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre"
            onChange={(e)=>{searchPersonaje(e)}}
        />
    </div>
}

export default Filtros;