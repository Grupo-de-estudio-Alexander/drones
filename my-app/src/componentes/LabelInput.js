import React from 'react'
import './styles/LabelInput.css'

export default class LabelInput extends React.Component{
    constructor(props){
    super(props);
    this.state={

    }
    };
   render(){
     return( 
     <div className='label'>
         <h2 className='tituloTexto'>{this.props.titulo}</h2>
         <input className='input' onChange={this.props.onChange} type={this.props.type} name={this.props.name}></input>
         <p className='testo'>{this.props.testo}</p>
     </div>
     )
   }
}