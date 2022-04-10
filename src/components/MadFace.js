import { FaceContainer } from './FaceContainer'
import { BackgroundCircle } from './BackgroundCircle'
import { Eyes } from './Eyes'
import { CurvedMouth } from './Mouth'
import { Eyebrows } from './Eyebrows'

export const MadFace = ({ width, height, centerX, centerY, faceRadius, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, innerRadius, outerRadius }) => (
    <FaceContainer
        width={width}
        height={height}
        titleID={'madFaceTitle'}
        title={'Mad face'}
        descriptionID={'madFaceID'}
        description={'A red mad face with a black background, mouth, eyebrows, and eyes'}
        centerX={centerX}
        centerY={centerY}
    >
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
        <Eyebrows
            strokeWidth={strokeWidth}
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
            eyeRadius={eyeRadius}
            eyebrowRotation={35}
        />
        <CurvedMouth
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={Math.PI * 7 / 4}
            endAngle={Math.PI * 9 / 4}
            translateX={0}
            translateY={0}
        />
    </FaceContainer>
)