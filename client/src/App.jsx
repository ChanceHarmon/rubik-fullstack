import { useEffect, useState } from 'react';
import CubeFace from './components/CubeFace';

function App() {
  const [cube, setCube] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/cube')
      .then((res) => res.json())
      .then((data) => setCube(data))
      .catch((err) => console.error('Failed to fetch cube:', err));
  }, []);

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
    </main>
  );
}

export default App;