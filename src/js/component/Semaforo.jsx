import React, { useState } from "react";

const Semaforo = () => {
	const [SeleccionarColor, setSeleccionarColor] = useState("amarillo");

	return (
		<>
			<div className="palito"></div>
			<div className="contenedor-semaforo">
				<div
					onClick={() => setSeleccionarColor("rojo")}
					className={
						"boton rojo" +
						(SeleccionarColor === "rojo" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSeleccionarColor("amarillo")}
					className={
						"boton amarillo" +
						(SeleccionarColor === "amarillo" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSeleccionarColor("verde")}
					className={
						"boton verde" +
						(SeleccionarColor === "verde" ? " glow" : "")
					}></div>
			</div>
		</>
	);
};

export default Semaforo;
