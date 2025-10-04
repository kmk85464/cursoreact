import React from 'react';
import Detalle from './Detalle';
export function Listado({ vuelos = [] }) {
  return (
    <div>
      <h1>Listado de Vuelos</h1>
      {Array.isArray(vuelos) && vuelos.length > 0 ? (
        vuelos.map((destino, index) => (
          <div key={index}>
            <h2>{destino.destination}</h2>
            {Array.isArray(destino.flights) && (
              <ul>
                <button className='button' onClick={Detalle()}>Seleccionar</button>
                {destino.flights.map((vuelo, i) => (
                  <li key={i}>
                    {vuelo.date} - {vuelo.time} - {vuelo.number}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <p>No hay vuelos disponibles.</p>
      )}
    </div>
  );
}
