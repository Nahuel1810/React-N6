import './App.css';
import React, { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([
    { nombre: 'React 6', realizada: true },
    { nombre: 'Bases de datos 1', realizada: false },
    { nombre: 'Emprendimientos productivos', realizada: false }
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');

  function handleAgregarTarea(event) {
    event.preventDefault();
    setTareas([...tareas, { nombre: nuevaTarea, realizada: false }]);
    setNuevaTarea('');
  }

  function handleTareaRealizada(index) {
    const aux = [...tareas];
    aux[index].realizada = !aux[index].realizada;
    setTareas(aux);
  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>

      <table className='Tabla'>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Realizada</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea, index) => (
            <tr key={index} className={tarea.realizada ? 'realizada' : ''}>
              <td>{tarea.nombre}</td>
              <td>
                <input type="checkbox" checked={tarea.realizada} onChange={() => handleTareaRealizada(index)} />
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input type="text" value={nuevaTarea} onChange={(event) => setNuevaTarea(event.target.value)} className='TextInput' />
            </td>
            <td>
              <button onClick={handleAgregarTarea} className='Boton'>Agregar tarea</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
