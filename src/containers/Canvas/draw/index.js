const nodeConf={
    height:70,
    width:160,
    padding:[40,30]
}


const drawNode=(ctx,startPos)=>{
    
    ctx.beginPath();    
    /* 起点：中上 */
    ctx.moveTo(startPos.x, startPos.y);    
    /* 左中 */
    ctx.quadraticCurveTo(startPos.x-nodeConf.width/2,startPos.y,startPos.x-nodeConf.width/2,startPos.y+nodeConf.height/2);
    /* 中下 */
    ctx.quadraticCurveTo(startPos.x-nodeConf.width/2,startPos.y+nodeConf.height,startPos.x,startPos.y+nodeConf.height);
    /* 右中 */
    ctx.quadraticCurveTo(startPos.x+nodeConf.width/2,startPos.y+nodeConf.height,startPos.x+nodeConf.width/2,startPos.y+nodeConf.height/2);
    /* 回到起点 */
    ctx.quadraticCurveTo(startPos.x+nodeConf.width/2,startPos.y,startPos.x,startPos.y);
    ctx.stroke();
}

const drawText=(ctx,text,pos)=>{
    ctx.font = "18px Material";
    console.log("绘制文本长度: ",ctx.measureText(text));
    
    ctx.fillText(text, pos.x-nodeConf.width/2+nodeConf.padding[1], pos.y+nodeConf.padding[0]);
}

export {
    nodeConf,
    drawNode,
    drawText
}