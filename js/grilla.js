const llenarPlano = async(dimension, array) => {
    const tabla = document.querySelector(".cuadricula")
    tabla.innerHTML = ""
    for (let x = parseInt(dimension, 10); x >= 0; x--) {
        let tr = document.createElement("tr")

        for (let y = 0; y <= parseInt(dimension, 10); y++) {

            let td = document.createElement("td")
            td.setAttribute("class", "m")
            td.textContent = " "


            const arreglo = comparaIf(x, y, array)
            if (arreglo[0]) {

                td.setAttribute("class", "d" + arreglo[1])
                td.textContent = "D" + arreglo[1]

            } else {
                td.setAttribute("class", "m")
                td.textContent = " "
            }

            tabla.appendChild(td);

        }

        tabla.appendChild(tr);
    }
}
const comparaIf = (x, y, dron) => {
    let ubicacion = [false, 0]
    dron.forEach(element => {

        if (x === element[0][0] && y === element[0][1]) {
            ubicacion[0] = true
            ubicacion[1] = element[1]
        }

    });
    return ubicacion

}

const createArray = async() => {

    const data = await createObject();
    let array = []
    data.forEach(dron => {
        let aux = []
        aux.push(dron.posicionInicial)
        aux.push(dron.id)
        array.push(aux)
    })
    return array
}

const createObject = async() => {
    const { data } = await axios({
        method: "GET",
        baseURL: "http://127.0.0.1:5000",
        url: "/drones"
    });
    return data
}