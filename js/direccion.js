const llenarBotones = (drones, posicionInicial) => {
    console.log(drones);
    const tabla = document.querySelector(".cantidadDrones")
    tabla.innerHTML = ""
    for (let x = 1; x <= drones; x++) {

        tabla.innerHTML += `<b>D${x}</b> <input type="text" class="dron${x} dr"><button class="btn${x} btn" onclick="pulsar(this.value)" value="${x}">selecionar</button> posicion <input type=text class="posicionD${x}" value=${posicionInicial} disabled="true" style="width: 2em;"> <br> `

    }

}

//Cambiar valor de ubicación del dron en el panel dirección drones
const cambiarValorUbicacion = (dronId, ubicacion) => {
    const ubicacionInput = document.querySelector(`.posicionD${dronId}`)
    ubicacionInput.value = ubicacion
}

const pulsar = (id) => {
    const palabra = document.querySelector(`.dron${id}`).value
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
                console.log("todo bien puede proceder");
                // Palabra aceptada aqui va el codigo
                apiEnviar(id, cadena) // Activar cuando se haya creado la API para actualizar la ubicación de los drones
            } else {
                if (aux.length !== result.length) {
                    let frase = ""
                    result.forEach(cas => { frase += cas })
                    if (confirm("Algunos caracteres estan mal, quieres enviar la siguiente peticion? \n  =>" + frase)) {

                        // Palabra aceptada, llamar API para enviar dron
                        apiEnviar(id, frase) // Activar cuando se haya creado la API para actualizar la ubicación de los drones

                        console.log("ha aceptado");
                    }

                }
            }


        }
    }
    document.querySelector(`.dron${id}`).value = ""
    console.log("boton que primio tiene el id = " + id)
}

// Llamado de API con la dirección a la que se envía el dron
const apiEnviar= async (droneId, direccion) => {
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
        .then(async (result) => {
        if(result==='salio de la grilla'){
                alert(`Dron: ${droneId} salió de la grilla.`)
            }else{
                console.log('Nueva ubicacion actualizada')
                let capacidad = result.capacidad-1
                if(capacidad<0){
                 alert("Ha excedido la cantidad de entregas.")
                }else{
                // Hacer petición con la información actualizada de la base de datos
                const nuevaUbicacion = await createArray()
                //Hacer llamado a formula para renderizar la nueva ubicacion
                llenarPlano(tamanoGrilla, nuevaUbicacion)
                mensajes(result.id,result.historial,capacidad)
                llenarEntregas(capacidad)
                
                // Cambiar valor de ubicacion del panel dirección drones
                cambiarValorUbicacion(result.id, result.posicionInicial)
            }
        }  
        }).catch(error => {
            console.log('ERROR', error)
        })

    
}