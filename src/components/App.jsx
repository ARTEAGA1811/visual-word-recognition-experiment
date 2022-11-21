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
							<li>En este experimento observarás una serie de ensayos experimentales.</li>
							<li>En cada ensayo verás un signo <b>+</b> en el medio del cuadro azul, y poco después se mostrará un estímulo que es una <b><i>palabra real</i></b> o una <b><i>palabra no real</i></b>.</li>
							<li>La barra de progreso en la parte inferior de este cuadro mostrará qué tan avanzado está el experimento.</li>
							<li>Para cada estímulo, presiona la tecla <b><i>Z</i></b> para indicar que crees que es una <b><i>palabra no real</i></b> y la tecla <b><i>M</i></b> para indicar que es una <b><i>palabra real</i></b>.</li>
							<li>Puedes presionar <b><i>Q</i></b> en cualquier momento para salir.</li>
						</ul>						
					</p>
				</div>

				<MiJuego />
			</main>
        </div>
    );
}

export default App;
