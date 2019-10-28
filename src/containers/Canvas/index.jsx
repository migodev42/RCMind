import React, { useState, useEffect, useRef, useCallback, useContext, useReducer } from 'react'
import * as CONTAINER from '@containers/config'
import { context } from '@context'
import { drawNode, drawText, nodeConf } from './draw'
import useEvent from '@customHooks/useEvent'
import debounce from '@utils/debounce'
import ctxReducer, { ctxActionTypes, ctxCreator } from './ctxReducer'
import './index.less'

function Canvas(props) {

    const [ctx, ctxDispatch] = useReducer(ctxReducer, '')
    const { tree: { state: treeState} } = useContext(context);

    console.log('渲染tree', treeState);

    useEvent({
        eventType: 'resize',
        func: debounce((e) => {            
            console.log('resize')
        }, 500)
    })

    const WrapeddrawTree = useCallback((ctx,tree, pos) => {
        const drawTree=(tree, pos)=>{
            drawNode(ctx, pos);
            drawText(ctx, tree.text, pos);
            const halflen = Math.floor(tree.children.length / 2);
            if (tree.children.length === 0) { return; }
            for (let i = 0; i < tree.children.length; i++) {
                drawTree(tree.children[i], { x: pos.x + 180, y: pos.y + (i - halflen) * 90 })
            }
        }
        drawTree(tree,pos);        
    },[])    

    useEffect(() => {
        const canvas = document.querySelector(`.${CONTAINER.Canvas}`)
        canvas.width = document.querySelector(`.${CONTAINER.Main}`).clientWidth
        canvas.height = document.querySelector(`.${CONTAINER.Main}`).clientHeight
        const ctx = canvas.getContext('2d')
        
        WrapeddrawTree(ctx,treeState, { x: canvas.width / 2, y: canvas.height / 2 });
    },[treeState,WrapeddrawTree])


    return (
        <canvas className={CONTAINER.Canvas}></canvas>
    )
}

export default Canvas;