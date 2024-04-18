import "./App.css";

import { useState } from "react";
import MaskedCanvas from "./components/MaskedCanvas";
import PatternCanvas from "./components/PatternCanvas";
import StrokeCanvas from "./components/StrokeCanvas";
import TextField from "@mui/material/TextField";

import InputCanvas from "./components/InputCanvas";
import InputButtonCanvas from "./components/InputButtonCanvas";
import { SketchPicker } from "react-color";


function App() {
  const [inputText, setInputText] = useState("Contents for advertising");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const [inputButtonText, setInputButtonText] = useState("Shop Now");

  const handleInputButtonChange = (e) => {
    setInputButtonText(e.target.value);
  };

  const [contentImage, setContentImage] = useState(null); // State to hold the uploaded content image
  // Function to handle content image upload
  const handleContentImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContentImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [backgroundColor, setBackgroundColor] = useState("#0369A1");
  const handleColorChange = (color) => {
    setBackgroundColor(color.hex); // Update background color when color picker value changes
  };
  return (
    <div className="flex justify-center items-center h-screen my-10">
      <div className=" flex flex-row space-x-40">
        <div className="relative">
          <div
            style={{ backgroundColor: backgroundColor }}
            className={`shadow-md shadow-slate-500 h-[400px] w-[400px]`}
          />
          <PatternCanvas
            patternImg="/global_temp_landscape_temp_10_Design_Pattern.png"
            className="absolute inset-0 z-10 "
          />

          {/* MaskedCanvas in the middle */}
          <MaskedCanvas
            ContentImg={contentImage}
            maskImg="/global_temp_landscape_temp_10_mask.png"
            className="absolute inset-0 z-20"
          />

          {/* StrokeCanvas at the top */}
          <StrokeCanvas
            strokeImg="/global_temp_landscape_temp_10_Mask_stroke.png "
            className="absolute inset-0 z-30"
          />
          <InputCanvas text={inputText} className="absolute inset-0 z-40" />
          <InputButtonCanvas
            text={inputButtonText}
            className="absolute inset-0 z-50"
          />
        </div>
        <div className=" flex flex-col gap-10 shadow-md rounded-md  shadow-slate-500 p-5">
          <TextField
            id="outlined-basic"
            value={inputText}
            onChange={handleInputChange}
            label="Content"
            variant="outlined"
          />
        
          <TextField
            id="outlined-basic"
            value={inputButtonText}
            onChange={handleInputButtonChange}
            label="Call to Action"
            variant="outlined"
          />
      
      <input
            type="file"
            accept="image/*"
            onChange={handleContentImageUpload}
            className =" bg-slate-300"
          />
          <SketchPicker color={backgroundColor} onChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
