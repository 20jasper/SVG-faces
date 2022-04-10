import { FaceContainer } from './FaceContainer'
import { BackgroundCircle } from './BackgroundCircle'
import { Eyes } from './Eyes'
import { StraightMouth } from './Mouth'

export const SadFace = ({ width, height, centerX, centerY, faceRadius, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius }) => (
    <FaceContainer
        width={width}
        height={height}
        titleID={'sadFaceTitle'}
        title={'Sad face'}
        descriptionID={'sadFaceID'}
        description={'A blue sad face with a black background, mouth, and eyes'}
        centerX={centerX}
        centerY={centerY}
    >
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
        <StraightMouth
            strokeWidth={strokeWidth}
            translateX={0}
            translateY={10}
        />
    </FaceContainer>
)