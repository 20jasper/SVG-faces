import { FaceContainer } from './FaceContainer'
import { BackgroundCircle } from './BackgroundCircle'
import { Eyes } from './Eyes'
import { CurvedMouth } from './Mouth'

export const HappyFace = ({ width, height, centerX, centerY, faceRadius, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, innerRadius, outerRadius }) => (
    <FaceContainer
        width={width}
        height={height}
        titleID={'happyFaceTitle'}
        title={'Happy face'}
        descriptionID={'happyFaceID'}
        description={'A yellow happy face with a black background, mouth, and eyes'}
        centerX={centerX}
        centerY={centerY}
    >
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
        <CurvedMouth
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={Math.PI * 3 / 4}
            endAngle={Math.PI * 5 / 4}
        />
    </FaceContainer>
)