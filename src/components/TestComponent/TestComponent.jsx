import React from 'react';
import { Typography, Button } from '@mui/material';
import style from './TestComponent.style.js'

function TestComponent() {
  return (
    <div>
        {/* DEFAULT */}
        <Typography variant="h1">Typography -  Material UI default h1 style</Typography>
        <Button color="primary">Primary Button - Material UI default style</Button>
        <Button color="secondary">Secondary Button -  - Material UI default style</Button>

        {/* SX */}
        <Typography variant="h1" sx={style.text}>Typography -  Material UI sx prop style</Typography>
        <Button color="primary" sx={style.primaryButton}>Primary Button - Material UI sx prop style</Button>
        <Button color="secondary" sx={{ color: "blue" }}>Secondary Button - Material UI sx prop style</Button>
    </div>
  );
}

export default TestComponent;
