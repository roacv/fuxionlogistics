import React from "react";
import { BsTelephoneInbound,BsEnvelopeAt,BsWhatsapp } from "react-icons/bs";
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
        <h1 className="text-start" style={{marginTop:"-55rem"}}>Estamos para ayudarte!!</h1>
        <p className="mt-5 ">Te damos asesoría completa y personalizada para que realices tus importaciones o exportaciones a o deasde Chile con seguridad y eficiencia, no dudes en contactarnos, tenemos la mejor disposición para ayudarte.</p>
        <a href="#Contacto" className="btn btn-primary btn-lg">Contáctanos</a>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1 className="text-start" style={{marginTop:"-50rem"}}>Second slide label</h1>
        <p className="mt-5">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={img3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="text-start" style={{marginTop:"-55rem"}}>Third slide label</h1>
        <p className="mt-5">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={img4} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="text-start" style={{marginTop:"-35rem"}}>Cuarto Slide</h1>
        <p className="mt-5">Some representative placeholder content for the third slide.</p>
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