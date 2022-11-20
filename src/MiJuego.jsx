import React from "react";
import './MiJuego.css';
import { palabrasReales, palabrasNOReales } from "./datos";

const MiJuego = () => {

    const [estadoActual, setEstadoActual] = React.useState("inicio");
    const [palabraActual, setPalabraActual] = React.useState("+");

    //Creo un array con todas las palabras en orden aleatorio    
    const palabras = [...palabrasReales, ...palabrasNOReales].sort(() => Math.random() - 0.5);
    console.log(palabras);
    let indicePalabraActual = 0;

    const cambiarEstado = (nuevoEstado) => {
        setEstadoActual(nuevoEstado);
    }

    const cambiarPalabra = (event) => {
        console.log(event.key);
        if (event.key === "z" || event.key === "m") {
            if (indicePalabraActual < palabras.length) {
                setPalabraActual(palabras[indicePalabraActual]);
                indicePalabraActual++;
            } else {
                setPalabraActual("Fin del experimento");
            }
        }
    }


    
    return (
        <div className="juego_container_padre" on={cambiarPalabra}>
            <div className="juego_container">
                <div className="juego">
                    {estadoActual === "inicio" && (
                        <button className="mi_boton"
                        onClick={() => cambiarEstado("juego")}>
                            Iniciar
                        </button>
                    )}
                    {estadoActual === "juego" && (
                        <div className="palabra_signo">
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
