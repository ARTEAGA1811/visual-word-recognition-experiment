const palabrasReales = [
    'casa',
    'perro',
];

const palabrasNOReales = [
    'asac',
    'orrep',
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