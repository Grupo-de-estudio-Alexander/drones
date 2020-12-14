const botonEnviarInput = document.querySelector("#uploadFile")

botonEnviarInput.addEventListener("submit", (e) => {
    e.preventDefault()

    // archivos seleccionados
    const selectedFiles = document.getElementById('uploadInput').files;

    // hacer FormData con los archvivos seleccionados a API
    const fd = new FormData();
    // agregar en el formdata cada uno de los archivos a enviar
    for (let i=0; i<selectedFiles.length; i++) {
      const tempFile = selectedFiles[i]
      // console.log('file to send: ', tempFile)
      fd.append('file', tempFile, tempFile.name)
    }
    
    // lammado a api con archivos de input
    fetch('http://127.0.0.1:5000/input', {
      method: 'post',
      body: fd 
    });
})