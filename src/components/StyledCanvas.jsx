
// reusuable canvas component
import React from "react";

const StyledCanvas = React.forwardRef((props, ref ) => {
  return (
    <canvas
      ref={ref}
      height="1080"
      width="1080"
      style={{ height: 400, width: 400,  }}
      {...props}
    />
  );
});
StyledCanvas.displayName = "StyledCanvas"

export default StyledCanvas;
