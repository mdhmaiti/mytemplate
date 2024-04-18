


import   {  useEffect, useRef } from 'react';
import StyledCanvas from "./StyledCanvas";
import PropTypes from 'prop-types';


const InputCanvas = ({  text ,className}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Function to draw text on the canvas
    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous text
      ctx.fillStyle = 'white'; // Set text color to white #FFFFFF
      ctx.font = '44px Arial'; // Set font size to 30px
      ctx.fillText(text, 50, 50); // Draw new text of the x cor 50 and y cor 50 
    };

    // Initialize canvas
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    drawText();
  }, [text]);

  return (
    <StyledCanvas ref ={canvasRef} className = {`${className}`}/>
  );
};

InputCanvas.propTypes = {
  text: PropTypes.string.isRequired, // Validate 'text' prop as a required string
  className: PropTypes.string, // Validate 'className' prop as an optional string
};

export default InputCanvas;

