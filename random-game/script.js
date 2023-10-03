var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = 'images/bird.png';
bg.src = 'images/bg.png';
fg.src = 'images/fg.png';
pipeUp.src = 'images/pipeUp.png';
pipeBottom.src = 'images/pipeBottom.png';

let gap = 90;//Зазор между препятствеями

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeUp, 100, 0);
    ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, 10, 50);
};

pipeBottom.onload = draw;


