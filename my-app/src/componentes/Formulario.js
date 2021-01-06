import React from 'react'
import Boton from './Boton';
import LabelInput from './LabelInput';
import './styles/Formulario.css'

export default class Formulario extends React.Component{
    constructor(props){
    super(props);
    this.state={
        grilla:null,
        drones:null,
        ptoInicial: null,
        almuerzos: null,
        orientacion:null,
    }
    };
    capturarValor =(event)=>{
        this.setState({
                [event.target.name] : event.target.value,
            })
    }
    datos=()=>{
        console.log(this.state);
    }
    verificar=()=>{
        if( (this.state.grilla) && (this.state.drones)&&(this.state.ptoInicial)&&(this.state.almuerzos)&&(this.state.orientacion)){
            return '/drones/';
        }
        return ''
    }
   render(){
     return( 
     <div className='formulario-home'>
         <h2 className='tituloCon'>CONFIGURACIÓN</h2>
         <LabelInput onChange={this.capturarValor} name='grilla' type='Number' testo='Escribir un número entero como tamaño de la grilla cuadrada' titulo='Tamaño de Grilla (Unidades)'/>
         <LabelInput onChange={this.capturarValor} name='drones' type='Number' testo='Escribir la cantidad de drones a manejar.' titulo='Cantidad de Drones'/>
         <LabelInput onChange={this.capturarValor} name='ptoInicial' type='text' testo='Escribir el punto incial de manera x,y donde x y y son números enteros.' titulo='Punto de partida'/>
         <LabelInput onChange={this.capturarValor} name='almuerzos' type='number' testo='Escribir el número de entregas máximas por dron.' titulo='Capacidad de entrega de los drones'/>
         <LabelInput onChange={this.capturarValor} name='orientacion' type='text' testo='Escribir la orientación inicial de los drones: NORTE, SUR, ORIENTE, OCCIDENTE.' titulo='Orientación de los drones'/>
        <Boton valor='Guardar'onTo={this.verificar} onClick={this.datos}></Boton>
     </div>
     )
   }
}