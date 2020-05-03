const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');

function draw(){
  requestAnimationFrame(draw);
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(0,0,c.width,c.height);
}

draw();
