import React from "react";
import img1 from "../../img/bg1.jpg";
import img2 from "../../img/bg2.jpg";
import img3 from "../../img/bg3.jpg";
import img4 from "../../img/bg4.jpg";

export const Banner = () => {
    return (
<div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2500">
      <img src={img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="" style={{marginTop:"-50rem"}}>Conectando el Mundo: Su Socio de Confianza en Flete Internacional</h1>
        <p className="mt-5 ">En Fuxion Logistics, nos enorgullece ser su solución integral en servicios de flete internacional. Desde cualquier rincón del mundo hasta su puerta, ofrecemos una gama completa de servicios de importación y exportación por vía marítima, aérea y terrestre. Simplificamos el proceso, asegurando que sus mercancías lleguen a su destino de manera segura y oportuna, sin importar la distancia.
            Confíe en nosotros para hacer realidad sus ambiciones globales. Su carga, nuestra responsabilidad. Con Fuxion Logistics, el mundo está a su alcance.</p>
        <a href="#Contacto" className="btn btn-primary btn-lg">Contáctanos</a>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1 className="text-start" style={{marginTop:"-45rem",backgroundColor:"rgba(0,0,0,0.7)",marginRight:"81%"}}>Flete Marítimo</h1>
          <p className="mt-5 text-start" style={{backgroundColor:"rgba(0,0,0,0.7)"}}>Si tienes cargas voluminosas o envíos internacionales, nuestro flete marítimo es la solución. Trabajamos con las principales navieras para asegurarnos de que tus productos lleguen de manera segura y eficiente a través del mar.</p>
          <a href="#Contacto" className="btn btn-primary btn-lg mt-5">Contáctanos</a>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={img3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="text-start" style={{marginTop:"-45rem",color:"black"}}>Flete Aéreo</h1>
        <p className="mt-5 text-start" style={{color:"black"}}>Somos expertos en envío por aire. Envía tus productos a nivel nacional o internacional de manera rápida y confiable. Nuestra amplia red de aerolíneas y socios logísticos garantiza que tu carga llegue a su destino a tiempo.</p>
        <a href="#Contacto" className="btn btn-primary btn-lg mt-5">Contáctanos</a>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={img4} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="text-start" style={{marginTop:"-30rem"}}>Flete Terrestre Internacional</h1>
        <p className="mt-5 text-start">Ofrecemos soluciones terrestres para envíos internacionales. Ya sea por carretera o ferrocarril, nos encargamos de que tu carga llegue a su destino. Nos ocupamos de los trámites aduaneros y la documentación para que no tengas que preocuparte por nada.</p>
        <a href="#Contacto" className="btn btn-primary btn-lg mt-5">Contáctanos</a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
};