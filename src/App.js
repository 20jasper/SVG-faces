import { HappyFace } from './components/HappyFace'
import { SadFace } from './components/SadFace'
import { MadFace } from './components/MadFace'
const width = 500
const height = 500
const strokeWidth = 10

const centerX = width / 2
const centerY = height / 2

const eyeOffsetX = 120
const eyeOffsetY = 50

const faceRadius = centerY - strokeWidth / 2
const eyeRadius = centerY / 6 - strokeWidth / 2

const outerRadius = 50
const innerRadius = outerRadius - strokeWidth

const App = () => {
  return (
    <div className="App">
      <section>
        <HappyFace
          width={width}
          height={height}
          centerX={centerX}
          centerY={centerY}
          faceRadius={faceRadius}
          strokeWidth={strokeWidth}
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        />
        <SadFace
          width={width}
          height={height}
          centerX={centerX}
          centerY={centerY}
          faceRadius={faceRadius}
          strokeWidth={strokeWidth}
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
        />
        <MadFace
          width={width}
          height={height}
          centerX={centerX}
          centerY={centerY}
          faceRadius={faceRadius}
          strokeWidth={strokeWidth}
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        />
      </section>
    </div>
  );
}

export default App;
