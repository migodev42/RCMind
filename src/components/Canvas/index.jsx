import React, { useState, useEffect,useRef,useCallback,useContext } from 'react'
import * as CONTAINER from '@containers/config'
import {context} from '@context'
import drawNode from './draw/node';
import './index.less'

function Canvas(props) {
    
    // const [ctx,setCtx]=useState('')
    const {tree:{state:treeState}} =useContext(context);
    
    console.log('tree',treeState);

    
    
    const canvasRef = useCallback(canvas => {
        if (canvas !== null) {
            canvas.width=document.querySelector(`.${CONTAINER.Main}`).clientWidth
            canvas.height=document.querySelector(`.${CONTAINER.Main}`).clientHeight
            const ctx=canvas.getContext('2d');     
            // drawNode(ctx,{x:canvas.width/2,y:canvas.height/2});      
            const drawTree=(tree,pos)=>{
                drawNode(ctx,pos);
                const halflen=Math.floor(tree.children.length/2);
                if(tree.children.length===0){return; }
                for(let i=0;i<tree.children.length;i++){
                    drawTree(tree.children[i],{x:pos.x+180,y:pos.y+(i-halflen)*90})
                }
            }
            // drawNode(ctx,{x:475,y:725});
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect (50, 500, 55, 50);
            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect (30, 30, 55, 50);
            drawTree(treeState,{x:canvas.width/2,y:canvas.height/2});      
            
            
            // setCtx(ctx)
        }
      }, [treeState]);
    
    return (
        <canvas className="RCMind-Canvas" ref={canvasRef}></canvas>
    )
}

export default Canvas;