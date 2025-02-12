import React from 'react'
import Desktop from './Desktop'
import './navigation.css'

const Navigation = ({ setBlur }) => {
  return (
    <div className="navigation">
      <Desktop setBlur={setBlur} />
    </div>
  );
};

export default Navigation