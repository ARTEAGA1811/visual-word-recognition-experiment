const palabrasReales = [
    'casa',
    'perro',
    'gato',
    'computadora',
];

const palabrasNOReales = [
    'asac',
    'orrep',
    'otag',
    'arotamutpic',
];

const resultadoPalabras = {
    palabrasRealesAtinadas: 0,
    palabrasRealesTotales: palabrasReales.length,
    palabrasNORealesAtinadas: 0,
    palabrasNORealesTotales: palabrasNOReales.length,
}

const resultadoTiempo = {
    tiemposPalabrasREales: [],
    tiemposPalabrasNOReales: [],
}

export { palabrasReales, palabrasNOReales, resultadoPalabras, resultadoTiempo };