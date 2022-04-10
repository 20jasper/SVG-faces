import { arc } from 'd3'

export const CurvedMouth = ({ innerRadius, outerRadius, startAngle, endAngle, translateX, translateY }) => {
  const mouthArcHappy = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle)
  return < path d={mouthArcHappy()} transform={`translate(${translateX} ${translateY})`} />
}

export const StraightMouth = ({ strokeWidth, translateX, translateY }) => (
  <rect
    width="100"
    height={strokeWidth}
    transform=
    {`translate(${translateX} ${translateY})`}
  ></rect>
)