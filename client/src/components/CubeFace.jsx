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
    <section>
      <h2>{faceName}</h2>
      <div className="cube-face">
        {stickers.map((sticker, index) => (
          <div className="sticker"
            style={{ backgroundColor: getColor(sticker) }} key={index}>
            {sticker}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CubeFace;