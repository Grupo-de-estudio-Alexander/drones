import React from 'react'
import './styles/Plano.css'

export default class Plano extends React.Component{
    constructor(props){
    super(props);
    this.state={
        tamaño: 19,
        tamañoCuadro: 0,
        tamañoPlano: 600,
    }
    };
    // DividiendoPlano=()=>{
    //     let num = 600/this.state.tamaño
    //     console.log(num);
    //     // this.setState((state, props)=>({
    //     //     tamañoCuadro:num
    //     // }))
    //     return  num+'px '+num+'px'
    // }
    posicionDronX=(a)=>{
        a+=1
        console.log(this.state.tamañoCuadro);
       let x = (a*this.state.tamañoCuadro)-(this.state.tamañoCuadro/4)
       x = (this.state.tamañoPlano-x)+""
       return x
    }
    posicionDronY=(a)=>{
        let Y = ((a*this.state.tamañoCuadro)+(this.state.tamañoCuadro/4))+""
       return Y
    }
    async componentDidMount(){
        await this.setState( (state, props) =>({
             tamañoCuadro: state.tamañoPlano/(state.tamaño+1)
        }))
    }
    render(){
     return( 
     <div className='plano' style={{height:this.state.tamañoPlano+'px',width:this.state.tamañoPlano+'px',backgroundSize:(this.state.tamañoPlano/(1+this.state.tamaño))+'px '+(this.state.tamañoPlano/(1+this.state.tamaño))+'px'}}>
            {/* <div className='drone1' style={{left:this.posicionDronY(5)+'px',top:this.posicionDronX(19)+'px'}}>D1</div> */}
            {this.props.datos.map((dato)=>{
                return (
                <div key={dato[2]} className='drone2' style={{left:this.posicionDronY(dato[0])+'px',top:this.posicionDronX(dato[1])+'px'}}>D{dato[2]}</div>
                )
        })}
     </div>
     )
   }
}
