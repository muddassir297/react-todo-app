import { combineReducers } from 'redux'
import todolistReducer from './todolist/todolistReducer'

const rootReducer = combineReducers({
    todo: todolistReducer
})

export default rootReducer