import React from "react";
import { FaUsers } from "react-icons/fa6";

export const Nosotros = () => {
    return (
    <div className="card w-50 m-auto">
      <p className="iconservicio text-center"><FaUsers/></p>
      <h2 className="card-header card-header-nosotros text-center">NOSOTROS</h2>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">En Fuxion Logistics Spa, nos enorgullece ser un líder en la industria de la logística y el transporte Internacional. Fundada en 2019, nuestra empresa ha crecido a lo largo de los años, respaldada por una dedicación constante a la excelencia y una pasión por la logística Internacional efectiva. Contamos con profesionales con más de diez años de experiencia.
Garantizamos profesionalismo y rapidez en toda la operativa, resguardando los intereses de nuestros clientes. Conocemos los mercados mundiales, lo que nos permite asesorar con información en tiempo real.</p>
      </div>
    </div>
  );
};