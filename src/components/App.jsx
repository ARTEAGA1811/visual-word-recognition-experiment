import "../styles/App.css";
import { MiJuego } from "./MiJuego";

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Visual World Recognition Experiment</h1>
            </header>
			<main className="main">
				<div className="instrucciones-contenedor">
					<h2>Instrucciones</h2>
					<p className="instrucciones-detalles">
						<ul>
							<li>Al iniciar el experimento, verás un signo + en el medio del cuadro azul, y en seguida se mostrará un estímulo que puede ser una <b>palabra real</b> o una <b>palabra no real.</b></li>
							<li>La barra de progreso en la parte inferior de este cuadro mostrará qué tan avanzado está el experimento.</li>
							<li>Al finalizar el experimento, podrás ver los resultados del experimento.</li>
							<li>Para cada estímulo, presiona la tecla <b>Z</b> para indicar si crees que es una <b>palabra no real</b> y la tecla <b>M</b> para indicar si crees que es una <b>palabra real</b>.</li>
							<li>Coloca tus dedos en la tecla <b>Z</b> y <b>M</b>.</li>
							<li>Haz clic en “<b>Iniciar</b>” para empezar el experimento.</li>
							<li>Puedes presionar <b>Q</b> en cualquier momento para salir o reiniciar el experimento.</li>
						</ul>
						<p className="instrucciones_glosario"><i className="instrucciones_glosario-palabra">*Palabra no real</i>: secuencia de letras o sonidos que no es aceptada como real y carece de significado. No existe, aunque parece real.</p>
					</p>
				</div>

				<MiJuego />
			</main>
			<footer className="footer">
				<p className="invisible">Viva Twice</p>
				<p className="nombre_creador">By: Art3</p>
			</footer>
        </div>
    );
}

export default App;
