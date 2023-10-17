import React from "react";
import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Navbar } from "./navbar";
import { Header } from "./header";
import { Footer } from "./footer";
//include images into your bundle
import banner1 from "../../img/bg1.jpg";
import { Nosotros } from "./nosotros";

//create your first component
const Home = () => {
	return (
		<div>
			<ScrollToTop/>
			<Header/>
			<Navbar/>	
			<div className="body">	
				<div className="section section1" id="Inicio">
					<img src={banner1} />
				</div>
				<div className="section section2 mt-5" id="Nosotros">
					{/* <h2 className="text-center mt-5">NOSOTROS</h2> */}
					<Nosotros/>
				</div>		
				<div className="section section3" id="Servicios">
					<h2 className="text-center mt-5">Servicios</h2>
				</div>
				<div className="section section4" id="Contacto">
					<h2 className="text-center mt-5">Formulario de contacto</h2>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
