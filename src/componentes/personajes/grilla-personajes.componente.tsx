import './grilla-personajes.css';
import React, { FC, useEffect } from 'react';
import { useSelector } from '../../store/store';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useDispatch } from 'react-redux';
import { buscarPersonajeThunk } from '../../thunks/thunks';

/**
 * Grilla de personajes para la pagina de inicio
 * Al montarse el componente se mostrara un listado de los personajes y se renderizaran segun las busquedas realizadas en el filtro
 * 
 * 
 * @returns {React.ReactElement} un JSX element 
 */
const GrillaPersonajes:FC = () => {
    
    const { personajes, status } = useSelector(state => state.personajes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarPersonajeThunk(""));
    }, [dispatch]);

    if (status === "fetching") return <div>Buscando...</div>

    return <div className="grilla-personajes">
        {personajes.map((personaje) => {
            return (
                <div key={personaje.id}>
                    <TarjetaPersonaje nombre={personaje.name} imagen={personaje.image} />
                </div>)
        })}
    </div>
}
 
export default GrillaPersonajes;