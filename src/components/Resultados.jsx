import React from "react";
import '../styles/Resultados.css';

const Resultados = (props) => {
    console.log("Resultados");

    const resultadoPalabras = props.resultadoPalabras;
    const resultadoTiempo = props.resultadoTiempo;

    console.log(resultadoPalabras);
    console.log(resultadoTiempo);


    const realesAtinadas = resultadoPalabras.palabrasRealesAtinadas;
    const realesTotales = resultadoPalabras.palabrasRealesTotales;
    const NOrealesAtinadas = resultadoPalabras.palabrasNORealesAtinadas;
    const NOrealesTotales = resultadoPalabras.palabrasNORealesTotales;
    const frecuentesAtinadas = resultadoPalabras.palabrasFrecuentesAtinadas;
    const frecuentesTotales = resultadoPalabras.palabrasFrecuentesTotales;
    const NOfrecuentesAtinadas = resultadoPalabras.palabrasNoFrecuentesAtinadas;
    const NOfrecuentesTotales = resultadoPalabras.palabrasNoFrecuentesTotales;

    const calcularPorcentaje = (atinadas, totales) => {
        let miPorcentaje = (atinadas / totales) * 100;
        //Se redondea a 2 decimales
        miPorcentaje = Math.round(miPorcentaje * 100) / 100;
        return miPorcentaje;
    }

    const calcularPromedio = (arregloSegundos) => {
        if (arregloSegundos.length === 0) {
            return 0;
        }

        let suma = 0;
        for (let i = 0; i < arregloSegundos.length; i++) {
            suma += arregloSegundos[i];
        }
        let promedio = suma / arregloSegundos.length;
        //Se redondea a 2 decimales
        promedio = Math.round(promedio * 100) / 100;
        return promedio;
    }

    
    return (
        <div className="contenedor_resultado">
            <h1 className="titulo">Fin del experimento</h1>
            <div className="resultados">
                <div className="info resultados_reales">
                    <p>
                        <b>Palabras Reales:</b> {realesAtinadas} / {realesTotales} ({calcularPorcentaje(realesAtinadas, realesTotales)}%)
                    </p>
                    <p>Tiempo promedio: {calcularPromedio(resultadoTiempo.tiemposPalabrasReales)} ms</p>

                </div>
                <div className="info resultados_no_reales">
                    <p>
                        <b>Palabras No Reales:</b> {NOrealesAtinadas} / {NOrealesTotales} ({calcularPorcentaje(NOrealesAtinadas, NOrealesTotales)}%)
                    </p>
                    <p>Tiempo promedio: {calcularPromedio(resultadoTiempo.tiemposPalabrasNOReales)} ms</p>
                </div>
                <div className="info">
                    <p>
                        <b>Palabras Frecuentes:</b> {frecuentesAtinadas} / {frecuentesTotales} ({calcularPorcentaje(frecuentesAtinadas, frecuentesTotales)}%)
                    </p>
                    <p>Tiempo promedio: {calcularPromedio(resultadoTiempo.tiemposPalabrasFrecuentes)} ms</p>
                </div>
                <div className="info">
                    <p>
                        <b>Palabras No Frecuentes:</b> {NOfrecuentesAtinadas} / {NOfrecuentesTotales} ({calcularPorcentaje(NOfrecuentesAtinadas, NOfrecuentesTotales)}%)
                    </p>
                    <p>Tiempo promedio: {calcularPromedio(resultadoTiempo.tiemposPalabrasNoFrecuentes)} ms</p>
                </div>
            </div>
            
            <button className="mi_boton_resultado" onClick={props.reiniciarJuego}>Volver a jugar</button>

        </div>
    );
};

export { Resultados };
