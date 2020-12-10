const llenarEntregas = async(almuerzos) => {

    const tabla = document.querySelector(".entregas")
    tabla.innerHTML = ""

    const data = await createObject()
    data.forEach(element => {
        if (Element.id % 3 === 0) tabla.innerHTML += "<br>"
        tabla.innerHTML += "<B>Dron" + element.id + "</B> " + element.capacidad + "&nbsp&nbsp&nbsp  "
    });



}

const mensajes = async(id,ubicacion,capacidad) => {

    const tabla = document.querySelector(".mensaje")
    //tabla.innerHTML = ""
     console.log(capacidad)
     let elemento =  document.createElement("div");
     elemento.innerHTML = "<B>Dron" + id + ": </B>  Entrega en ubicación  [" + ubicacion + "] ,entregas pendientes:  "+capacidad+"<br>"
    
     tabla.appendChild(elemento);
   
}