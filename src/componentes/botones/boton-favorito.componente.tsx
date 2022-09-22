import { MouseEvent } from 'react';
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
    esFavorito: boolean;
    onClick: MouseEvent<HTMLElement>
};

const BotonFavorito = ({esFavorito, onClick}:Props) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;