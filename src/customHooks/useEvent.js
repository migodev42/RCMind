import React, { useState, useEffect, useCallback } from 'react'
import checkType from '@utils/checkType'
function useEvent(props) {
  const {eventType,func} = props;
  
  const handleFunc=useCallback(()=>{
    func()
  },[func])

  useEffect(() => {
    window.addEventListener(eventType,handleFunc)
    return ()=>{
        window.removeEventListener(eventType,handleFunc)
    }
  },[eventType,handleFunc]);

  
}

export default useEvent;