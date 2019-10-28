const drawNode=(ctx,startPos)=>{
    const block={
        height:70,
        width:160,
    }
    ctx.beginPath();
    
    /* 起点：中上 */
    ctx.moveTo(startPos.x, startPos.y);    
    /* 左中 */
    ctx.quadraticCurveTo(startPos.x-block.width/2,startPos.y,startPos.x-block.width/2,startPos.y+block.height/2);
    /* 中下 */
    ctx.quadraticCurveTo(startPos.x-block.width/2,startPos.y+block.height,startPos.x,startPos.y+block.height);
    /* 右中 */
    ctx.quadraticCurveTo(startPos.x+block.width/2,startPos.y+block.height,startPos.x+block.width/2,startPos.y+block.height/2);
    /* 回到起点 */
    ctx.quadraticCurveTo(startPos.x+block.width/2,startPos.y,startPos.x,startPos.y);
    ctx.stroke();
}

export default drawNode; 