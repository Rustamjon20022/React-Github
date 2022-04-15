import { Slider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Voluptates.css"
const Voluptates = () => {
  return (
    <div className='voluptates'>
      <Link to="/About"><h2 className='Voluptate'>voluptates <Slider /></h2></Link>
    </div>
  );
}

export default Voluptates;
