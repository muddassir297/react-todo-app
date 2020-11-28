import { FETCH_TODOLIST_REQUEST, FETCH_TODOLIST_SUCCESS, FETCH_TODOLIST_FAILURE } from './todolistTypes';

const initialState = {
    loading: false,
    todos:[],
    error:''
}


const todolistReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_TODOLIST_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_TODOLIST_SUCCESS:
            return{
                loading: false,
                todos: action.payload,
                error: ''
            }
        case FETCH_TODOLIST_FAILURE:
            return{
                loading: false,
                todos: [],
                error: action.payload
            }
        default: return state
    }
}   
export default todolistReducer