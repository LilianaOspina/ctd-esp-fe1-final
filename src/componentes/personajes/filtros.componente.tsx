import React, { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/store';
import { buscarPersonajeThunk } from '../../thunks/thunks';
import './filtros.css';

/**
 * Esta funcion dispara el llamado al thunk para que este realice el pedido a la api con el input que va ingresando
 * 
 * @returns {React.ReactElement} un JSX element
 */

const Filtros: FC = () => {
    
    const dispatch = useDispatch();

    const { search } = useSelector(state => state.personajes)

    const searchPersonaje = async (e: ChangeEvent<HTMLInputElement>) => {
        //Hacemos el dispatch del thunk
        dispatch(buscarPersonajeThunk(e.target.value))
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
            type="text"
            value={search}
            placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre"
            onChange={(e)=>{searchPersonaje(e)}}
        />
    </div>
}

export default Filtros;