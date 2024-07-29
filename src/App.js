import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const url = 'https://script.google.com/macros/s/AKfycbzWF99iD0xVU6Wvl0Ec5hsx1OfBoJw-GWeRwTEZEbGtX72nYlXbNc4rUSYzJPdULNPUkQ/exec';
    fetch(url)
      .then(response => response.json())
      .then(data => setJuegos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  console.log(juegos);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Juegos recomendados para Astrobort</h1>
        <table className="games-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Recomendado por</th>
              <th>Nombre</th>
              <th>Nota</th>
              <th>Género</th>
              <th>Multi</th>
              {/* <th>Tags</th> */}
              <th>Comentario</th>
              <th>¿Pago?</th>
              <th>Plataforma</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            {juegos.map((juego, index) => (
              <tr key={index}>
                <td>{juego.ID}</td>
                <td>{juego.Recomendado_por == 'Juegos de la lista' ? 'Lista' : juego.Recomendado_por}</td>
                <td>{juego.Nombre}</td>
                <td>{juego.Nota}</td>
                <td>{juego.Genero ? juego.Genero.replace(/\//g, ', ') : 'undefined'}</td>
                <td>{juego.Multi}</td>
                {/* <td>{juego.tags ? juego.tags.join(', ') : ''}</td> */}
                <td>{juego.Comentario ? juego.Comentario : '-'}</td>
                <td>{juego.Pago ? 'Sí' : 'No'}</td>
                <td>{juego.Plataforma ? juego.Plataforma : 'PC'}</td>
                <td>{juego.Duracion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
