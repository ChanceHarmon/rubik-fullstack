const faces = ['white', 'green', 'red', 'orange', 'blue', 'yellow'];


function MoveControls({ onMove }) {
  return (
    <section>
      <h2>Moves</h2>

      {faces.map((face) => (
        <div key={face}>
          <button onClick={() => onMove(face, 'clockwise')}>
            {face} clockwise
          </button>

          <button onClick={() => onMove(face, 'counterclockwise')}>
            {face} counterclockwise
          </button>
        </div>
      ))}

    </section>
  );
}

export default MoveControls;