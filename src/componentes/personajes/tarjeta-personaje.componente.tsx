import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import PersonajeType from '../../types/personajes.types';


type TarjetaPersonajeProps = {
    personaje: PersonajeType;
    onClickFavorito: (favorito: PersonajeType) => void
}

/**
 * Grilla de personajes para la pagina de inicio
 * Al montarse el componente se mostrara un listado de los personajes y se renderizaran segun las busquedas realizadas en el filtro
 * 
 * @param {PersonajeType} personaje
 * @param {function(*)} onClickFavorito
 * @returns {React.ReactElement } un JSX element 
 */

const TarjetaPersonaje = ({personaje, onClickFavorito }: TarjetaPersonajeProps) => {
    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name} />
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito personaje={personaje} onClickFavorito={onClickFavorito} esFavorito={false} />
        </div>
    </div>
}

export default TarjetaPersonaje;