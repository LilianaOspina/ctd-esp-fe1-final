import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { MouseEvent, FC } from "react";
import { buscarPersonajeThunk } from "../thunks/thunks";
import { useDispatch } from "react-redux";
 
/**
 * Esta es la pagina principal. Se ve el panel de filtros junto con la grilla de personajes.
 * 
 * 
 * @returns {React.ReactElement} Un JSX element
 */
const PaginaInicio: FC = () => {
    
    const dispatch = useDispatch();

    const limpiarFiltros = (e: MouseEvent<HTMLButtonElement>)=> {
        dispatch(buscarPersonajeThunk(""));
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={(e) => { limpiarFiltros(e) }}>Limpiar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio