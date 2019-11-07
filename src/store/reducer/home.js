import {GETARTICLE} from '../action/Article'
const defaultState = {
    title: 'Hello Redux'
}
export default function(state  = defaultState , action) {
    switch (action.type) {
        case GETARTICLE:
        return{
        ...state,
        title: action.data
        }
        default:
            return state
    }
}
