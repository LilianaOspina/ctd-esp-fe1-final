import { Action, ActionCreator } from "@reduxjs/toolkit";
// import FavoritosType from "../types/favoritos.types";
import PersonajeType from "../types/personajes.types";

export interface FavoritoAction extends Action {
    type: "ADD_FAVORITO" | "REMOVE_FAVORITO"
    payload: {
        favorito: PersonajeType,
    }
}

export const agregarFavorito: ActionCreator<FavoritoAction> = (favorito: PersonajeType ) => {
    return {
        type: "ADD_FAVORITO",
        payload: {
            favorito:favorito
        }
    }
}

export const removerFavorito: ActionCreator<FavoritoAction> = (favorito: PersonajeType) => {
    return {
        type: "REMOVE_FAVORITO",
        payload: {
            favorito:favorito
        }
    }
}

export type FavoritosActionType =
    | ReturnType<typeof agregarFavorito>
    | ReturnType<typeof removerFavorito>
