const triangulo = {
    "nombre" : "triangulo",
    "base": 5,
    "altura": 6
}

const cuadrado = {
    "nombre" : "cuadrado",
    "base": 5,
    "altura": 5
}

const rectangulo = {
    "nombre" : "rectangulo",
    "base": 5,
    "altura": 10
}

const areaPoligono = (poligono) => {
    const { nombre, base, altura } = poligono

if (nombre === "triangulo") {
    const areaTriangulo = (base * altura)/2
    console.log(`Es un ${nombre} y su área es de ${areaTriangulo}`)
}else if (nombre === "cuadrado") {
    const areaCuadrado = base * altura
    console.log(`Es un ${nombre} y su área es de ${areaCuadrado}`)
}else if (nombre === "rectangulo") {
    const areaRectangulo = base * altura
    console.log(`Es un ${nombre} y su área es ${areaRectangulo}`)
} else {
    console.log('Esto no es un cuadrado ni rectangulo menos triangulo')
}
}

areaPoligono(rectangulo)