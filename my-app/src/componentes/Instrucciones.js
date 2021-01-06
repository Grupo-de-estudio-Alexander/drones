import React from 'react'
import './styles/Instrucciones.css'

export default class Instrucciones extends React.Component{
    constructor(props){
    super(props);
    this.state={}
    };
   render(){
     return( 
     <div className='formato instrucciones'>
         <h2>INSTRUCIONES</h2>
         <h5>A: Avanzar<br/>
D: Giro a la Derecha<br/>
I: Giro a la Izquierda</h5>
     </div>
     )
   }
}