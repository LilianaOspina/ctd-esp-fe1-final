import React, { FC } from 'react';
import { useSelector } from '../../store/store';
import { useDispatch } from 'react-redux';
import { paginacionThunk } from '../../thunks/thunks';
import './paginacion.css';

/**
 * Componente que contiene los botones para la paginacion
 * se desactivan de acuerdo a la nulidad de los items
 * 
 * 
 * @returns {React.ReactElement} un JSX element 
 */
const Paginacion: FC = () => {
    
    const paginaInfo = useSelector(state => state.personajes.paginaInfo);
    const dispatch = useDispatch()
    const { prev, next } = paginaInfo;

    const paginaPrev = () => {
        dispatch(paginacionThunk(prev));
    };

    const paginaNext = () => {
        dispatch(paginacionThunk(next));
    };


    return <div className="paginacion">
        <button disabled={prev !== null ? false : true} className={"primary"}
            onClick={paginaPrev}
        >Anterior</button>
        <button disabled={next !== null ? false : true} className={"primary"}
            onClick={paginaNext}
        >Siguiente</button>
    </div>
}

export default Paginacion;