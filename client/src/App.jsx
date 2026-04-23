import { useEffect, useState } from 'react';

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
      <pre>{JSON.stringify(cube, null, 2)}</pre>
    </main>
  );
}

export default App;