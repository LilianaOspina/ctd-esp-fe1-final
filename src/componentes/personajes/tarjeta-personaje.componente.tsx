// import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


type Props = {
    nombre: string;
    imagen: string;
}

/**
 * Grilla de personajes para la pagina de inicio
 * Al montarse el componente se mostrara un listado de los personajes y se renderizaran segun las busquedas realizadas en el filtro
 * 
 * @param {string} nombre
 * @param {string} imagen
 * @returns {React.ReactElement }un JSX element 
 */

const TarjetaPersonaje = ({ nombre, imagen }: Props) => {
    return <div className="tarjeta-personaje">
        <img src={imagen} alt={nombre} />
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            {/* <BotonFavorito esFavorito={false} /> */}
        </div>
    </div>
}

export default TarjetaPersonaje;