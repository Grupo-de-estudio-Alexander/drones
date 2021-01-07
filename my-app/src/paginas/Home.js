import React from 'react'
import Formulario from '../componentes/Formulario';

export default class Drones extends React.Component{
    constructor(props){
    super(props);
    this.state={}
    };
   render(){
     return( 
     <div>
         <h1>Aqui van los drones</h1>
         <Formulario/>
     </div>
     )
   }
}