const botonguardar = document.querySelector(".guardar")
const container1 = document.querySelector(".container1")
const container2 = document.querySelector(".container2")


botonguardar.addEventListener("click", async(e) => {
    // e.preventDefault()

    // configApi()
    const arr = await createArray() // hace peticion al servidor y crea un arreglo con las posiciones de los drones
    const grillaInput = document.querySelector('.grilla1').value //captura varaible tamaño de grilla
    const almuerzosInput = document.querySelector('.almuerzos1').value //captura varaible tamaño de grilla
    const dronesInput = document.querySelector('.drones1').value //captura varaible tamaño de grilla
    console.log(almuerzosInput);
    container1.style.display = "none" // Ayuda a desaparecer y
    container2.style.display = "grid" // aparecer las ventanas

    llenarBotones(dronesInput) //funcion recive cantidad de drones a mostrar
    llenarEntregas(almuerzosInput) //funcion recive cantidad de almuerzo de cada dron
    llenarPlano(grillaInput, arr) //funcion recibe el tamaño de la grilla y un arreglo 
})