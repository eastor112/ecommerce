import React from 'react';

const Card = () => {
  return (
  <div className="card text-center">
    <div className="card-body" style={{width:"310px", border:'solid 1px #bbb', borderRadius:'10px'}}>
      <h5 className="card-title">Plan Básico S/. 49.99</h5>
      <h6 className="card-subtitle mb-2 text-left" style={{textAlign:"left", marginTop:"25px"}} >Caracteristicas</h6>
      <ul style={{textAlign:"left", listStyle:"none", marginTop:"25px", marginLeft:'0', paddingLeft:'0px'}}>
        <li>50 productos publicados</li>
        <li>5 productos con alta visibilidad por semana</li>
        <li>Pasarela de pago integrada</li>
        <li>Panel de administración</li>
        <li>Balance de ventas</li>
        <li>Soporte 24/7</li>
      </ul>
      <p style={{textAlign:"left"}}><a href="!#">saber mas</a></p>
      <a href="!#" className="btn btn-success px-5">Seleccionar</a>
    </div>
  </div>
  );
}

export default Card;