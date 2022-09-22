import { combineReducers, applyMiddleware, createStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
//Este devTools nos permite debuggear nuestro store, instalado modo --save-dev
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import personajesReducer from "../reducers/personajes.reducer";
import favoritosReducer from "../reducers/favoritos.reducer";


const rootReducer = combineReducers({
    // Aqui van los reducers.
    personajes: personajesReducer,
    favoritos: favoritosReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector



export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)