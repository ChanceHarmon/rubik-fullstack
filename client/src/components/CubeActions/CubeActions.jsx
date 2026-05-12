import './CubeActions.css'

function CubeActions({ onReset, onScramble, onUndo }) {
  return (
    <section className="actions">
      <button className="action-button" onClick={onReset}>
        Reset
      </button>

      <button className="action-button" onClick={onScramble}>
        Scramble
      </button>

      <button className="action-button" onClick={onUndo}>
        Undo
      </button>
    </section>
  );
}

export default CubeActions;