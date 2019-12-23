import {SET_CITY} from './../actions'

export const city = (state = {}, action) =>{
    switch (action.type) {
        case SET_CITY:
            return action.payload; //estado anterior mas el valor de la accion //Value es lo mismo que payload
        default:
            return state;
    }
}