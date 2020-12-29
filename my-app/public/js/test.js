const botonDescargar = document.getElementById('download')

botonDescargar.addEventListener('click', async() => {
    // console.log('Boton de descargar funciona')
    // const { data } = await axios({
    //     method: "GET",
    //     baseURL: "http://127.0.0.1:5000",
    //     url: "/reporte"
    // });
    // console.log(data);
    // var typedArray = data;

    // let blob = new Blob([data.data], { type: 'application/zip' }),
    //     url = window.URL.createObjectURL(blob)
    url = "http://127.0.0.1:5000/reporte"
    window.open(url);

    // var blob = new Blob([typedArray], { type: 'application/octet-binary' }); // pass a useful mime type here
    // var url = URL.createObjectURL(blob);

    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:multipart/x-zip,' + encodeURIComponent(url)); //+ encodeURIComponent(data) ;charset=utf-8
    // element.setAttribute('download', 'reporte.zip');

    // element.style.display = 'none';
    // document.body.appendChild(element);

    // element.click();

    // document.body.removeChild(element);
    // console.log(data)
})