import React from 'react'
import Direcciones from '../Direcciones';

export default class FormularioHome extends React.Component{
    constructor(props){
    super(props);
    this.state={}
    };
   render(){
     return( <div>
         <Direcciones name="Manuel" drones="4" posicionInicial="0,0"/>
     </div>)
   }
}