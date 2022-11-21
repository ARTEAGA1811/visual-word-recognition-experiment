



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

const resultadoPalabras = {
    palabrasRealesAtinadas: 0,
    palabrasRealesTotales: palabrasReales.length,
    palabrasNORealesAtinadas: 0,
    palabrasNORealesTotales: palabrasNOReales.length,
}

const resultadoTiempo = {
    tiemposPalabrasReales: [],
    tiemposPalabrasNOReales: [],
}

export { palabrasReales, palabrasNOReales, resultadoPalabras, resultadoTiempo };