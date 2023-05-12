import './App.css';
import React, { useState } from 'react';

function App() {
  const [tipoMaquina, setTipoMaquina] = useState('');
  const [tempo, setTempo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tipo de máquina:', tipoMaquina);
    console.log('Tempo:', tempo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          dog dog
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Tipo de máquina:
              <input type="text" value={tipoMaquina} onChange={(e) => setTipoMaquina(e.target.value)} />
            </label>
            <br />
            <label>
              Tempo:
              <input type="text" value={tempo} onChange={(e) => setTempo(e.target.value)} />
            </label>
            <br />
            <button type="submit">Enviar</button>
          </form>
        </div>

      </header>
    </div>
  );
}

export default App;
