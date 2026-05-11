function MoveHistory({ history }) {
  return (
    <section>
      <h2>Move History</h2>

      {history.length === 0 ? (
        <p>No moves yet.</p>
      ) : (
        <ol>
          {history.map((move) => (
            <li key={move.id}>
              {move.face} {move.direction} ({move.move_type})
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default MoveHistory;