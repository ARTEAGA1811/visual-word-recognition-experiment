import React from "react";
import '../styles/MiJuego.css';
import { palabrasReales, palabrasNOReales, palabrasFrecuentes, resultadoPalabras, resultadoTiempo } from "../datos"; 
import { Resultados } from "./Resultados";

let indicePalabraActual = 0;
let palabras = [...palabrasReales, ...palabrasNOReales];
palabras.sort(() => Math.random() - 0.5);



let renderInicial = true;
let tiempoPalabra = null;
let tiempoTimeout = null;
let tiempoSimbolo = null;
//Timeout: T
//Palabra: P
//Simbolo: S
let turnoPalabra = 'T';
let miPalabraAMostrar;
let interrupcionRespuesta = false;


//Para medir el tiempo
let tiempoInicio;
let tiempoFin;

const MiJuego = () => {

    const [estadoActual, setEstadoActual] = React.useState("inicio");
    //const [estadoActual, setEstadoActual] = React.useState("fin");
    const [palabraActual, setPalabraActual] = React.useState("");
    const [porcentaje, setPorcentaje] = React.useState(0);

    const padreJuego = React.useRef();
    const htmlPalabra = React.useRef();
    const progreso_barra = React.useRef();

    //console.log(palabras[0], palabras[1], palabras[2]);
    //console.log(indicePalabraActual)


    const reiniciarJuego = () => {
        indicePalabraActual = 0;
        renderInicial = true;
        tiempoPalabra = null;
        turnoPalabra = 'T';
        miPalabraAMostrar = undefined;
        interrupcionRespuesta = false;
        tiempoInicio = undefined;
        tiempoFin = undefined;

        palabras.sort(() => Math.random() - 0.5);

        resultadoPalabras.palabrasRealesAtinadas = 0;
        resultadoPalabras.palabrasNORealesAtinadas = 0;
        resultadoPalabras.palabrasFrecuentesAtinadas = 0;
        resultadoPalabras.palabrasNoFrecuentesAtinadas = 0;

        resultadoTiempo.tiemposPalabrasReales = [];
        resultadoTiempo.tiemposPalabrasNOReales = [];
        resultadoTiempo.tiemposPalabrasFrecuentes = [];
        resultadoTiempo.tiemposPalabrasNoFrecuentes = [];


        setEstadoActual("inicio");
        setPalabraActual("");
        setPorcentaje(0);
    }


    const calcularPorcentaje = () =>{
        //Cambio la barra de porcentaje
        // console.log("Calculando porcentaje");
        // console.log("indice", indicePalabraActual);
        // console.log("palabras totales", palabras.length);
        let porcentaje = ((indicePalabraActual) / palabras.length) * 100;
        //console.log(porcentaje);
        return porcentaje;
    }

    const cambiarEstado = (nuevoEstado) => {
        setEstadoActual(nuevoEstado);
        //if nuevoEstado === "juego", set focus on the div "juego_container_padre"
        if (nuevoEstado === "juego") {
            padreJuego.current.focus();
        }
    }

    const ejecutarTimeout = (tiempo) => {
        let promesa, timeID;
        promesa = new Promise((resolve, reject) => {
            timeID = setTimeout(() => {
                resolve(timeID);
            }, tiempo);
        });

        return {
            promesa: promesa,
            cancelar: () => { clearTimeout(timeID); }
        }
    }

    const palabraInvisible = () => {
        htmlPalabra.current.style.visibility = "hidden";
    }
    const palabraVisible = () => {
        htmlPalabra.current.style.visibility = "visible";
    }

    const mostrarPalabra = async () => {
        // console.log("Indice: " + indicePalabraActual);
        //debugger;
        //console.log("mostrar palabra");
        if (indicePalabraActual >= palabras.length) {
            console.log("Fin del juego");
            htmlPalabra.current.style.visibility = "visible";
            // const misResultadosFinales = ""
            // setPalabraActual("Fin del experimento");
            cambiarEstado("fin");
            return;
        }

        //Si estuvo en Timeout, debe mostrar el simbolo
        if (turnoPalabra === 'T') {
            // console.log("Ahora est?? en timeout")
            // console.log("Indice: " + indicePalabraActual);
            htmlPalabra.current.style.visibility = "visible";
            miPalabraAMostrar = '+';
            turnoPalabra = 'S';
            tiempoTimeout = ejecutarTimeout(1000);
            await tiempoTimeout.promesa;


            setPalabraActual(miPalabraAMostrar);

            //Actualizo la barrade progreso
            setPorcentaje(calcularPorcentaje());
        
        } else if (turnoPalabra === 'S') {
            //console.log("Ahora est?? en simbolo")
            //console.log("Palabra: " + palabras[indicePalabraActual]);

            
            //Si estuvo en Simbolo, debe mostrar la palabra
            htmlPalabra.current.style.visibility = "visible";
            tiempoSimbolo = ejecutarTimeout(300);
            await tiempoSimbolo.promesa;

            miPalabraAMostrar = palabras[indicePalabraActual];
            turnoPalabra = 'P';
            setPalabraActual(miPalabraAMostrar);
        
        } else if (turnoPalabra === 'P') {
            //console.log("Ahora est?? en palabra")
            interrupcionRespuesta = false;

            //Empezamos a medir el tiempo.
            tiempoInicio = new Date();
            console.log("Registro tiempo inicio: " + tiempoInicio);

            //Hacemos invisible la palabra
            setTimeout(() => {
                palabraInvisible();
            }, 300);

            tiempoPalabra = ejecutarTimeout(4000);
            await tiempoPalabra.promesa;


            //console.log("Voy a ingresar a la interrupci??n: ", interrupcionRespuesta);
            //console.log("Voy a ingresar a la interrupci??n con el indice: ", indicePalabraActual);
            if (!interrupcionRespuesta) {
                console.log("No hubo interrupci??n");
                //Si estuvo en Palabra, debe mostrar el timeout
                miPalabraAMostrar = 'Tiempo Agotado';
                turnoPalabra = 'T';
                
                indicePalabraActual++;
                
                setPalabraActual(miPalabraAMostrar);
            }


            //Hacemos visible la palabra
            palabraVisible();
        }
        //return miPalabraAMostrar;
    }

    const analizarRespuesta = async (event) => {
        

        if (estadoActual !== "juego") {
            return;
        }

        //Para reiniciar el juego, se presiona la tecla "q" o "Q"
        if (event.key === "q" || event.key === "Q") {
            console.log("Reiniciando el juego");
            interrupcionRespuesta = true;
            tiempoPalabra.cancelar();
            tiempoSimbolo.cancelar();
            tiempoTimeout.cancelar();
            reiniciarJuego();
            return;
        }


        if (turnoPalabra !== 'P') {
            return;
        }



        if (event.key === "z" || event.key === "Z" || event.key === "M" || event.key === "m") {
            
            //SE corta el contador de tiempo
            tiempoFin = new Date();
            let tiempoTranscurrido = tiempoFin - tiempoInicio;


            //Se elimina el tiempo de la palabra y se contin??a con la siguiente, se empieza con el s??mbolo.
            //console.log(event.key);
            //console.log("Inicia la interrupci??n");
            //console.log("Inicia la interrupci??n con el indice: ", indicePalabraActual);
            interrupcionRespuesta = true;
            tiempoPalabra.cancelar();
            
            
            //Aqu?? ingrsamos la l??gica que registra si la palabra es real o no
            if (palabrasReales.includes(palabras[indicePalabraActual])) {
                //console.log("Es real");
                if (event.key === "m" || event.key === "M") {
                    //console.log("Acert??");
                    if (palabrasFrecuentes.includes(palabras[indicePalabraActual])) {
                        resultadoPalabras["palabrasFrecuentesAtinadas"]++;
                        resultadoTiempo["tiemposPalabrasFrecuentes"].push(tiempoTranscurrido);
                    } else {
                        resultadoPalabras["palabrasNoFrecuentesAtinadas"]++;
                        resultadoTiempo["tiemposPalabrasNoFrecuentes"].push(tiempoTranscurrido);
                    }

                    resultadoPalabras["palabrasRealesAtinadas"]++;
                    //Se guarda el tiempo de respuesta
                    resultadoTiempo["tiemposPalabrasReales"].push(tiempoTranscurrido);
                    // console.log("Tiempo de respuesta: ", tiempoFin - tiempoInicio);
                    // console.log("Tiempos de palabras reales: ", resultadoTiempo["tiemposPalabrasReales"]);
                    // console.log("Total", resultadoTiempo)
                    console.log("Registro tiempo fin: " + tiempoFin);
                    console.log("Registro: " + tiempoFin + " Registro: "+ tiempoInicio);
                    console.log("Tiempo registrado: " + tiempoTranscurrido);
                }
            } else {
                //console.log("No es real");
                if (event.key === "z" || event.key === "Z") {
                    //console.log("Acert??");
                    resultadoPalabras["palabrasNORealesAtinadas"]++;

                    //Se guarda el tiempo de respuesta
                    resultadoTiempo["tiemposPalabrasNOReales"].push(tiempoTranscurrido);
                    // console.log("Tiempo de respuesta: ", tiempoFin - tiempoInicio);
                    // console.log("Tiempos de palabras NO reales: ", resultadoTiempo["tiemposPalabrasNOReales"]);
                    // console.log("Total", resultadoTiempo)
                    console.log("Registro tiempo fin: " + tiempoFin);
                    console.log("Registro: " + tiempoFin + " Registro: "+ tiempoInicio);
                    console.log("Tiempo registrado: " + tiempoTranscurrido);
                }
            }

            //console.log(resultadoPalabras);
            
            turnoPalabra = 'S';
            miPalabraAMostrar = '+';
            indicePalabraActual++;
            
            //Actualizo la barrade progreso
            setPorcentaje(calcularPorcentaje());
            
            await ejecutarTimeout(1000).promesa;

            setPalabraActual(miPalabraAMostrar);
        }
    }

    React.useEffect(() => {
        if (renderInicial) {
            renderInicial = false;
            return;
        }


        //Cambio la barra de porcentaje
        let porcentaje = (indicePalabraActual / palabras.length) * 100;
        progreso_barra.current.style.width = porcentaje + "%";
        //console.log("useEffect", palabraActual);
        mostrarPalabra();
        //console.log("useEffect", palabraActual);
    }, [palabraActual, estadoActual]);
    
    return (
        <div className="juego_container_padre" onKeyDown={analizarRespuesta} tabIndex="0" ref={padreJuego}>
            <div className="juego_container">
                <div className="juego">
                    {estadoActual === "inicio" && (
                        <button className="mi_boton"
                        onClick={() => cambiarEstado("juego")}>
                            Iniciar
                        </button>
                    )}
                    {estadoActual === "juego" && (
                        <div className="palabra_signo" ref={htmlPalabra}>
                            {palabraActual}
                        </div>
                    )}
                    {estadoActual === "fin" && (<Resultados resultadoPalabras={resultadoPalabras} resultadoTiempo={resultadoTiempo} reiniciarJuego={reiniciarJuego}/>)} 
                </div>
            </div>
            <div className="progreso">
                <div className="progreso_barra" ref={progreso_barra} style={{width: porcentaje+"%"}}></div>
            </div>
        </div>
    );
};

export { MiJuego };
