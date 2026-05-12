import './CubeFace.css'

function getColor(value) {
  const colorCode = value[0]
  const faceColors = {
    w: '#f9fafb',
    y: '#facc15',
    g: '#22c55e',
    b: '#3b82f6',
    r: '#ef4444',
    o: '#f97316',
  };

  return faceColors[colorCode] || 'gray';
}

function CubeFace({ faceName, stickers }) {
  return (
    <div className="cube-face-wrapper">
      <h3>{faceName}</h3>
      <div className="cube-face">
        {stickers.map((sticker, index) => (
          <div className={`sticker ${sticker[0]}`}
            style={{ backgroundColor: getColor(sticker) }} key={index}>
            {sticker}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CubeFace;