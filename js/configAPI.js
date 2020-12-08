
// submit formulario con la información de la configuración de la aplicación
const configApi = async () => { 
    
    const grillaInput = document.querySelector('#grilla')
    const puntoInicialInput = document.querySelector('#puntoInicial')
    const orientacionInput = document.querySelector('#orientacion')
    const capacidadInput = document.querySelector('#capacidad')
    const dronesInput = document.querySelector('#drones') //captura la cantidad de drones

    const paramentrosIngresados = JSON.stringify({
        tamanoGrilla: grillaInput.value, // tamaño de la grilla
        posicionInicial: puntoInicialInput.value, // punto de partida
        orientacionInicial: orientacionInput.value, // orientacion inicial
        capacidadDrones: capacidadInput.value, // capacidad de entrega de los drones
        cantidadDrones: dronesInput.value, // Cantidad de drones
    })

    // llamado a api para modificar configuracion y devolver la configuracion actualizada
    const nuevaConfig = await fetch('http://127.0.0.1:5000/drones/config', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // definir la info que se va a enviar al servidor
        body: paramentrosIngresados,
        }).then(data => data.json())
        .then((result) => {
            console.log('Success', result.resultado)
            return result.parametros 
        }).catch(error => {
            console.log('ERROR', error)
        })

    console.log('button submitted')
    
    return nuevaConfig
}
