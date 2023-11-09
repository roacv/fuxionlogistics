import React from "react";

export const Formulario = () => {
    return (
      <form className="row g-3 d-flex justify-content-center">
        <div className="col-8">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombres</span>
          <input type="text" className="form-control" placeholder="Nombre y Apellido" aria-label="name" aria-describedby="basic-addon1" required/>
        </div>      
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">Email</span>
          <input type="email" className="form-control" placeholder="nombre@ejemplo.com" aria-label="Username" aria-describedby="basic-addon2" required/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Teléfono</span>
          <input type="text" className="form-control" placeholder="Número de teléfono" aria-label="name" aria-describedby="basic-addon1" required/>
        </div>   
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon4">Mensaje</span>
          <textarea className="form-control" aria-label="Mensaje" required></textarea>
        </div>    
        <div className="col-12 text-center">
          <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
        </div>
    </form>
  );
};