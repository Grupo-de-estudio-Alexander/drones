const llenarBotones = (drones) => {
    console.log(drones);
    const tabla = document.querySelector(".cantidadDrones")
    tabla.innerHTML = ""
    for (let x = 1; x <= drones; x++) {

        tabla.innerHTML += `<b>D${x}</b> <input type="text" class="dron${x} dr"><button class="btn${x} btn" onclick="pulsar(this.value)" value="${x}">selecionar</button> posicion <input type=text class="posicionD${x}" value=0,0 disabled="true" style="width: 2em;"> <br> `

    }

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
            } else {
                if (aux.length !== result.length) {
                    let frase = ""
                    result.forEach(cas => { frase += cas })
                    if (confirm("Algunos caracteres estan mal, quieres enviar la siguiente peticion? \n  =>" + frase)) {

                        // Palabra aceptada, llamar API para enviar dron
                        apiEnviar(id, cadena)

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
const apiEnviar= (droneId, direccion) => {
    const endPoint = '' //URL a usar para llamar la aPI

    //Lamado a API
    const nuevaUbicacion = await fetch(endPoint, {
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
        .then((result) => {
            console.log('Nueva ubicacion', result.nuevaUbicacion) //nueva ubicacion del drone
            return result.nuevaUbicacion //API debe retornar nueva ubicacion y el droneId
        }).catch(error => {
            console.log('ERROR', error)
        })

    //Hacer llamado a formula para renderizar la nueva ubicacion
}