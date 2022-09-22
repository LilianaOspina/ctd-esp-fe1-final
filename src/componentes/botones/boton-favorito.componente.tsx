// import FavoritosType from '../../types/favoritos.types';
import PersonajeType from '../../types/personajes.types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

type Props = {
    personaje: PersonajeType;
    esFavorito: boolean;
    onClickFavorito: (personaje: PersonajeType) => void;

};

const BotonFavorito = ({personaje, esFavorito, onClickFavorito}:Props) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={() => onClickFavorito(personaje)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;