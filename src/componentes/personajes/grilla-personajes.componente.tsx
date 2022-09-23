import './grilla-personajes.css';
import { FC, useEffect } from 'react';
import { IRootState, useSelector } from '../../store/store';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { buscarPersonajeThunk } from '../../thunks/thunks';
import { agregarFavorito } from '../../actions/favoritos.actions';
import PersonajeType from '../../types/personajes.types';

const mapState = (state: IRootState) => ({});
const mapDispatch = {
    agregarFavorito
}

const connector = connect(mapState, mapDispatch);
type GrillaPersonajesProps = ConnectedProps<typeof connector>;

/**
 * Grilla de personajes para la pagina de inicio
 * Al montarse el componente se mostrara un listado de los personajes y se renderizaran segun las busquedas realizadas en el filtro
 * 
 * 
 * @returns {React.ReactElement} un JSX element 
 */
const GrillaPersonajes:FC<GrillaPersonajesProps> = ({agregarFavorito}:GrillaPersonajesProps) => {
    
    const { personajes, status } = useSelector(state => state.personajes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarPersonajeThunk(""));
    }, [dispatch]);

    const onClickFavorito = (favorito: PersonajeType) => {
        console.log(favorito);
        
        agregarFavorito(favorito);
    }

    if (status === "fetching") return <div>Buscando...</div>

    return <div className="grilla-personajes">
        {personajes.map((personaje) => {
            return (
                <div key={personaje.id}>
                    <TarjetaPersonaje onClickFavorito={onClickFavorito} personaje={personaje} />
                </div>)
        })}
    </div>
}
 
export default connector(GrillaPersonajes);