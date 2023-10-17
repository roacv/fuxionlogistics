import React from "react";
import { BsTelephoneInbound,BsEnvelopeAt,BsWhatsapp } from "react-icons/bs";

export const Header = () => {
    return (
    <div className="header col ms-auto pt-1">
        <p className="d-inline ms-4"><BsEnvelopeAt/> <a href="mailto:info@fuxionlogistics.cl"> info@fuxionlogistics.cl</a> </p>
        <p className="d-inline ms-4"><BsWhatsapp/> <a href="https://wa.me/56946325818"> +569 46325818</a></p>
    </div>
  );
};