import React, {Component} from 'react'
import './App.css';
import Plan from './Plan.js'  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class App extends Component{
    state={
        items:[],
        text:""
    }
    handleChange=e=>{
        this.setState({text:e.target.value})
    }
    handleAdd=e=>{
        if(this.state.text!==""){
            const items=[...this.state.items , this.state.text]
            this.setState({items:items,text:""});
        }

    }

    render(){
        return(
            <div className="container-fluid my-5">
            <div className="row">
            <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center">Todays plan</h1>
            <div className="row">
            <div className="col-9">
            <input type="text" className='form-control' placeholder='write your plan' value={this.state.text} onChange={this.handleChange} />
            </div>
            <div className="col-2">
            <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>Add
            </button>
            
            </div>
            <div className="container-fluid">
            <ul className="list-unstyled row m-5">
            {

                this.state.items.map((value,i)=>{
                    return <Plan key={i} ID={i} value={value}/>
                })
            }
            
            
            </ul>
            
            </div>
            
            
            </div>
            
            
            </div>
            
            
            </div>
            
            </div>
            
            
            
        )
    }
}
export default App;
