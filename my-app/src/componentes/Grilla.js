import React from 'react'
import Plano from './Plano';

export default class Grilla extends React.Component{

    // componentDidUpdate() {
    //     this.setState({datosGrilla: this.props.datos})
    // }

    // convertirArray=()=>{
    //     let array = []
    //     if (this.props.datos){
    //         this.props.datos.forEach(dato => {
    //             let aux = dato.posicionInicial
    //             aux.push(dato.id)
    //             array.push(aux)
    //             aux=[]
    //         });  
    //         return array
    //     }else{
    //         return array
    //     }      
    // }
    render(){
        console.log('Esto está llegando a Grilla', this.props.datos);
        // let array = []
        // if (this.state.datos){
        //     this.state.datos.forEach(dato => {
        //         let aux = dato.posicionInicial
        //         aux.push(dato.id)
        //         array.push(aux)
        //         aux=[]
        //     });
        //     this.setState({drones: array});
        // }

        return( 
        <div className='formato grilla'>
            <h2>GRILLA</h2>
            {/* <Plano datos={this.convertirArray()}/> */}
            <Plano datosDrones={this.props.datos}/>
        </div>
        )
   }
}