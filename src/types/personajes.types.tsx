import FavoritosType from "./favoritos.types";

interface PersonajeType extends FavoritosType{
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    episode: string[];
}

export default PersonajeType;