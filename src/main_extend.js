function guardarInformacion() {
    // Obtener los valores del formulario
    let alumnos = document.getElementById('#alumnos').value;
    let grupos = document.getElementById('grupos').value;

    // Validar que los campos no estén vacíos
    if (alumnos.trim() === '' || grupos.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear una nueva fila en la tabla
    let table = document.querySelector("#table");
    let fila = table.insertRow();
    let celdaalumnos = fila.insertCell(0);
    let celdagrupos = fila.insertCell(1);

    // Agregar los valores del formulario a la fila
    celdaalumnos.innerHTML = alumnos;
    celdagrupos.innerHTML = grupos;

    // Limpiar los campos del formulario
    document.getElementById('#alumnos').value = '';
    document.getElementById('#grupos').value = '';
  }