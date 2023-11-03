import React from "react";
import { BsTelephoneInbound,BsEnvelopeAt,BsWhatsapp } from "react-icons/bs";
import { Route } from "react-router";

export const Footer = () => {
    return (
    <div className="footer col ms-auto pt-1">
        <div className="row">
            <div className="col">
            <p className="d-inline ms-5"><BsEnvelopeAt/> <a href="mailto:info@fuxionlogistics.cl"> info@fuxionlogistics.cl</a> </p>
            <p className="d-inline ms-4 "><BsWhatsapp/> <a href="https://wa.me/56946325818"> +569 46325818</a></p>
          </div>
        </div>
        <div className="row mt-3"> 
          <div className="col copyright">
            <p className="d-flex justify-content-end">© 2023 Fuxion logistics | by
            <a className="ms-1" href="http://www.iitec.cl"> iitec</a>
            </p>
          </div>
        </div>
    </div>
  );
};