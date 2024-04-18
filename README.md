# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## notes;;

1. basic functionality of the canvas ; like make a input/ select an image / colour and reflect it on the canvas;
2. Canvas size adjust complete ;
3. first store it in the public folder andd add the image; then url thing ; make it seperate entity from the from the upload image;
4. make the upload image such that it fits the mask inside the canvas
5. oder of the elements - background colour < design pattern < mask < mask stroke < texts ; design patterns are like the black structure in the images
6. ```js

   ```

```

'{"caption":{"text":"1 & 2 BHK Luxury Apartments at just Rs.34.97
Lakhs","position":{"x":50,"y":50},"max_characters_per_line":31,"font_size":44,"alignment":"lef
t","text_color":"#FFFFFF"},"cta":{"text":"Shop
Now","position":{"x":190,"y":320},"text_color":"#FFFFFF","background_color":"#000000"},"im
age_mask":{"x":56,"y":442,"width":970,"height":600},
"urls":{
"mask":
" https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png ",
"stroke": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
"design_pattern":" https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png "}}'

```
## canvas

1. make canvas reuseable componet;
2. make total three layers using the canvas compoent; 
3. one is masked component on which a picture will appear
4. two is that handles the back ground frame and the colour for the canvas 
5. and finally the input of tje canvas that 
6. stack everything over one another to complete the tasks 

## order of the layers
1. first is the bachground template canvas. - template canvas
2. then the mask template canvas- mask canvas
3. input template canvaas- input canvas
4. 400 px canvas - styled canvas

## done list
1. resuable canvas compoent complete
2. mask compoent complete
3. templete complete
4. dome 