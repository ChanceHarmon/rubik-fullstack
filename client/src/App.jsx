import { useEffect, useState } from 'react';
import CubeFace from './components/CubeFace';


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
    <main>
      <h1>Rubik Fullstack</h1>
      <div className="cube-layout">
        {Object.entries(cube).map(([faceName, stickers]) => (
          <CubeFace
            key={faceName}
            faceName={faceName}
            stickers={stickers}
          />
        ))}
      </div>
      <button onClick={() => handleMove('white', 'clockwise')}>
        Rotate White Clockwise
      </button>
      <button onClick={() => handleMove('white', 'counterclockwise')}>
        Rotate White Counterclockwise
      </button>

      <button onClick={() => handleMove('green', 'clockwise')}>
        Rotate Green Clockwise
      </button>
      <button onClick={() => handleMove('green', 'counterclockwise')}>
        Rotate Green Counterclockwise
      </button>

      <button onClick={() => handleMove('red', 'clockwise')}>
        Rotate Red Clockwise
      </button>
      <button onClick={() => handleMove('red', 'counterclockwise')}>
        Rotate Red Counterclockwise
      </button>

      <button onClick={() => handleMove('orange', 'clockwise')}>
        Rotate Orange Clockwise
      </button>
      <button onClick={() => handleMove('orange', 'counterclockwise')}>
        Rotate Orange Counterclockwise
      </button>

      <button onClick={() => handleMove('blue', 'clockwise')}>
        Rotate Blue Clockwise
      </button>
      <button onClick={() => handleMove('blue', 'counterclockwise')}>
        Rotate Blue Counterclockwise
      </button>

      <button onClick={() => handleMove('yellow', 'clockwise')}>
        Rotate Yellow Clockwise
      </button>
      <button onClick={() => handleMove('yellow', 'counterclockwise')}>
        Rotate Yellow Counterclockwise
      </button>

      <button onClick={handleReset}>Reset Cube</button>
      <button onClick={handleScramble}>Scramble Cube</button>
      <button onClick={handleUndo}>Undo last move</button>

      <section>
        <h2>Move History</h2>

        {history.length === 0 ? (
          <p>No moves yet.</p>
        ) : (
          <ol>
            {history.map((move) => (
              <li key={move.id}>
                {move.face} {move.direction} ({move.move_type})
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
}

export default App;