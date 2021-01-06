import React from 'react'
import './styles/Drones.css'
import Direcciones from '../componentes/Direcciones';
import Instrucciones from '../componentes/Instrucciones';
import Grilla from '../componentes/Grilla';
import EntregasPendientes from '../componentes/EntregasPendientes';
import Mensajes from '../componentes/Mensajes';
import Archivos from '../componentes/Archivos';

export default class Drones extends React.Component{
    constructor(props){
    super(props);
    this.state={}
    };
   render(){
     return( 
     <div className='contenedor'>
         <Instrucciones/>
         <div className='formato direcion'>
         <Direcciones name="Manuel" drones="4" posicionInicial="0,0"/>
         </div>
         <Grilla/>
         <EntregasPendientes/>
         <Mensajes/>
         <Archivos/>
     </div>)
   }
}