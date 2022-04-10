export const BackgroundCircle = ({ faceRadius, fillColor, strokeWidth }) => (
    <circle
        r={faceRadius}
        fill={fillColor}
        stroke="black"
        strokeWidth={strokeWidth}
    />
)