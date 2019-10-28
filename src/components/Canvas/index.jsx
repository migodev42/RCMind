import React, { useState, useEffect,useRef,useCallback } from 'react'
import * as CONTAINER from '@containers/config';
import drawNode from './draw/node';
import './index.less'

function Canvas(props) {
    const [ctx,setCtx]=useState('')

    const canvasRef = useCallback(canvas => {
        if (canvas !== null) {
            canvas.width=document.querySelector(`.${CONTAINER.Main}`).clientWidth
            canvas.height=document.querySelector(`.${CONTAINER.Main}`).clientHeight
            const ctx=canvas.getContext('2d');     
            drawNode(ctx,{x:75,y:25});       
            setCtx(ctx)
        }
      }, []);

    if(ctx){
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (500, 500, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
         
    useCallback(() => {
        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[ctx])

    return (
        <canvas className="RCMind-Canvas" ref={canvasRef}></canvas>
    )
}

export default Canvas;