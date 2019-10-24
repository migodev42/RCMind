import React, { useState, useEffect } from 'react';
import './index.less'
import useTheme from '@customHooks/useTheme'

function Nav(props) {
  const {setBgColor}=useTheme()

  return (
    <div className="RCMind-Nav" onClick={()=>setBgColor('navy')}>
        Nav
    </div>
  )
}

export default Nav;