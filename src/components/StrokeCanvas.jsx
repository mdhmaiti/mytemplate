
import { useRef, useEffect } from 'react';
import StyledCanvas from "./StyledCanvas";
import PropTypes from 'prop-types';
const StrokeCanvas = ({strokeImg,className}) => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Draw design patterns
     
        const fimg2 = new Image();
        fimg2.src = strokeImg;
        fimg2.onload = () => {
            ctx.drawImage(fimg2, 0, 0);
        };
    }, [ strokeImg]);

  return (
    <StyledCanvas
    ref={canvasRef}
    className={`${className} `}
/>
  )
}
StrokeCanvas.propTypes = {
  strokeImg: PropTypes.string.isRequired, // Validate 'strokeImg' prop as a required string
  className: PropTypes.string // Validate 'className' prop as an optional string
};

export default StrokeCanvas