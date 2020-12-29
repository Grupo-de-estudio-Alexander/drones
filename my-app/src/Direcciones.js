import './Direcciones.css';
import React from 'react';
const axios = require('axios');

class Direcciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drones: 4,
            posicionInicial: "0,0",
            direccion: {
                '1': '',
                '2': '',
                '3': '',
            },
            droneId: null,
      }

      this.handleChange = this.handleChange.bind(this);
        this.handleEnviar = this.handleEnviar.bind(this);
    }

    

    componentDidMount = async() => {
        const response = await axios.post('http://127.0.0.1:5000/drones/config');
        console.log('axios response react',response.data);
        this.setState({
            drones: parseInt(response.data.parametros.cantidadDrones),
            posicionInicial: response.data.parametros.posicionInicial,
        })
    }

    pulsar(id, palabra) {
        let cadena = palabra.toUpperCase()

        if (palabra.length === 0) {
            alert("Por Favor ingrese valores validos")
        } else {
            const aux = cadena.split("")
            const result = aux.filter(letra => (letra === "A" || letra === "D" || letra === "I"));
            if (result.length === 0) {
                alert("Por Favor ingrese valores validos, Solo se permiten A, I, y D.")
            } else {
                if (aux.length === result.length) {
                    console.log("todo bien puede proceder", cadena);
                    // Palabra aceptada aqui va el codigo
                    //apiEnviar(id, cadena) // Activar cuando se haya creado la API para actualizar la ubicación de los drones
                } else {
                    if (aux.length !== result.length) {
                        let frase = ""
                        result.forEach(cas => { frase += cas })
                        //if (confirm("Algunos caracteres estan mal, quieres enviar la siguiente peticion? \n  =>" + frase)) {

                            // Palabra aceptada, llamar API para enviar dron
                            //apiEnviar(id, frase) // Activar cuando se haya creado la API para actualizar la ubicación de los drones

                            console.log("ha aceptado");
                        //}

                    }
                }


            }
        }
        document.querySelector(`.dron${id}`).value = ""
        document.getElementById('download').disabled = false;
        console.log("boton que primio tiene el id = " + id)
    }

    handleChange(event) {  
        console.log('Valor del diccionario de direccion',this.state.direccion[event.target.id])
        this.state.direccion[event.target.id] = event.target.value + this.state.direccion[event.target.id]
        this.state.droneId = event.target.id
    }

    handleEnviar(event) {
        event.preventDefault();
        console.log('datos a enviar', this.state)
        this.pulsar(this.state.droneId, this.state.direccion[this.state.droneId])
    }

    render() {
        let enviarButtons = Array(this.state.drones).fill(null);
        enviarButtons = enviarButtons.map((val, index) => {
            const x = index + 1;
            return (
                <div key={x}>
                    <b>D{x}</b> 
                    <form onSubmit={this.handleEnviar}>
                        <input type="text" className="dron{x} dr" value={this.state.direccion[x]} onChange={this.handleChange} id={`${x}`}/>
                        <button className="btn{x} btn" type="submit" value="Submit"  >selecionar</button> 
                    </form>
                    posicion 
                    <input type="text" className="posicionD{x}" value={this.state.posicionInicial} disabled="true" style={{width: '2em'}}/> 
                    <br></br>
                </div>
                
            );
        })
        return (
            <div>
                {enviarButtons}
            </div>
        );
    }
  }

  export default Direcciones;