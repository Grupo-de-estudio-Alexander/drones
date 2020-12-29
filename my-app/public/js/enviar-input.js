const botonEnviarInput = document.querySelector("#uploadFile")
document.getElementById('enviarInput').disabled = true;
document.getElementById('download').disabled = true;
botonEnviarInput.addEventListener("submit", async(e) => {
    e.preventDefault()

    // archivos seleccionados
    const selectedFiles = document.getElementById('uploadInput').files;

    // hacer FormData con los archvivos seleccionados a API
    const fd = new FormData();
    // agregar en el formdata cada uno de los archivos a enviar
    for (let i = 0; i < selectedFiles.length; i++) {
        const tempFile = selectedFiles[i]
            // console.log('file to send: ', tempFile)
        fd.append('file', tempFile, tempFile.name)
    }

    // lammado a api con archivos de input
    const paramIniciales = await configApi()


    fetch('http://127.0.0.1:5000/input', {
        method: 'post',
        body: fd
    }).then(async() => {
        const arr = await createArray()
        console.log('informacion de drones', arr)
        llenarPlano(paramIniciales.tamanoGrilla, arr)
    });
    document.getElementById('download').disabled = false;
})
document.getElementById('uploadInput').addEventListener("change", () => {
    if (document.getElementById('uploadInput').files.length) {
        console.log("boton disable");
        document.getElementById('enviarInput').disabled = false;
    }
})