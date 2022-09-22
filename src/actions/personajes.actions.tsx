import { Action, ActionCreator } from "@reduxjs/toolkit"
import PaginaType from "../types/pagina.types"
import PersonajeType from "../types/personajes.types"

export interface IsFetchingPersonajesAction extends Action {
    type: "IS_FETCHING_PERSONAJES",
    payload: { nombre: string }
}

export interface IsSuccessPersonajesAction extends Action {
    type: "IS_SUCCESS_PERSONAJES",
    payload: {
        personajes: PersonajeType[],
        paginaInfo: PaginaType,
    }
}

export interface IsErrorPersonajesAction extends Action {
    type: "IS_ERROR_PERSONAJES",
    payload: { error: string }
}

export const isFetchingPersonajesAction: ActionCreator<IsFetchingPersonajesAction> = (nombre: string) => {
    return {
        type: "IS_FETCHING_PERSONAJES",
        payload: { nombre: nombre }
    }
}

export const isSuccessPersonajesAction: ActionCreator<IsSuccessPersonajesAction> = (personajes: PersonajeType[], paginaInfo: PaginaType
) => {
    return {
        type: "IS_SUCCESS_PERSONAJES",
        payload: {
            personajes: personajes,
            paginaInfo: paginaInfo
        }
    }
}

export const isErrorPersonajesAction: ActionCreator<IsErrorPersonajesAction> = (error: string) => {
    return {
        type: "IS_ERROR_PERSONAJES",
        payload: { error: error }
    }
}

export type PersonajesActionType =
    | ReturnType<typeof isFetchingPersonajesAction>
    | ReturnType<typeof isSuccessPersonajesAction>
    | ReturnType<typeof isErrorPersonajesAction>
