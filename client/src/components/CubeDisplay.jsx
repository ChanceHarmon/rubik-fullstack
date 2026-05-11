import CubeFace from './CubeFace';

const faceOrder = ['white', 'orange', 'green', 'red', 'blue', 'yellow'];

function CubeDisplay({ cube }) {
  return (
    <div className="cube-layout">
      {faceOrder.map((faceName) => (
        <CubeFace
          key={faceName}
          faceName={faceName}
          stickers={cube[faceName]}
        />
      ))}
    </div>
  );
}

export default CubeDisplay;