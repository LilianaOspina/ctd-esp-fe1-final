import { ThunkAction } from "@reduxjs/toolkit";
import { isErrorPersonajesAction, isFetchingPersonajesAction, isSuccessPersonajesAction, PersonajesActionType } from "../actions/personajes.actions";
import { paginacionApi, buscarPersonajesApi } from "../services/services";
import { IRootState } from "../store/store";

export interface PersonajeThunkInterface extends ThunkAction<void, IRootState, unknown, PersonajesActionType> { }

/**
 * Esta funcion recibe un string y retorna una funcion asincrona que le dira al service que personajes buscar
 * 
 * @param {string} name
 * @returns {function(*)}
 */
export const buscarPersonajeThunk = (name: string): PersonajeThunkInterface => {
    return async (dispatch, getState) => {
            try {
                dispatch(isFetchingPersonajesAction(name))

                const [personajes, paginaInfo] = await buscarPersonajesApi(name);

                dispatch(isSuccessPersonajesAction(personajes, paginaInfo))
            }
            catch (error) {
                dispatch(isErrorPersonajesAction(error))
            }
    }
}

/**
 * Esta funcion recibe un string que es una url y retorna una funcion asincrona que despachara las acciones al service para la paginacion
 * 
 * @param {string} name
 * @returns {function(*)}
 */

export const paginacionThunk = (url: string): PersonajeThunkInterface => {
    return async (dispatch, getState) => {
        try {
            const [personajes, paginaInfo] = await paginacionApi(url);
            dispatch(isSuccessPersonajesAction(personajes, paginaInfo))
        } catch (error) {
            dispatch(isErrorPersonajesAction(error))
        }
    }
}
