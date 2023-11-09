import React from "react";
// import { BsEnvelopeAt,BsWhatsapp } from "react-icons/bs";
import { BsEnvelopeOpenFill } from "@react-icons/all-files/bs/BsEnvelopeOpenFill";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";

export const Header = () => {
    return (
    <div className="header col ms-auto pt-1">
        <p className="d-inline ms-4"><BsEnvelopeOpenFill/> <a href="mailto:info@fuxionlogistics.cl"> info@fuxionlogistics.cl</a> </p>
        <p className="d-inline ms-4"><IoLogoWhatsapp/> <a href="https://wa.me/56946325818"> +569 46325818</a></p>
    </div>
  );
};