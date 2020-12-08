const llenarEntregas = async(almuerzos) => {

    const tabla = document.querySelector(".entregas")
    tabla.innerHTML = ""

    const data = await createObject()
        // for (let z = 0; z < 20; z++) {
        //     if (z % 3 === 0) tabla.innerHTML += "<br>"
        //     tabla.innerHTML += "<B>Dron" + (z + 1) + "</B> " + almuerzos + "&nbsp&nbsp&nbsp  "
        // }
    data.forEach(element => {
        if (Element.id % 3 === 0) tabla.innerHTML += "<br>"
        tabla.innerHTML += "<B>Dron" + element.id + "</B> " + almuerzos + "&nbsp&nbsp&nbsp  "
    });
}