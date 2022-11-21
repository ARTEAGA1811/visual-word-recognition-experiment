import React from "react";
import '../styles/Resultados.css';

const Resultados = (resultadoPalabras) => {
    console.log("Resultados");
    resultadoPalabras = resultadoPalabras["resultadoPalabras"]
    const realesAtinadas = resultadoPalabras.palabrasRealesAtinadas;
    const realesTotales = resultadoPalabras.palabrasRealesTotales;
    const NOrealesAtinadas = resultadoPalabras.palabrasNORealesAtinadas;
    const NOrealesTotales = resultadoPalabras.palabrasNORealesTotales;

    const calcularPorcentaje = (atinadas, totales) => {
        let miPorcentaje = (atinadas / totales) * 100;
        //Se redondea a 2 decimales
        miPorcentaje = Math.round(miPorcentaje * 100) / 100;
        return miPorcentaje;
    }
    return (
        <div className="contenedor_resultado">
            <h1 className="titulo">Fin del experimento</h1>
            <div className="resultados">
                <div className="resultados_atinadas">
                    <p>
                        <b>Palabras Reales:</b> {realesAtinadas} / {realesTotales} ({calcularPorcentaje(realesAtinadas, realesTotales)}%)
                    </p>
                    <p>
                        <b>Palabras No Reales:</b> {NOrealesAtinadas} / {NOrealesTotales} ({calcularPorcentaje(NOrealesAtinadas, NOrealesTotales)}%)
                    </p>
                </div>
                <div className="resultados_tiempo">
                    <b>Tiempo promedio:</b> {resultadoPalabras.tiempoPromedio} ms
                </div>

            </div>

        </div>
    );
};

export { Resultados };
