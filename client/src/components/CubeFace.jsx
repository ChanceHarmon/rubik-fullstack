import './CubeFace.css'

function CubeFace({ faceName, stickers }) {
  return (
    <section>
      <h2>{faceName}</h2>

      <div className="cube-face">
        {stickers.map((sticker, index) => (
          <div className={`sticker ${sticker}`} key={index}>
            {sticker}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CubeFace;