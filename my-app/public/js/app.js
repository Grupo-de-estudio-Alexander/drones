const botonguardar = document.querySelector(".guardar")
const container1 = document.querySelector(".container1")
const container2 = document.querySelector(".container2")

let tamanoGrilla //declarar como variable global por lo que se usa en la otras formulas
let paramIniciales;

botonguardar.addEventListener("click", async(e) => {
    // e.preventDefault()

    //Eliminar los reportes anteriores
    axios({
        method: "GET",
        baseURL: "http://127.0.0.1:5000",
        url: "/drones/file"
    });


    paramIniciales = await configApi()
    console.log('app.js',paramIniciales)


    //Eliminar drones actuales
    await deleteDrones()
    // Crear drones
    for (let i=1; i <= paramIniciales.cantidadDrones; i++) {
        await createDron(paramIniciales, i)
    }

    tamanoGrilla = paramIniciales.tamanoGrilla
    const arr = await createArray() // hace peticion al servidor y crea un arreglo con las posiciones de los drones
    container1.style.display = "none" // Ayuda a desaparecer y
    container2.style.display = "grid" // aparecer las ventanas

    llenarBotones(paramIniciales.cantidadDrones, paramIniciales.posicionInicial) //funcion recive cantidad de drones a mostrar
    llenarEntregas(paramIniciales.capacidadDrones) //funcion recive cantidad de almuerzo de cada dron
    llenarPlano(tamanoGrilla, arr) //funcion recibe el tamaño de la grilla y un arreglo 
})