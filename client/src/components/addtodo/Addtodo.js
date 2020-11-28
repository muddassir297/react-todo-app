import React, { Component } from 'react'
import './Addtodo.css'
class Addtodo extends Component {
  render() {
   return (
       <div className="row pad-container">
           <div className="col-12 pad">
            <form className="form-inline" data-test="formAddComponent">
                <div className="col-11 form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Add Todo" data-test="textBox" />
                </div>
                <div className="col-1 form-group">
                    <button type="submit" className="btn btn-primary mb-2" data-test="addButton" >Add</button>
                </div>
            </form>   
           </div>                   
       </div>
    )
  }    
}

export default Addtodo;