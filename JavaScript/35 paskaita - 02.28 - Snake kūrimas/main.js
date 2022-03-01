/* Kintamieji */
const CANVAS = document.querySelector("#snake");
const CONTEXT = CANVAS.getContext("2d");

let ox = oy = 2; // obuolio x ir y pozicija
let gx = gy = 3; // gyvatėlės galvos x ir y pozicijos
let tail = 5;   // gyvatėlės ilgis
let trail = []; // gyvatėlės kūno pozicijos
let vx = vy = 0;  // gyvatėlės judėjimo kryptis
let gameSpeed = 5; // žaidimo greitis
let ts = 40;    // tile size
let tc = CANVAS.width / ts; // tile count

const APPLE_IMG = new Image();
APPLE_IMG.src = "images/appo.PNG";

setInterval(game, 1000 / gameSpeed);
function game() {
  gx += vx;
  gy += vy;

  if (gx > tc - 1) {  // gyvatėlė eina į dešinę sieną
    gx = 0; // gyvatėlė teleportuojama kairėje pusėje
  } else if (gx < 0) { // gyvatėlė eina į kairę sieną
    gx = tc - 1; // gyvatėlė teleportuojama dešinėje pusėje
  } else if (gy > tc - 1) { // gyvatėlė eina į apačią
    gy = 0; // gyvatėlė teleportuojama į viršų
  } else if (gy < 0) { // gyvatėlė eina į viršų
    gy = tc - 1; // gyvatėlė teleportuojama į apačią
  }
  
  CONTEXT.fillStyle = "black";
  CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);

  CONTEXT.fillStyle = "green";
  CONTEXT.fillRect(gx*ts, gy*ts, ts-1, ts-1);
  trail.forEach(element => {
    CONTEXT.fillRect(element.x*ts, element.y*ts, ts-1, ts-1);
    if(element.x === gx && element.y === gy){
      tail = 5;
    }
  });

  trail.push({
    x: gx,
    y: gy
  });
  while(trail.length > tail){
    trail.shift();
  }

  if(gx === ox && gy === oy){
    tail++;
    ox = Math.floor(Math.random()*tc);
    oy = Math.floor(Math.random()*tc);
    appleOnSnake();
  }

  CONTEXT.fillStyle = "red";
  CONTEXT.drawImage(APPLE_IMG, ox*ts, oy*ts, ts, ts);
}

function appleOnSnake(){
  trail.forEach(element => {
    while(element.x === ox && element.y === oy){
      console.log("apple on snake x", element.x,ox);
      console.log("apple on snake y", element.y,oy);
      ox = Math.floor(Math.random()*tc);
      oy = Math.floor(Math.random()*tc);
      appleOnSnake();
    }
  });
}

document.addEventListener("keydown", keyPress);
function keyPress(e) {
  switch (e.keyCode) {
    case 65: // a
      if(vx !== 1){
        vx = -1; vy = 0;
      }
      break;
    case 87: // w
      if(vy !== 1){
        vy = -1; vx = 0;
      }
      break;
    case 83: // s
      if(vy !== -1){
        vy = 1; vx = 0;
      }
      break;
    case 68: // d
      if(vx !== -1){
        vx = 1; vy = 0;
      }
      break;
  }
}