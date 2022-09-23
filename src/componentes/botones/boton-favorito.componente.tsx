// import FavoritosType from '../../types/favoritos.types';
import React from 'react';
import PersonajeType from '../../types/personajes.types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {PersonajeType} personaje
 * @param {boolean} esFavorito
 * @param {function(*)} onClickFavorito
 * @returns {React.ReactElement}un JSX element 
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