const botonguardar=document.querySelector(".guardar")
const container1=document.querySelector(".container1")
const container2=document.querySelector(".container2")


botonguardar.addEventListener("click",(e)=>{
    e.preventDefault()

    configApi()

    container1.style.display = "none"
    container2.style.display= "grid"
})