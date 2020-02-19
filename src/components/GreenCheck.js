import React from 'react';
import green_check_mark from '../green_check_mark.png';

function GreenCheck() {
  return (
    <div className='correctBox'>
      <img
        src={green_check_mark}
        height='14'
        width='14'
        alt='green check mark'
      />
    </div>
  );
}

export default GreenCheck;
