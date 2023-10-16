import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<BrowserRouter>
			<Navbar/>
			<h1 className="text-center mt-5">Inicio con Banner</h1>
			<h1 className="text-center mt-5">Nosotros</h1>
			<h1 className="text-center mt-5">Servicios</h1>
			<h1 className="text-center mt-5">Formulario de contacto</h1>

			{/* <p>
				<img src={rigoImage} />
			</p> */}
			{/* <a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a> */}
			<p>
				by{" "}
				<a href="http://www.iitec.cl">iitec</a>
			</p>
			</BrowserRouter>
		</div>
	);
};

export default Home;
