import React from "react";
import '../styles/MiJuego.css';
import { palabrasReales, palabrasNOReales , resultadoPalabras, resultadoTiempo } from "../datos"; 

let indicePalabraActual = 0;
const palabras = [...palabrasReales, ...palabrasNOReales];
palabras.sort(() => Math.random() - 0.5);


//Timeout: T
//Palabra: P
//Simbolo: S
let turnoPalabra = 'T';
let renderInicial = true;

const MiJuego = () => {

    const [estadoActual, setEstadoActual] = React.useState("inicio");
    const [palabraActual, setPalabraActual] = React.useState("");

    const padreJuego = React.useRef();
    const htmlPalabra = React.useRef();

    console.log(palabras);
    //console.log(indicePalabraActual)

    const cambiarEstado = (nuevoEstado) => {
        setEstadoActual(nuevoEstado);
        //if nuevoEstado === "juego", set focus on the div "juego_container_padre"
        if (nuevoEstado === "juego") {
            padreJuego.current.focus();
        }
    }

    const cambiarPalabra = (event) => {
        console.log(event.key);

        if (estadoActual !== "juego") {
            return;
        }
        if (event.key === "z" || event.key === "Z" || event.key === "M" || event.key === "m") {
            if (indicePalabraActual < palabras.length) {
                setPalabraActual(palabras[indicePalabraActual]);
                indicePalabraActual++;
                //setIndicePalabraActual(indicePalabraActual + 1);
            } else {
                setPalabraActual("Fin del experimento");
            }
        }
        console.log("holis")
    }

    const ejecutarTimeout = (tiempo, nuevaPalabra) => {
        return new Promise((resolve, reject) => {
            const timeID = setTimeout(() => {
                resolve(timeID);
            }, tiempo);
        });
    }

    const palabraInvisible = () => {
        htmlPalabra.current.style.visibility = "hidden";
    }
    const palabraVisible = () => {
        htmlPalabra.current.style.visibility = "visible";
    }

    const mostrarPalabra = async () => {
        //debugger;
        console.log("mostrar palabra");
        if (indicePalabraActual >= palabras.length) {
            setPalabraActual("Fin del experimento");
            return;
        }

        let miPalabraAMostrar;
        //Si estuvo en Timeout, debe mostrar el simbolo
        if (turnoPalabra === 'T') {
            console.log("Ahora está en timeout")
            miPalabraAMostrar = '+';
            turnoPalabra = 'S';
            const timeID = await ejecutarTimeout(1000, miPalabraAMostrar);
            console.log("auxiliar")
            setPalabraActual(miPalabraAMostrar);
        } else if (turnoPalabra === 'S') {
            console.log("Ahora está en simbolo")
            //Si estuvo en Simbolo, debe mostrar la palabra
            miPalabraAMostrar = palabras[indicePalabraActual];
            turnoPalabra = 'P';
            indicePalabraActual++;
            const timeID = await ejecutarTimeout(600, miPalabraAMostrar);
            setPalabraActual(miPalabraAMostrar);
        } else if (turnoPalabra === 'P') {
            console.log("Ahora está en palabra")

            //Si estuvo en Palabra, debe mostrar el timeout
            miPalabraAMostrar = 'Tiempo Agotado';
            turnoPalabra = 'T';

            //Hacemos invisible la palabra
            setTimeout(() => {
                palabraInvisible();
            }, 300);

            const timeID = await ejecutarTimeout(3000, miPalabraAMostrar);
            setPalabraActual(miPalabraAMostrar);
            
            //Hacemos visible la palabra
            palabraVisible();
        }
        //return miPalabraAMostrar;
    }

    React.useEffect(() => {
        if (renderInicial) {
            renderInicial = false;
            return;
        }
        //console.log("useEffect", palabraActual);
        mostrarPalabra();
        //console.log("useEffect", palabraActual);
    }, [palabraActual, estadoActual]);
    
    return (
        <div className="juego_container_padre" onKeyDown={cambiarPalabra} tabIndex="0" ref={padreJuego}>
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
                    
                </div>
            </div>
            <div className="progreso">
                <div className="progreso_barra"></div>
            </div>
        </div>
    );
};

export { MiJuego };
