import React from "react";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { GiCargoShip, GiPapers } from "react-icons/gi";
import { FaTruckPlane  } from "react-icons/fa6";
import { MdAssuredWorkload } from "react-icons/md";

export const Servicios = () => {
    return (
<div className="row w-75 row-cols-1 row-cols-md-2 g-4 d-flex ms-auto me-auto">
  <div className="col">
    <div className="card  h-100 baseBlock">
      <p className="iconservicio text-center"><BsFillAirplaneEnginesFill/></p>
      <div className="card-body">
        <h5 className="card-title">Flete aéreo</h5>
        <p className="card-text">Somos especialistas en servicios de flete aéreo de alta calidad que garantizan entregas rápidas y eficientes a nivel nacional e internacional. Nuestra amplia red de asociados y aerolíneas nos permite ofrecer soluciones de envío flexibles y asequibles para tus necesidades de carga aérea. Ya sea que necesites transportar productos perecederos, carga general, carga de alto valor, mercancías peligrosas o cualquier otro tipo de carga, nuestro equipo experimentado se encarga de cada detalle. Desde la planificación logística hasta el seguimiento en tiempo real, estamos comprometidos a brindarte un servicio de primera clase.</p>
      </div>
      <div className="card-footer">
      

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 baseBlock">
      <p className="iconservicio text-center"><GiCargoShip/></p>
      <div className="card-body">
        <h5 className="card-title">Flete marítimo </h5>
        <p className="card-text">Nuestros servicios de flete marítimo son la solución ideal para cargas de gran volumen y proyectos de logística internacional. Colaboramos con las principales líneas navieras y operadores de terminales para garantizar entregas seguras y eficientes. Ofrecemos opciones de carga completa y carga consolidada (FCL y LCL) para adaptarnos a tus necesidades. Nuestro equipo de expertos se encarga de la documentación, el despacho aduanero y la coordinación de toda la cadena de suministro marítima, asegurando un flujo constante de tu carga a nivel global..</p>
      </div>
      <div className="card-footer">
      

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 baseBlock">
      <p className="iconservicio text-center"><FaTruckPlane/></p>
      <div className="card-body">
        <h5 className="card-title">Flete Terrestre Internacional</h5>
        <p className="card-text">Nuestros servicios de flete terrestre internacional te conectan con destinos en todo el mundo. Ya sea que requieras transporte por carreteras, ofrecemos soluciones de carga terrestre confiables y eficientes. Nos ocupamos de la gestión de rutas, aduanas y trámites fronterizos, garantizando que tu carga llegue a su destino de manera oportuna y sin complicaciones. Nuestra red de socios estratégicos asegura que tu carga esté en buenas manos desde el punto de origen hasta el destino final.</p>
      </div>
      <div className="card-footer">
      

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 baseBlock">
      <p className="iconservicio text-center"><GiPapers/></p>
      <div className="card-body">
        <h5 className="card-title">Agenciamiento de Aduana</h5>
        <p className="card-text">Nuestros servicios de agenciamiento de aduanas están diseñados para simplificar y acelerar el proceso de despacho aduanero, asegurando que tus mercancías cumplan con todas las regulaciones y requisitos locales e internacionales. Nuestro equipo de expertos en aduanas está altamente capacitado para gestionar la documentación, los aranceles y los trámites aduaneros, garantizando que tu carga se desplace sin problemas a través de las fronteras. Nos mantenemos actualizados con las últimas regulaciones aduaneras para minimizar cualquier riesgo de demoras o costos adicionales.</p>
      </div>
      <div className="card-footer">
      

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 baseBlock">
      <p className="iconservicio text-center"><MdAssuredWorkload/></p>
      <div className="card-body">
        <h5 className="card-title">Seguro de Carga</h5>
        <p className="card-text">En Fuxion Logistics Spa, entendemos la importancia de proteger tus envíos. Nuestro servicio de seguro de carga es una garantía para tus productos en cada etapa del embarque.</p>
      </div>
      <div className="card-footer">
      

      </div>
    </div>
  </div>
</div>
  );
};