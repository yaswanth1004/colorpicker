import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ColorPicker from './components/colorpicker';
import "./components/style.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorPicker color1="#fe0000" color2="#00ff00"  color3="#0000fe" color4="#ffff00" color5="#fe00fe" color6="#00ffff" color7="#fea500" color8="#81007f" color9="#ffc0cb" color10="#008000" color11="#fe6347" color12="#00cfd1" color13="#8b4413" color14="#ff8b00" color15="#4683b4" color16="#fed700"></ColorPicker>
);
reportWebVitals();