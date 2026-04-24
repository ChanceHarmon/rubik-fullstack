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
  function handleMove() {
    fetch('http://localhost:3001/api/cube/move', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        face: 'white',
        direction: 'clockwise',
      }),
    })
      .then((response) => response.json())
      .then((data) => setCube(data))
      .catch((err) => console.error('Move failed:', err));
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
      <button onClick={handleMove}>Rotate White Clockwise</button>
      <button onClick={handleReset}>Reset Cube</button>
    </main>
  );
}

export default App;