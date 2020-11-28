import axios from 'axios'
import { FETCH_TODOLIST_REQUEST, FETCH_TODOLIST_SUCCESS, FETCH_TODOLIST_FAILURE } from './todolistTypes';

export const fetchTodolistRequest = ()=> {
    return{
        type: FETCH_TODOLIST_REQUEST
    }
}

export const fetchTodolistSuccess = todos => {
    return{
        type: FETCH_TODOLIST_SUCCESS,
        payload: todos
    }
}

export const fetchTodolistFailure = error => {
    return{
        type: FETCH_TODOLIST_FAILURE,
        payload: error
    }
}

// export const setUrl=()=> 'http://localhost:8080/api/tasks'

export const fetchTodolist = ()=> {
    return(dispatch) =>{
        dispatch(fetchTodolistRequest)
        axios.get( 'http://localhost:8080/api/tasks' )
            .then(response =>{
               // response.data
               const todos = response.data //.map(user => user.id)
            //    console.log(todos)
               dispatch(fetchTodolistSuccess(todos))
            })
            .catch(error=>{
                const errorMsg= error.message
                dispatch(fetchTodolistFailure(errorMsg))
            })
    }
}

