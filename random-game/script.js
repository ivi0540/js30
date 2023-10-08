let scoreDiv = document.querySelector('.score');
let mainPanel = document.querySelector('.mainPanel');
let startGame = document.querySelector('.startGame');
let saveScore = document.querySelector('.saveScore');

let playGamePanel = document.querySelector('.playGamePanel');
let csorePanel = document.querySelector('.csorePanel');
let restartBtn = document.querySelector('#restartBtn');
let scoreBall = document.querySelector('.scoreBall');
let userName = document.querySelector('.userName');
let tableScore = document.querySelector('.tableScore');
let blockWithResults = document.querySelector('.blockWithResults');

let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = 'images/bird.png';
bg.src = 'images/bg.png';
fg.src = 'images/fg.png';
pipeUp.src = 'images/pipeUp.png';
pipeBottom.src = 'images/pipeBottom.png';

//Зазор между препятствеями
let gap = 110;

//Позиция птички
let xPos = 10;
let yPos = 150;

//Гравитация
let grav = 0.5;

//Интервал появления блоков
let blockInt = 90;

//Рисование блоков
let pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
};

//Счет
let score = 0;

//Идет игра или нет
let playGame = true;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for (let i in pipe) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        //Скорость движения блоков
        pipe[i].x = pipe[i].x - 0.5;

        if (pipe[i].x === blockInt) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        };

        if (
            (xPos + bird.width >= pipe[i].x) &&
            (xPos <= pipe[i].x + pipeUp.width) &&
            (
                (yPos <= pipe[i].y + pipeUp.height) ||
                (yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
            )
        ) {
            // cancelAnimationFrame();

            closeCanvas();
            showMainPanel();
            onCsorePanel();
            playGame = false;
            // addScoreTable(JSON.parse(localStorage.getItem('totalScore')));
        };

        if ((pipe[i].x === 5) && (playGame === true)) {
            score += 1;
            scoreDiv.textContent = 'Score : ' + String(score);
            scoreBall.textContent = 'Score : ' + String(score);
        };
    };


    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    requestAnimationFrame(draw);
};

//При нажатии на любую кнопку птичка будет подпрыгивать вверх
document.addEventListener('keydown', () => {
    yPos -= 20;
});

//Необходимо подождать пока все картинки загрузятся а потом вызвать drow для рисования
startGame.addEventListener('click', () => {
    closeMainPanel();
    showCanvas();
    pipeBottom.onload = draw;
    requestAnimationFrame(draw);
});

saveScore.addEventListener('click', () => {
    let player = {
        'userName': userName.value,
        'score': scoreBall.textContent
    };

    let n = JSON.parse(localStorage.getItem('totalScore'));
    if (n === null) {
        n = [];
    };
    n.push(player);
    localStorage.setItem('totalScore', JSON.stringify(n));

    addScoreTable(JSON.parse(localStorage.getItem('totalScore')));
});



function drowMainPanel() {
    mainPanel.style.left = String((window.innerWidth / 2) - (800 / 2)) + 'px';
};


//Работа с главным меню
function closeMainPanel() {
    mainPanel.style.display = 'none';
};
function showMainPanel() {
    mainPanel.style.display = 'flex';
};

function onPlayGamePanel() {
    playGamePanel.style.display = 'flex';
    csorePanel.style.display = 'none';
};
function onCsorePanel() {
    playGamePanel.style.display = 'none';
    csorePanel.style.display = 'flex';
};

restartBtn.addEventListener('click', () => {
    location.reload();
});

function closeCanvas() {
    cvs.style.display = 'none';
    // cvs.style.display = 'block';
}

function showCanvas() {
    // cvs.style.display = 'none';
    cvs.style.display = 'block';
}

drowMainPanel();
window.addEventListener('resize', () => {
    drowMainPanel();
})




function addScoreTable(date) {
    if (!date) {
        date = [];
    };

    let newTable = document.createElement('table');
    newTable.className = 'tableScore';

    function addDateToTable(UserName, score) {
        let newTr = document.createElement('tr');
        newTable.append(newTr);

        let newTdUserName = document.createElement('td');
        newTdUserName.className = 'tdTable';
        newTdUserName.textContent = UserName;
        newTr.append(newTdUserName);

        let newTdScore = document.createElement('td');
        newTdScore.className = 'tdTable';
        newTdScore.textContent = score;
        newTr.append(newTdScore);
    };

    addDateToTable('UserName', 'Score');

    for (elem of date) {
        addDateToTable(elem.userName, elem.score);
    };
    blockWithResults.append(newTable);
};


















