import React from "react";
import { BsEnvelopeOpenFill } from "@react-icons/all-files/bs/BsEnvelopeOpenFill";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";
import logoImageUrl from "../../img/logo_pie.png";

export const Footer = () => {
    return (
    <div className="footer row ms-auto pt-1">
        <div className="col-2 mt-3">
          <a className="nav-brand" href="/">
            <img
              className="d-inline-block logo "
              src={logoImageUrl}
              alt="Logo_foot"
              width="170"
              height="170"
             />
          </a>
        </div> 
        <div className="col">    
            <div className="row mt-3 ms-5">
              <p className="d-inline ms-3"><BsEnvelopeOpenFill/> <a href="mailto:info@fuxionlogistics.cl"> info@fuxionlogistics.cl</a> </p>
              <p className="d-inline ms-3"><IoLogoWhatsapp/> <a href="https://wa.me/56946325818"> +569 46325818</a></p>
            </div>  
            <div className="row copyright mt-3"> 
                <p className="d-flex justify-content-end">© 2023 Fuxion logistics | by
                  <a className="ms-1" href="http://www.iitec.cl"> iitec</a>
                </p>
            </div>                  
        </div>
    </div>
  );
};