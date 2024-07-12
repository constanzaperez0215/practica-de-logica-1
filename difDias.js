function parsearFecha(fecha) {
    const [dia, mes, año] = fecha.split('/').map(Number);
    return new Date(año, mes - 1, dia); // JavaScript meses son 0-indexados
}

function validarFecha(fecha) {
    // Expresión regular para el formato dd/mm/aaaa
    // Valida que la cadena esté en el formato dd/mm/aaaa, asegurando que los días estén entre 01 y 31, y los meses entre 01 y 12.
    const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(fecha);
}

const diferencia = (fecha1, fecha2) => {

    if (!validarFecha(fecha1) || !validarFecha(fecha2)) {
        return 'por favor ingrese una fecha valida'
    } else {
    const dato1 = parsearFecha(fecha1)
    const dato2 = parsearFecha(fecha2)

    const diferenciaMilisegundos = Math.abs(dato1 - dato2)

        // Convertir la diferencia de milisegundos a días
    const diferenciaDias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);

    return `La diferencia de días es de ${diferenciaDias} días`
    }
}

const fecha1 = '11/07/2024'
const fecha2 = '18/07/2024'

console.log(diferencia(fecha1, fecha2))