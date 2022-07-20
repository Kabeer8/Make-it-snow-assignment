
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.height = 450;
cnv.width = window.innerWidth;
let box = document.getElementById("text-box");
let count = 100
box.innerHTML = count;
let snowFlakes = [];
for(i = 0; i < 100; i++){
snowFlakeGen()
}
(requestAnimationFrame)(draw);
function draw(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
     for(i = 0; i < snowFlakes.length; i++){
        animate(snowFlakes[i]);
        drawSnow(snowFlakes[i]);

        if (snowFlakes[i].y >= 450){
            snowFlakes[i].y = 10;
        }
     }
    requestAnimationFrame(draw);
}

function newSnow(initX, initY, initR){
    return{
        x: initX,
        y: initY,
        r: initR
        };
    }

function drawSnow(singleFlake){
    x = singleFlake.x
    y = singleFlake.y
    r = singleFlake.r
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
}

function animate(singleFlake){
    if (singleFlake.r == 2){
        singleFlake. y += 2.5;
    }
    else if(singleFlake.r == 3){
        singleFlake. y += 2;
    }
}

function snowFlakeGen(){
snowFlakes.push(newSnow(Math.floor(Math.random() * window.innerWidth),
Math.floor(Math.random() * 450),
Math.floor((Math.random() * 2) + 2)));
}



document.addEventListener("keydown", keydownHandler)

function keydownHandler(event){

    if (event.keyCode === 38){
        for(i = 0; i < 10; i++){
            snowFlakeGen()
            }
        box.innerHTML = count += 10;
    }
    else if (event.keyCode === 40){
        for(i = 0; i < 10; i++){
            snowFlakes.pop();
            } 
        if (count > 0){
            box.innerHTML = count -= 10;
        }
    }
}
