const botonguardar = document.querySelector(".guardar")
const container1 = document.querySelector(".container1")
const container2 = document.querySelector(".container2")
const array = [
    [0, 0],
    [1, 1]
]

botonguardar.addEventListener("click", (e) => {
    // e.preventDefault()

    // configApi()
    const grillaInput = document.querySelector('.grilla1').value
    console.log(grillaInput);
    container1.style.display = "none"
    container2.style.display = "grid"
    llenarPlano(grillaInput, array)
})