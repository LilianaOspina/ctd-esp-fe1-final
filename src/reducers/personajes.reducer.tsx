import { Reducer } from "@reduxjs/toolkit";
import { PersonajesActionType } from "../actions/personajes.actions";
import PaginaType from "../types/pagina.types";
import PersonajeType from "../types/personajes.types";

export interface PersonajesStateInterface {
    search: string;
    status: "fetching" | "success" | "error";
    personajes: PersonajeType[];
    paginaInfo: PaginaType;
    error: string | null;
}

const initialState: PersonajesStateInterface = {
    search: '',
    status: "fetching",
    personajes: [],
    paginaInfo: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
    },
    error: null,
};

/**
 * Esta funcion personajeReducer del paquete toolkit, recibe un estado inicial y le detallamos en el switch las acciones que disparara el dispatcher
 * @param {state } initialState 
 * @param {action} PersonajesActionType
 * @returns {state} 
 */

const personajesReducer: Reducer<PersonajesStateInterface, PersonajesActionType> = (state = initialState, action): PersonajesStateInterface => {
        switch (action.type) {
            case "IS_FETCHING_PERSONAJES":
                return {
                    ...state,
                    search: action.payload.nombre,
                    status: "fetching",
                    error: null
                }
            case "IS_SUCCESS_PERSONAJES":
                return {
                    ...state,
                    status: "success",
                    personajes: [...action.payload.personajes],
                    paginaInfo: action.payload.paginaInfo,
                    error: null
                }
            case "IS_ERROR_PERSONAJES":
                return {
                    ...state,
                    status: "error",
                    personajes: [],
                    error: action.payload.error
                }
            default:
                return { ...state };
        }
    }
export default personajesReducer;