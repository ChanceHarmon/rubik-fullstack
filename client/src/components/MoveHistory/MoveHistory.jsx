import './MoveHistory.css';

function MoveHistory({ history }) {
  const faceColors = {
    white: '#f9fafb',
    yellow: '#facc15',
    green: '#22c55e',
    blue: '#3b82f6',
    red: '#ef4444',
    orange: '#f97316',
  };

  return (
    <section className="move-history">
      <div className="history-header">
        <h2>History</h2>
        <span>{history.length} moves</span>
      </div>

      {history.length === 0 ? (
        <p>No moves yet.</p>
      ) : (
        <ul className="history-list">
          {[...history].reverse().map((move) => (
            <li className="history-item" key={move.id}>
              <div
                className="history-chip"
                style={{
                  backgroundColor: faceColors[move.face],
                  color:
                    move.face === 'white' || move.face === 'yellow'
                      ? '#111827'
                      : '#ffffff',
                }}
              >
                {move.direction === 'clockwise' ? '↻' : '↺'}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MoveHistory;