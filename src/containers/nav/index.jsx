import React, { useState, useEffect } from 'react';
import './index.less'
import useTheme from '@customHooks/useTheme'
import ThemeButton from './subcomponents/themeBtn'

function Nav(props) {
  const {setBgColor}=useTheme()

  return (
    <div className="RCMind-Nav">       
       <ThemeButton/>
    </div>
  )
}

export default Nav;