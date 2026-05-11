const faces = ['white', 'green', 'red', 'orange', 'blue', 'yellow'];


function MoveControls({ onMove }) {

  const directions = [
    { label: '↻', value: 'clockwise' },
    { label: '↺', value: 'counterclockwise' },
  ];

  return (
    <section>
      <h2>Moves</h2>

      {faces.map((face) => (
        <div key={face} className="move-row">
          <span>{face}</span>
          <div className="move-buttons">
            {directions.map((direction) => (
              <button
                key={direction.value}
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