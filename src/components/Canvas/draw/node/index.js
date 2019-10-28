const drawNode=(ctx,startPos)=>{
    ctx.beginPath();
    ctx.moveTo(startPos.x, startPos.y);
    // 75 25
    ctx.quadraticCurveTo(25,25,25,45);
    ctx.quadraticCurveTo(25,65,75,65);
    // ctx.quadraticCurveTo(50,120,30,125);
    // ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,65,125,45);
    ctx.quadraticCurveTo(125,25,startPos.x,startPos.y);
    ctx.stroke();
}

export default drawNode; 