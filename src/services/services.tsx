import PaginaType from "../types/pagina.types";
import PersonajeType from "../types/personajes.types";

export const buscarPersonajesApi = async (nombre?: string): Promise<[PersonajeType[], PaginaType]> => {
    let parametros = "?"
    if (nombre) {
        parametros += `name=${nombre}`
    }
    return fetch(`https://rickandmortyapi.com/api/character/${parametros}`)
        .then(data => data.json())
        .then(data => [data.results, data.info])
}

/**
 * Esta funcion recibe un texto y lo codifica a b64
 * @param {string} url
 * @returns {string}
 */
export const paginacionApi = async (url: string): Promise<[PersonajeType[], PaginaType]> => {
    return fetch(url)
        .then((data) => data.json())
        .then((data) => [data.results, data.info])
}