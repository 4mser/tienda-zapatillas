var colorSeleccionado = 'blanco';
var tallaSeleccionada = '';

function seleccionarColor(color) {
    colorSeleccionado = color;
    var imagenZapatilla = document.getElementById('imagen-zapatilla');
    imagenZapatilla.src = 'imagenes/' + color + '.png';

    var colores = document.querySelectorAll('.opcion-color');
    for (var i = 0; i < colores.length; i++) {
        colores[i].classList.remove('selected');
    }
    document.querySelector('.color-' + colorSeleccionado).classList.add('selected');
}

function seleccionarTalla(talla) {
    tallaSeleccionada = talla;
    var botonesTalla = document.querySelectorAll('.btn-outline-dark');
    for (var i = 0; i < botonesTalla.length; i++) {
        botonesTalla[i].classList.remove('active');
    }
    document.querySelector('button[data-talla="' + talla + '"]').classList.add('active');
}

function cambiarMetodoEntrega() {
    var datosEntrega = document.getElementById('datos-entrega');
    var metodoEntrega = document.getElementById('entrega').value;
    if (metodoEntrega === 'domicilio') {
        datosEntrega.style.display = 'block';
    } else {
        datosEntrega.style.display = 'none';
    }
}

function calcularPrecio() {
    var entrega = document.getElementById('entrega').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;

    var precioBase = 20000;
    var recargoColor = 0;

    if (colorSeleccionado === 'negro') {
        if (tallaSeleccionada === '22-25') {
            recargoColor = 9000;
        } else if (tallaSeleccionada === '25.5-27') {
            recargoColor = 13000;
        } else if (tallaSeleccionada === '27.5-29.5') {
            recargoColor = 17000;
        }
    } else if (colorSeleccionado === 'rojo') {
        if (tallaSeleccionada === '25.5-27') {
            recargoColor = 16000;
        } else if (tallaSeleccionada === '27.5-29.5') {
            recargoColor = 19000;
        }
    } else if (colorSeleccionado === 'blanco') {
        if (tallaSeleccionada === '25.5-27') {
            recargoColor = 4000;
        } else if (tallaSeleccionada === '27.5-29.5') {
            recargoColor = 6000;
        }
    }

    var recargoEntrega = 0;
    if (entrega === 'domicilio') {
        recargoEntrega = 4000;
    }
    var precioFinal = precioBase + recargoColor + recargoEntrega;

    var resumen = {
        color: colorSeleccionado,
        talla: tallaSeleccionada,
        precioBase: precioBase,
        recargoColor: recargoColor,
        recargoEntrega: recargoEntrega,
        total: precioFinal,
        direccion: direccion,
        telefono: telefono,
        entrega: entrega
    };

    sessionStorage.setItem('resumenCompra', JSON.stringify(resumen));
    window.location.href = 'resumen.html';
}
