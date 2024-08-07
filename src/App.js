import React, { useEffect, useState } from 'react';
import './App.css';
import { Icon } from '@iconify/react';
import Footer from './components/Footer';

function App() {
  const [juegos, setJuegos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSortedAscending, setIsSortedAscending] = useState(true);
  const [multiFilter, setMultiFilter] = useState(0);

  useEffect(() => {
    const url = 'https://script.google.com/macros/s/AKfycbzWF99iD0xVU6Wvl0Ec5hsx1OfBoJw-GWeRwTEZEbGtX72nYlXbNc4rUSYzJPdULNPUkQ/exec';
    fetch(url)
      .then(response => response.json())
      .then(data => setJuegos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleMultiFilterChange = () => {
    setMultiFilter((multiFilter + 1) % 3);
  };

  const filteredJuegos = juegos.filter(juego =>
    juego['Nombre'].toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter(juego => {
    if (multiFilter === 1) return juego['Multi'].toLowerCase() === 'sí' || 
                                  juego['Multi'].toLowerCase() === 'si' ||
                                  juego['Multi'].toLowerCase() === 'sí (coop)';
    if (multiFilter === 2) return juego['Multi'].toLowerCase() === 'no';
    return true; // Si multiFilter es 0, muestra todos los juegos
  });

  const handleSort = () => {
    const sortedJuegos = [...juegos].sort((a, b) => {
      if (isSortedAscending) {
        return a['Nombre'].localeCompare(b['Nombre']);
      } else {
        return b['Nombre'].localeCompare(a['Nombre']);
      }
    });
    setJuegos(sortedJuegos);
    setIsSortedAscending(!isSortedAscending);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={'title4.png'} alt='title' width="1352" height="136" />
        
        <div className='search-bar'>
          <Icon icon="material-symbols:search" className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="multi-filter">
          <label>
            Multijugador
            <input
              type="checkbox"
              checked={multiFilter === 1}
              ref={el => el && (el.indeterminate = multiFilter === 0)}
              onChange={handleMultiFilterChange}
            />
          </label>
        </div>

        <table className="games-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Recomendado por</th>
              <th className='tnombre'>Nombre
                <button onClick={handleSort} className="sort-button">
                  <Icon icon="mdi:sort-alphabetical-ascending" className='sort-icon'/>
                </button>
              </th>
              <th>Nota</th>
              <th>Género</th>
              <th>Multi</th>
              <th>Comentario</th>
              <th>¿Pago?</th>
              <th>Plataforma</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            {filteredJuegos.map((juego, index) => (
              <tr key={index}>
                <td>{juego.ID}</td>
                <td>{juego.Recomendado_por === 'Juegos de la lista' ? 'Lista' : juego.Recomendado_por}</td>
                <td>{juego.Nombre}</td>
                <td>{juego.Nota}</td>
                <td>{juego.Genero ? juego.Genero.replace(/\//g, ', ') : 'undefined'}</td>
                <td>{juego.Multi}</td>
                <td>{juego.Comentario ? juego.Comentario : '-'}</td>
                <td>{juego.Pago}</td>
                <td>{juego.Plataforma ? juego.Plataforma : 'PC'}</td>
                <td>{juego.Duracion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>

      <Footer/>
    </div>
  );
}

export default App;
