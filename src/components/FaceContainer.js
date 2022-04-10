export const FaceContainer = ({ children, width, height, titleID, title, descriptionID, description, centerX, centerY }) => (
  <>
    <svg viewBox={`0 0 ${width} ${height}`} aria-labelledby={`${titleID} ${descriptionID}`}>
      <title id={`${titleID}`}>{`${title}`}</title>
      <desc id={`${descriptionID}`}>{`${description}`}</desc>
      <g transform={`translate(${centerX} ${centerY})`}>
        {children}
      </g>
    </svg>
  </>
)