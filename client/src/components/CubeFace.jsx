import './CubeFace.css'

function getColor(value) {
  const colorCode = value[0]
  const map = {
    w: 'white',
    y: 'yellow',
    g: 'green',
    b: 'blue',
    r: 'red',
    o: 'orange',
  };

  return map[colorCode] || 'gray';
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