
import { useRef, useEffect } from "react";
import StyledCanvas from "./StyledCanvas";
import PropTypes from "prop-types"; 

// this is the reusuable layer for the mask which accepts the mask image and original replaced image

const MaskedCanvas = ({maskImg, ContentImg, className}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      const maskImage = new Image();
      maskImage.src = maskImg;
  
      const pictureImage = new Image();
      pictureImage.src = ContentImg;
  
      
  
  
      maskImage.onload = () => {
        canvas.width = maskImage.width;
        canvas.height = maskImage.height;
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(maskImage, 0, 0);
  
        ctx.globalCompositeOperation = "source-in";
  
        pictureImage.onload = () => {
          ctx.drawImage(pictureImage, 0, 0, canvas.width, canvas.height);
        };
      };
    }, [ContentImg, maskImg]);
  
    return <StyledCanvas ref ={canvasRef} className = {`${className}`} />;
  };
  MaskedCanvas.propTypes = {
    maskImg: PropTypes.string.isRequired, // Validate 'maskImg' prop as a required string
    ContentImg: PropTypes.string.isRequired, // Validate 'ContentImg' prop as a required string
    className: PropTypes.string // Validate 'className' prop as an optional string
  };


export default MaskedCanvas;
