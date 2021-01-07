import './styles/Direcciones.css';
import React from 'react';
const axios = require('axios');

class EnviarButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            droneId : this.props.droneId,
            direccion : '',
            posicionInicial : this.props.posicionInicial,
        }

        this.evaluate = this.props.evaluate
        this.handleChange = this.handleChange.bind(this);
        this.handleEnviar = this.handleEnviar.bind(this);
    }

    handleChange(event) {  
        this.setState({direccion: event.target.value})
    }

    handleEnviar(event) {
        event.preventDefault();
        console.log('datos a enviar', this.state)
        this.evaluate(this.state.droneId, this.state.direccion)
        this.setState({direccion: ''})
    }

    render() {
        return (
            <div key={this.state.droneId}>
                <b>D{this.state.droneId}</b> 
                <form onSubmit={this.handleEnviar.bind(this)}>
                    <input type="text" className="dron{x} dr" value={this.state.direccion} onChange={this.handleChange} id={`${this.state.droneId}`}/>
                    <button className="btn{x} btn" type="submit" value="Submit"  >selecionar</button> 
                </form>
                posicion 
                <input type="text" className="posicionD{x}" value={this.state.posicionInicial} disabled="true" style={{width: '2em'}}/> 
                <br></br>
            </div>
            
        );
    }
}
class Direcciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drones: 4,
            posicionInicial: "0,0",
            direccion: '',
            droneId: null,
      }
      this.pulsar = this.pulsar.bind(this);
      this.apiEnviar = this.apiEnviar.bind(this);
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
                    this.apiEnviar(id, cadena) // Activar cuando se haya creado la API para actualizar la ubicación de los drones
                } else {
                    if (aux.length !== result.length) {
                        let frase = ""
                        result.forEach(cas => { frase += cas })
                        //if (confirm("Algunos caracteres estan mal, quieres enviar la siguiente peticion? \n  =>" + frase)) {

                            // Palabra aceptada, llamar API para enviar dron
                            this.apiEnviar(id, frase) // Activar cuando se haya creado la API para actualizar la ubicación de los drones

                            console.log("ha aceptado", frase);
                        //}

                    }
                }


            }
        }
        // document.querySelector(`.dron${id}`).value = ""
        // document.getElementById('download').disabled = false;
        console.log("boton que primio tiene el id = " + id)
    }

    // Llamado de API con la dirección a la que se envía el dron
    apiEnviar = async(droneId, direccion) => {
    const endPoint = 'http://127.0.0.1:5000/drones/ubicacion' //URL a usar para llamar la aPI

    //Lamado a API
    fetch(endPoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            // definir la info que se va a enviar al servidor
            body: JSON.stringify({
                "direccion": direccion,
                "droneId": droneId,
            }),
        }).then(data => data.json())
        .then(async(result) => {
            if (result === 'salio de la grilla') {
                alert(`Dron: ${droneId} salió de la grilla.`)
            } else {
                console.log('Nueva ubicacion actualizada')
                let capacidad = result.capacidad - 1
                if (capacidad < 0) {
                    alert("Ha excedido la cantidad de entregas.")
                } else {
                    console.log('La nueva ubicacion si se esta actualizando', this.state)
                    this.props.updateDrones();
                    // Hacer petición con la información actualizada de la base de datos
                    // const nuevaUbicacion = await createArray()
                        //Hacer llamado a formula para renderizar la nueva ubicacion
                    // llenarPlano(tamanoGrilla, nuevaUbicacion)
                    // mensajes(result.id, result.historial, capacidad)
                    // llenarEntregas(capacidad)

                    // Cambiar valor de ubicacion del panel dirección drones
                    // cambiarValorUbicacion(result.id, result.posicionInicial)
                }
            }
        }).catch(error => {
            console.log('ERROR', error)
        })
    }

    render() {
        let enviarButtons = Array(this.state.drones).fill(null);
        enviarButtons = enviarButtons.map((val, index) => {
            const inx = index + 1;
            return (
                <EnviarButton droneId={inx} posicionInicial={this.state.posicionInicial} evaluate={this.pulsar}/>   
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