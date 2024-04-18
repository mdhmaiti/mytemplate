
import { useRef, useEffect } from 'react';
import StyledCanvas from "./StyledCanvas";
import PropTypes from "prop-types"; 


const PatternCanvas = ({ patternImg,className}) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Draw design patterns
        const fimg1 = new Image();
        fimg1.src = patternImg;
        fimg1.onload = () => {
            ctx.drawImage(fimg1, 0, 0);
        };
     
    }, [patternImg]);
  return (
    <StyledCanvas
    ref={canvasRef}
    className={`${className} `}
/>
  )
}
PatternCanvas.propTypes = {
  patternImg: PropTypes.string.isRequired, // Validate 'patternImg' prop as a required string
  className: PropTypes.string // Validate 'className' prop as an optional string
};

export default PatternCanvas