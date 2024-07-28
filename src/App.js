import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    fetch('games.json')
      .then(response => response.json())
      .then(data => setJuegos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
                <td>{juego.id}</td>
                <td>{juego.recomendedBy == 'Juegos de la lista' ? 'Lista' : juego.recomendedBy}</td>
                <td>{juego.name}</td>
                <td>{juego.calification}</td>
                <td>{juego.genre ? juego.genre.replace(/\//g, ', ') : 'undefined'}</td>
                <td>{juego.multi}</td>
                {/* <td>{juego.tags ? juego.tags.join(', ') : ''}</td> */}
                <td>{juego.comment ? juego.comment : '-'}</td>
                <td>{juego.pay ? 'Sí' : 'No'}</td>
                <td>{juego.platform ? juego.platform : 'PC'}</td>
                <td>{juego.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
