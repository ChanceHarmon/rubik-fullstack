import './MoveControls.css';


const faces = ['white', 'green', 'red', 'orange', 'blue', 'yellow'];
const faceColors = {
  white: '#f9fafb',
  yellow: '#facc15',
  green: '#22c55e',
  blue: '#3b82f6',
  red: '#ef4444',
  orange: '#f97316',
};

function MoveControls({ onMove }) {

  const directions = [
    { label: '↻', value: 'clockwise' },
    { label: '↺', value: 'counterclockwise' },
  ];

  return (
    <section className="move-controls">
      <h2>Controls</h2>

      {faces.map((face) => (
        <div key={face} className="move-row">
          <div className="move-buttons">
            {directions.map((direction) => (
              <button
                key={direction.value}
                className="move-button"
                style={{
                  backgroundColor: faceColors[face],
                  color:
                    face === 'white' || face === 'yellow'
                      ? '#111827'
                      : '#ffffff',
                }}
                onClick={() => onMove(face, direction.value)}
              >
                {direction.label}
              </button>
            ))}
          </div>
        </div>
      ))}

    </section>
  );
}

export default MoveControls;