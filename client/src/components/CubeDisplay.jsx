import CubeFace from './CubeFace';

function CubeDisplay({ cube }) {
  return (
    <div className="cube-net">
      <div className="face-white">
        <CubeFace
          faceName="white"
          stickers={cube.white}
        />
      </div>

      <div className="middle-row">
        <CubeFace
          faceName="orange"
          stickers={cube.orange}
        />

        <CubeFace
          faceName="green"
          stickers={cube.green}
        />

        <CubeFace
          faceName="red"
          stickers={cube.red}
        />

        <CubeFace
          faceName="blue"
          stickers={cube.blue}
        />
      </div>

      <div className="face-yellow">
        <CubeFace
          faceName="yellow"
          stickers={cube.yellow}
        />
      </div>
    </div>
  );
}

export default CubeDisplay;