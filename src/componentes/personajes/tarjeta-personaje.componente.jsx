import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

const TarjetaPersonaje = ({ nombre, imagen }) => {
    return <div className="tarjeta-personaje">
        <img src={imagen} alt={nombre} />
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFavorito={false} />
        </div>
    </div>
}

export default TarjetaPersonaje;