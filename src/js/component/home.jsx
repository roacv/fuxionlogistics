import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { Navbar } from "./navbar";
import { Header } from "./header";
import { Footer } from "./footer";
//include images into your bundle
import { Nosotros } from "./nosotros";
import { Banner } from "./banner";
import { Mision } from "./mision";
import { Vision } from "./vision";
import { Servicios } from "./servicios";
import { Formulario } from "./formulario";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<ScrollToTop/>
			<Header/>
			<Navbar/>	
			<div className="body">	
				<div className="section section1 d-flex justify-content-center" id="Inicio">
					<Banner/>
					{/* <img className="img-fluid" src={banner1} /> */}
				</div>
				<div className="section section2 d-flex flex-column justify-content-center" id="Nosotros">
					{/* <h2 className="text-center mt-5">NOSOTROS</h2> */}
					<Nosotros/>
					<div className="mt-5 d-flex justify-content-center">
						<Mision/>
						<Vision/>
					</div>
				</div>		
				<div className="section section3" id="Servicios">
					<h2 className="text-center pt-3 mb-5">Servicios</h2>
					<Servicios/>
				</div>
				<div className="section section4 pb-5 mb-5" id="Contacto">
					<h2 className="text-center mt-1">Formulario de contacto</h2>
					<h4 className="text-center mb-3"> Nos pondremos en contacto lo más pronto posible, detalla lo que requieres para entregarte el mejor servicio</h4>
					<Formulario/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
