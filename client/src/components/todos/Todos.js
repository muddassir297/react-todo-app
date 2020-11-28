import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './../../redux/store'
import { connect } from 'react-redux';
import { fetchTodolist } from '../../redux';

import './Todos.css'

class Todos extends Component {
    componentDidMount() { this.props.fetchTodolist();};
    
  render() {
    if (this.props.todosData.loading){return <div>Loading...</div>}
    if (this.props.todosData.error){return <div>{this.props.todosData.error}</div>}
    const data = Object.values(this.props.todosData.todos);
    return data ? (   
        <Provider  store={store}>
             <div className="row pad-container">
            <div className="col-12">
                    <ul className="list-group" data-test="ulList"> 
                    {data.map((todo) => 
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                        <div className="col-1">
                            <input data-test="checkBox" value="y" type="checkbox"/>     
                        </div>
                        <div className="col-9"> 
                            <p className="h5 float-left">{todo.text}</p>
                        </div>
                        <div className="col-2">
                            <span className="pad-btn float-right">
                                <button type="button" className="btn btn-danger" data-test="buttonDelete">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </button>
                            </span> 
                            <span className="pad-btn float-right">
                                <button type="button" className="btn btn-primary" data-test="buttonEdit">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </li>
                    )}  
                </ul>
            </div>
        </div>
        </Provider>
       
    ): null;
  }    
}

const mapStateToProps = state =>{
    return {
        todosData: state.todo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTodolist:() => dispatch(fetchTodolist())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);