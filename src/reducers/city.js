import {SET_CITY} from './../actions'

export const city = (state = {}, action) =>{
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.value } //estado anterior mas el valor de la accion
        default:
            return state;
    }
}