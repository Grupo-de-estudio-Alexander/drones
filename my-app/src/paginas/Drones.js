import React from 'react'
import './styles/Drones.css'
import Direcciones from '../componentes/Direcciones';
import Instrucciones from '../componentes/Instrucciones';
import Grilla from '../componentes/Grilla';
import EntregasPendientes from '../componentes/EntregasPendientes';
import Mensajes from '../componentes/Mensajes';
import Archivos from '../componentes/Archivos';
const axios = require('axios');

export default class Drones extends React.Component{
    constructor(props){
    super(props);
    this.state={
      datosGrilla: null,
      grilla:20,
    }
    };
    componentDidMount = async() =>{
      const { data } = await axios({
        method: "GET",
        baseURL: "http://127.0.0.1:5000",
        url: "/drones"
    });
    await this.setState((state, props)=>({datosGrilla:data}))
    }
  
   render(){
     return( 
     <div className='contenedor'>
         <Instrucciones/>
         <div className='formato direcion'>
         <Direcciones name="Manuel" drones="4" posicionInicial="0,0"/>
         </div>
         <Grilla datos={this.state.datosGrilla} tamaño={this.state.grilla}/>
         <EntregasPendientes/>
         <Mensajes/>
         <Archivos/>
     </div>)
   }
}