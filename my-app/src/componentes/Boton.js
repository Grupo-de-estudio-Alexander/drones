import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Boton.css'

export default class Boton extends React.Component{
    constructor(props){
    super(props);
    this.state={}
    };
   render(){
     return( 
     <div>
         <Link to={this.props.onTo}><button onClick={this.props.onClick} className='boton'>{this.props.valor}</button></Link>
     </div>
     )
   }
}