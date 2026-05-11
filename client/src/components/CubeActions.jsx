function CubeActions({ onReset, onScramble, onUndo }) {
  return (
    <section>
      <h2>Actions</h2>

      <button onClick={onReset}>
        Reset Cube
      </button>

      <button onClick={onScramble}>
        Scramble Cube
      </button>

      <button onClick={onUndo}>
        Undo Last Move
      </button>
    </section>
  );
}

export default CubeActions;