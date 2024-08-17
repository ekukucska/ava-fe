import React from 'react';
import { Typography, Button } from '@mui/material';
import {primaryButton} from './TestComponent.style.js'
import './style.css';

function TestComponent() {
  return (
    <div>
        {/* DEFAULT */}
        <Typography variant="h1">Typography -  Material UI default h1 style</Typography>
        <Button color="primary">Primary Button - Material UI default style</Button>
        <Button color="secondary">Secondary Button -  - Material UI default style</Button>


        {/* CSS CLASSES */}
        <Typography variant="h1" className="custom-heading">Typography - Custom CSS class style</Typography>
        <Button color="primary" className="custom-button-primary">Primary Button - Custom CSS class style</Button>
        <Button color="secondary" className="custom-button-secondary">Secondary Button - Custom CSS class style</Button>

        {/* SX */}
        <Typography variant="h1" sx={{ color: 'lightgreen'}}>Typography -  Material UI sx prop style</Typography>
        <Button color="primary" sx={primaryButton}>Primary Button - Material UI sx prop style</Button>
        <Button color="secondary" sx={{ color: "blue" }}>Secondary Button - Material UI sx prop style</Button>

        {/* STYLE OBJECT */}
        <Typography variant="h1" style={{ color: "red" }}>Typography -  Material UI style object style</Typography>
        <Button color="primary" style={{ color: "green" }}>Primary Button - Material UI style object style</Button>
        <Button color="secondary" style={{ color: "blue" }}>Secondary Button - Material UI style object style</Button>

        {/* MIX */}
        <Typography variant="h1" sx={{ color: "red" }} style={{ color: "blue" }}>Typography -  Material UI sx prop and style object style</Typography>
        <Button color="primary" sx={{ color: "green" }} style={{ color: "yellow" }}>Primary Button - Material UI sx prop and style object style</Button>
        <Button color="secondary" sx={{ color: "blue" }} style={{ color: "purple" }}>Secondary Button - Material UI sx prop and style object style</Button>

    </div>
  );
}

export default TestComponent;
