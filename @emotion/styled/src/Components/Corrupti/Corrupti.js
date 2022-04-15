import { Slider } from '@mui/material';
import React from 'react';
import "./Corrupti.css"
import { Link } from 'react-router-dom';

const Corrupti = () => {
  return (
    <div className='Corrupti'>
      <Link to="/About"><h2 className='corrupt'>corrupti <Slider /></h2></Link>
      
    </div>
  );
}

export default Corrupti;
