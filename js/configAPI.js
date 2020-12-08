
// submit formulario con la información de la configuración de la aplicación
const configApi = () => { 
    
    const grillaInput = document.querySelector('#grilla')
    const puntoInicialInput = document.querySelector('#puntoInicial')
    const orientacionInput = document.querySelector('#orientacion')
    const capacidadInput = document.querySelector('#capacidad')

    event.preventDefault();

    console.log('button submitted')
    // fetch con post method para enviar la info al servidor
    fetch('http://127.0.0.1:5000/drones/config', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // definir la info que se va a enviar al servidor
        body: JSON.stringify({
            grilla: grillaInput.value, // tamaño de la grilla
            puntoInicial: puntoInicialInput.value, // punto de partida
            orientacion: orientacionInput.value, // orientacion inicial
            capacidad: capacidadInput.value // capacidad de entrega de los drones
        }),
    }).then(data => data.json())
    .then((result) => {
        console.log('Success', result.resultado)
    }).catch(error => {
        console.log('ERROR', error)
    })
}