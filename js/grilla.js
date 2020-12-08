const llenarPlano = (dimension, array) => {
    const tabla = document.querySelector(".cuadricula")
    tabla.innerHTML = ""

    for (let x = parseInt(dimension, 10); x >= 0; x--) {
        let tr = document.createElement("tr")

        for (let y = 0; y <= parseInt(dimension, 10); y++) {

            let td = document.createElement("td")
            td.setAttribute("class", "m")
            td.textContent = " "

            if (comparaIf(x, y, array)) {

                td.setAttribute("class", "d1")
                td.textContent = "D1"

            } else {
                td.setAttribute("class", "m")
                td.textContent = " "
                    //     if (x === parseInt(d2[0], 10) && y === parseInt(d2[0], 10)) {

                //         td.setAttribute("class", "d2")
                //         td.textContent = "D2" 
                //     } else {
                //         td.setAttribute("class", "m")
                //         td.textContent = "."
                //     }
            }

            tabla.appendChild(td);

        }

        tabla.appendChild(tr);
    }
}
const comparaIf = (x, y, dron) => {
    let ubicacion = false

    dron.forEach(element => {
        //console.log(element);
        if (x === element[0] && y === element[1]) ubicacion = true
    });
    return ubicacion

}
const createArray = () => {
    const { data } = await axios({
        method: "GET",
        baseURL: "localhost:5000",
        url: "/"
    });
    console.log(data)
}