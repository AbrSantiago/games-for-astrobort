import './App.css';

function App() {
  const juegos = [
    {
      recomendadoPor: "Usuario 1",
      nombre: "Juego 1",
      calificacion: 9,
      genero: "Aventura",
      multijugador: "Sí",
      tags: ["emocionante", "historia profunda"],
      comentario: "Excelente juego con gran historia.",
      pago: "No",
      plataforma: "PC",
      duracion: "40 horas"
    },
    {
      recomendadoPor: "Usuario 2",
      nombre: "Juego 2",
      calificacion: 8,
      genero: "Acción",
      multijugador: "No",
      tags: ["rápido", "adictivo"],
      comentario: "Muy divertido y adictivo.",
      pago: "Sí",
      plataforma: "Emulador",
      duracion: "20 horas"
    }
    // Agrega más juegos aquí
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Juegos Recomendados</h1>
        <table>
          <thead>
            <tr>
              <th>Recomendado por</th>
              <th>Nombre</th>
              <th>Calificación</th>
              <th>Género</th>
              <th>Multijugador</th>
              <th>Tags</th>
              <th>Comentario</th>
              <th>¿Pago?</th>
              <th>Plataforma</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            {juegos.map((juego, index) => (
              <tr key={index}>
                <td>{juego.recomendadoPor}</td>
                <td>{juego.nombre}</td>
                <td>{juego.calificacion}</td>
                <td>{juego.genero}</td>
                <td>{juego.multijugador}</td>
                <td>{juego.tags.join(', ')}</td>
                <td>{juego.comentario}</td>
                <td>{juego.pago}</td>
                <td>{juego.plataforma}</td>
                <td>{juego.duracion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
