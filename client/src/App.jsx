import { useEffect, useState } from 'react';
import CubeFace from './components/CubeFace';


function App() {
  const [cube, setCube] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/cube')
      .then((response) => response.json())
      .then((data) => setCube(data))
      .catch((err) => console.error('Failed to fetch cube:', err));
  }, []);

  // Handle move function
  function handleMove(face, direction) {
    console.log(face, direction)
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
      .then((data) => setCube(data))
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
      .then((data) => setCube(data))
      .catch((error) => console.error('Reset failed:', error));
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

      <button onClick={handleReset}>Reset Cube</button>
    </main>
  );
}

export default App;