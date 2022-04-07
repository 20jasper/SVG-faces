import { arc } from 'd3'
import { BackgroundCircle } from './components/BackgroundCircle'
import { Eyes } from './components/Eyes'
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
const mouthArcHappy = arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(Math.PI * 3 / 4)
  .endAngle(Math.PI * 5 / 4)
const mouthArcMad = arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(Math.PI * 7 / 4)
  .endAngle(Math.PI * 9 / 4)

const madEyebrowRotation = 35
const sadMouthTransform = 10


function App() {
  return (
    <div className="App">
      <section>
        <svg viewBox={`0 0 ${width} ${height}`} aria-labelledby="happyFaceTitle happyFaceID">
          <title id="happyFaceTitle">Happy face</title>
          <desc id="happyFaceID">A yellow happy face with a black background, mouth, and eyes</desc>
          <g transform={`translate(${centerX} ${centerY})`}>
            <BackgroundCircle
              faceRadius={faceRadius}
              fillColor="yellow"
              strokeWidth={strokeWidth}
            />
            <Eyes
              eyeOffsetX={eyeOffsetX}
              eyeOffsetY={eyeOffsetY}
              eyeRadius={eyeRadius}
              strokeWidth={strokeWidth}
            />
            <path d={mouthArcHappy()}></path>
          </g>
        </svg>
        <svg viewBox={`0 0 ${width} ${height}`} aria-labelledby="sadFaceTitle sadFaceID">
          <title id="sadFaceTitle">Sad face</title>
          <desc id="sadFaceID">A blue sad face with a black background, mouth, and eyes</desc>
          <g transform={`translate(${centerX} ${centerY})`}>
            <BackgroundCircle
              faceRadius={faceRadius}
              fillColor="blue"
              strokeWidth={strokeWidth} />
            <Eyes
              eyeOffsetX={eyeOffsetX}
              eyeOffsetY={eyeOffsetY}
              eyeRadius={eyeRadius}
              strokeWidth={strokeWidth}
            />
            <rect
              width="100"
              height={strokeWidth}
              transform=
              {`translate(0 ${sadMouthTransform})`}
            ></rect>
          </g>
        </svg>
        <svg viewBox={`0 0 ${width} ${height}`} aria-labelledby="madFaceTitle madFaceID">
          <title id="madFaceTitle">Mad face</title>
          <desc id="madFaceID">A red mad face with a black background, mouth, eyebrows, and eyes</desc>
          <g transform={`translate(${centerX} ${centerY})`}>
            <BackgroundCircle
              faceRadius={faceRadius}
              fillColor="red"
              strokeWidth={strokeWidth} />
            <Eyes
              eyeOffsetX={eyeOffsetX}
              eyeOffsetY={eyeOffsetY}
              eyeRadius={eyeRadius}
              strokeWidth={strokeWidth}
            />
            <rect
              width="100"
              height={strokeWidth * 2}
              transform=
              {`translate(${eyeOffsetX / 2} ${-(eyeOffsetY + eyeRadius)})
            rotate(${-madEyebrowRotation})`}
            ></rect>
            <rect
              width="100"
              height={strokeWidth * 2}
              transform=
              {`translate(${- eyeOffsetX - 20} ${-(eyeOffsetY + eyeRadius + 57)})
            rotate(${madEyebrowRotation})`}
            ></rect>
            <path d={mouthArcMad()} transform="translate(0 75)"></path>
          </g>
        </svg>
      </section>
    </div>
  );
}

export default App;
