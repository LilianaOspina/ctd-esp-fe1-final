import { FavoritosActionType } from "../actions/favoritos.actions";
// import FavoritosType from "../types/favoritos.types";
import PersonajeType from "../types/personajes.types";

export type FavoritosState = {
    
    listadoFavoritos: PersonajeType[];
}

const initialState: FavoritosState = {
    listadoFavoritos: [],
};

const favoritosReducer= (state:FavoritosState = initialState, action: FavoritosActionType) => {
    switch (action.type) {
        case "ADD_FAVORITO":
            return {
                ...state,
                listadoFavoritos: [action.payload.favorito, ...state.listadoFavoritos.filter(fav => fav.id !== action.payload.favorito.id)],
                
            }
        case "REMOVE_FAVORITO":
            return {
                ...state,
                listadoFavoritos: [...state.listadoFavoritos.filter(fav => fav.id !== action.payload.favorito.id)]
            }
    }
}
export default favoritosReducer;