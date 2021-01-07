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
      drones: [],
      grilla:20,
    }
    this.updateDrones = this.updateDrones.bind(this)
    };

    async updateDrones() {
      const { data } = await axios({
          method: "GET",
          baseURL: "http://127.0.0.1:5000",
          url: "/drones"
      });

      const array = data.map(dato => {
        let aux = dato.posicionInicial
        aux.push(dato.id)
        return aux
      });  
      console.log('datos desde updateDrones', this.state, array)
      this.setState({drones: array});
  }

    componentDidMount() {
      this.updateDrones();
    };
  
   render(){
     return( 
     <div className='contenedor'>
         <Instrucciones/>
         <div className='formato direcion'>
         <Direcciones name="Manuel" drones="4" posicionInicial="0,0" updateDrones={this.updateDrones}/>
         </div>
         <Grilla datos={this.state.drones} tamaño={this.state.grilla}/>
         <EntregasPendientes/>
         <Mensajes/>
         <Archivos/>
     </div>)
   }
}