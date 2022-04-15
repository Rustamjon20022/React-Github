import { Slider } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'
import "./Sape.css"
const Sape = () => {
  return (
    <div className='Sape'>
      <Link to="/About"><h2 className='Sap'>Sape fuga <Slider /></h2></Link>
      <hr></hr>
      <p className='pi'>
      Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.
      </p>
      <div className='check'>
          <input type="checkbox" id='even' chacked={false} />
          <h3>Repudiandae rerum velit modi et</h3>
          <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. </p>
          <input type="checkbox" id='even' chacked={false} />
          <h3>Repudiandae rerum velit modi et officia quasi facilis</h3>
          <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. </p>

          <input type="checkbox" id='even' chacked={false} />
          <h3>Repudiandae rerum velit modi et officia quasi facilis</h3>
          <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. </p>

      </div>
    </div>
  );
}

export default Sape;
