import { useEffect, useState } from 'react';
import './App.css';
import CubeDisplay from './components/CubeDisplay';
import MoveControls from './components/MoveControls';
import CubeActions from './components/CubeActions';
import MoveHistory from './components/MoveHistory';


function App() {
  const [cube, setCube] = useState(null);
  const [history, setHistory] = useState([]);

  // Refresh history function
  function refreshHistory() {
    fetch('http://localhost:3001/api/cube/history')
      .then((response) => response.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error('Failed to fetch history:', err));
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/cube')
      .then((response) => response.json())
      .then((data) => setCube(data))
      .catch((err) => console.error('Failed to fetch cube:', err));

    refreshHistory();
  }, []);

  // Handle move function
  function handleMove(face, direction) {
    fetch('http://localhost:3001/api/cube/move', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ face, direction }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Move failed');
        }
        return response.json();
      })
      .then((data) => {
        setCube(data);
        refreshHistory();
      })
      .catch((error) => {
        console.error(error);
        alert('Move not implemented yet');
      });
  }

  // Handle reset function
  function handleReset() {
    fetch('http://localhost:3001/api/cube/reset', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setCube(data);
        refreshHistory();
      })
      .catch((error) => console.error('Reset failed:', error));
  }

  // Handle scramble function
  function handleScramble() {
    fetch('http://localhost:3001/api/cube/scramble', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setCube(data.cube);
        refreshHistory();
      })
      .catch((error) => console.error('Scramble failed:', error));
  }

  // Handle undo function
  function handleUndo() {
    fetch('http://localhost:3001/api/cube/undo', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setCube(data);
        refreshHistory();
      })
      .catch((error) => console.error('Undo failed:', error));
  }


  if (!cube) {
    return <p>Loading cube...</p>;
  }

  return (
    <main className="app">
      <h1>Rubik Fullstack</h1>

      <section className="top-panel">
        <CubeDisplay cube={cube} />
      </section>

      <section className="controls-panel">
        <MoveControls onMove={handleMove} />

        <CubeActions
          onReset={handleReset}
          onScramble={handleScramble}
          onUndo={handleUndo}
        />
      </section>

      <section className="history-panel">
        <MoveHistory history={history} />
      </section>
    </main>
  );
}

export default App;