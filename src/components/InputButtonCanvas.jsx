import { useEffect, useRef } from 'react';
import StyledCanvas from "./StyledCanvas";
import PropTypes from 'prop-types';



const InputButtonCanvas = ({ text, fontSize = 30, textColor = 'red', bgColor = 'white', padding = 24, className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const position = { x: 190, y: 320 }; // Hardcoded position
    
    // Function to draw text on the canvas
    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous content
  const buttonWidth = ctx.measureText(text).width + padding * 2;
  const buttonHeight = fontSize + padding * 2;
  
  // Draw rounded rectangle for button background
  ctx.fillStyle = bgColor; // Set background color
  const borderRadius = 20; // Adjust the radius as needed
  ctx.beginPath();
  ctx.moveTo(position.x + borderRadius, position.y);
  ctx.lineTo(position.x + buttonWidth - borderRadius, position.y);
  ctx.arcTo(position.x + buttonWidth, position.y, position.x + buttonWidth, position.y + borderRadius, borderRadius);
  ctx.lineTo(position.x + buttonWidth, position.y + buttonHeight - borderRadius);
  ctx.arcTo(position.x + buttonWidth, position.y + buttonHeight, position.x + buttonWidth - borderRadius, position.y + buttonHeight, borderRadius);
  ctx.lineTo(position.x + borderRadius, position.y + buttonHeight);
  ctx.arcTo(position.x, position.y + buttonHeight, position.x, position.y + buttonHeight - borderRadius, borderRadius);
  ctx.lineTo(position.x, position.y + borderRadius);
  ctx.arcTo(position.x, position.y, position.x + borderRadius, position.y, borderRadius);
  ctx.closePath();
  ctx.fill();
  
  // Draw text
  ctx.fillStyle = textColor; // Set text color
  ctx.font = `${fontSize}px Arial`; // Set font size
  ctx.textAlign = 'center'; // Text alignment
  ctx.textBaseline = 'middle'; // Vertical alignment
  const textX = position.x + buttonWidth / 2;
  const textY = position.y + buttonHeight / 2;
  ctx.fillText(text, textX, textY); // Draw tex
    };
    // Initialize canvas
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = textColor;
    drawText();
  }, [text, fontSize, textColor, bgColor, padding]);

  return (
    <StyledCanvas ref={canvasRef} className={className} />
  );
};
InputButtonCanvas.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  textColor: PropTypes.string, // Add textColor validation
  bgColor: PropTypes.string,
  padding: PropTypes.number,
  className: PropTypes.string,
};
export default InputButtonCanvas;
