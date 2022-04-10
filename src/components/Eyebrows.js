export const Eyebrows = ({ strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, eyebrowRotation }) => (
    <>
        <rect
            width="100"
            height={strokeWidth * 2}
            transform=
            {`translate(${eyeOffsetX / 2} ${-(eyeOffsetY + eyeRadius)})
              rotate(${-eyebrowRotation})`}
        ></rect>
        <rect
            width="100"
            height={strokeWidth * 2}
            transform=
            {`translate(${-eyeOffsetX - 20} ${-(eyeOffsetY + eyeRadius + 57)})
              rotate(${eyebrowRotation})`}
        ></rect>
    </>
)