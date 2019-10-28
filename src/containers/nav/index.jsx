import React, { useState, useEffect } from 'react';
import './index.less'
import useTheme from '@customHooks/useTheme'
import ThemeButton from './subcomponents/themeBtn'
import * as CONTAINER from '@containers/config'

function Nav(props) {
  const {setBgColor}=useTheme()

  return (
    <div className={CONTAINER.Nav}>       
       <ThemeButton/>
    </div>
  )
}

export default Nav;