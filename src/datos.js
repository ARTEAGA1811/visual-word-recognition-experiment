



const palabrasReales = [
    "casa",
    "academia",
    "camisa",
    "libro",
    "lápiz",
    "mesa",
    "luna",
    "puerta",
    "mochila",
    "brazo",
    "arrebol",
    "bohemia", 
    "isagoge",
    "regodeo",
    "xerofítico",
    "alquimia",
    "acmé",
    "mamporrero",
    "inefable",
    "acecinar",
];

const palabrasNOReales = [
    "domote",
    "gérminis",
    "abrantar",
    "plufímero",
    "mapra",
    "ficcionita" ,
    "flumpo",
    "robotomía",
    "estrón",
    "seprento",
    "járguelin",
    "coquemallismo",
    "chatar",
    "guetracción",
    "trampo",
    "actrantar",
    "gadusa",
    "pandía",
    "enepeísmo",
    "rumiente",
];

const palabrasFrecuentes = [
    "casa",
    "academia",
    "camisa",
    "libro",
    "lápiz",
    "mesa",
    "luna",
    "puerta",
    "mochila",
    "brazo",
]

const palabrasNoFrecuentes = [
    "arrebol",
    "bohemia", 
    "isagoge",
    "regodeo",
    "xerofítico",
    "alquimia",
    "acmé",
    "mamporrero",
    "inefable",
    "acecinar",
]

const resultadoPalabras = {
    palabrasRealesAtinadas: 0,
    palabrasRealesTotales: palabrasReales.length,
    palabrasNORealesAtinadas: 0,
    palabrasNORealesTotales: palabrasNOReales.length,
    palabrasFrecuentesAtinadas: 0,
    palabrasFrecuentesTotales: palabrasFrecuentes.length,
    palabrasNoFrecuentesAtinadas: 0,
    palabrasNoFrecuentesTotales: palabrasNoFrecuentes.length,
}

const resultadoTiempo = {
    tiemposPalabrasReales: [],
    tiemposPalabrasNOReales: [],
    tiemposPalabrasFrecuentes: [],
    tiemposPalabrasNoFrecuentes: [],
}

export { palabrasReales, palabrasNOReales, palabrasFrecuentes,palabrasNoFrecuentes, resultadoPalabras, resultadoTiempo };