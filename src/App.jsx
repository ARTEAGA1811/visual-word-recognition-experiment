import "./App.css";
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
						En este experimento observarás una serie de ensayos experimentales.
						<br />
						En cada ensayo verás un signo <b>+</b> en el medio del cuadro azul, y poco después se mostrará un estímulo que es una <i>palabra real</i> o una <i>palabra no real</i>.
						<br />
						La barra de progreso en la parte inferior de este cuadro mostrará qué tan avanzado está el experimento.
						<br />
						Para cada estímulo, presiona la tecla <b><i>Z</i></b> para indicar que crees que es una <i>palabra no real</i> y la tecla <b><i>M</i></b> para indicar que es una <i>palabra real</i>.
						<br />
						Puedes presionar <b><i>Q</i></b> en cualquier momento para salir.
					</p>
				</div>

				<MiJuego />
			</main>
        </div>
    );
}

export default App;
