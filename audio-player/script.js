let audio = new Audio();
let playOrPauseBtn = document.querySelector('.playOrPauseBtn');
let nextTrack = document.querySelector('.nextTrack');
let previousTrack = document.querySelector('.previousTrack');
let bgImage = document.querySelector('.bgImage');
let bgImageMimi = document.querySelector('.bgImageMimi');
let progressAudio = document.querySelector('.progressAudio');
let authorTrack = document.querySelector('.authorTrack');
let nameTrack = document.querySelector('.nameTrack');
let sec = document.querySelector('.sec');
let secAll = document.querySelector('.secAll');
let footer = document.querySelector('.footer');

// let test = document.querySelector('.test');

// init
let isPlay = false;
let trackList = [
    {
        'singer': 'Lady Gaga',
        'trackName': 'Poker Face',
        'trackSrc': "music/Gaga - Poker Face.mp3",
        'imageFullSize': "url('image/maxre5567sdefault.jpg')",
        'imageMini': "url('image/lady-gaga-poker-face.jpg')"
    },
    {
        'singer': 'Mr.President',
        'trackName': 'Coco Jamboo',
        'trackSrc': "music/dr-alban-koko-dzhambo.mp3",
        'imageFullSize': "url('image/clip_5700_1672085570_poster.jpg')",
        'imageMini': "url('image/artworks-000506533464-jkj1bz-t500x500.jpg')"
    },
    {
        'singer': 'Static-X',
        'trackName': 'The Only',
        'trackSrc': "music/Static-X_-_The_Only_(musmore.com).mp3",
        'imageFullSize': "url('image/111maxresdefault (1).jpg')",
        'imageMini': "url('image/6wzfdg-Xtbk.jpg')"
    },
    {
        'singer': 'Kylie minogue',
        'trackName': 'Can t Get You Out of My Head',
        'trackSrc': "music/KylieMinogueCanNotGetYouOutOfMyHead_(radiodiva.ru).mp3",
        'imageFullSize': "url('image/Can-t-Get-You-Out-Of-My-Head-Music-Video-kylie-minogue-26482453-1037-680.jpg')",
        'imageMini': "url('image/ma1235gfgxresdefault (1).jpg')"
    }
];
let numTrack = 0;
let currentTrack = trackList[numTrack];
authorTrack.textContent = currentTrack.singer;
nameTrack.textContent = currentTrack.trackName;
let completionPercentage = 0;

changeTrack();

function PlayNextTrack() {
    if (numTrack === trackList.length - 1) {
        numTrack = 0;
    } else {
        numTrack = numTrack + 1;
    };
    currentTrack = trackList[numTrack];
    changeTrack();

    if (!playOrPauseBtn.classList.contains('pause')) {
        playOrPauseBtn.classList.toggle('pause');
    };

    pauseTrack();
    playTrack();
};
function PlayPreviousTrack() {
    if (numTrack === 0) {
        numTrack = trackList.length - 1;
    } else {
        numTrack = numTrack - 1;
    };
    currentTrack = trackList[numTrack];
    changeTrack();

    if (!playOrPauseBtn.classList.contains('pause')) {
        playOrPauseBtn.classList.toggle('pause');
    };

    pauseTrack();
    playTrack();
};

function playTrack() {
    audio.src = currentTrack.trackSrc;
    audio.play();
    changeTrack();
    isPlay = true;
    playOrPauseBtn.classList.toggle('pause');
};

function pauseTrack() {
    audio.pause();
    isPlay = false;
    playOrPauseBtn.classList.toggle('pause');
};

function playOrPausefull() {
    if (!isPlay) {
        audio.currentTime = 0;
        playTrack();
    } else {
        pauseTrack();
    };
};

function changeTrack() {
    function changePictures() {
        bgImage.style.backgroundImage = currentTrack.imageFullSize;
        bgImageMimi.style.backgroundImage = currentTrack.imageMini;
    }
    function changeText() {
        authorTrack.textContent = currentTrack.singer;
        nameTrack.textContent = currentTrack.trackName;
    };
    changePictures();
    changeText();
};

playOrPauseBtn.addEventListener('click', playOrPausefull);
nextTrack.addEventListener('click', PlayNextTrack);
previousTrack.addEventListener('click', PlayPreviousTrack);

audio.addEventListener('timeupdate', () => {
    if (progressAudio.max !== audio.duration) {
        progressAudio.max = audio.duration;
    };
    if (audio.currentTime === audio.duration) {
        PlayNextTrack();
    };
    progressAudio.value = audio.currentTime;
    sec.textContent = (audio.currentTime / 60).toFixed(2);
    secAll.textContent = (audio.duration / 60).toFixed(2);
});


progressAudio.addEventListener('click', () => {
    // console.log("Процент выполнения", Number(completionPercentage.toFixed(2)));
    if (audio.duration) {
        audio.currentTime = Number(((audio.duration / 60).toFixed(2) * completionPercentage / 100).toFixed(2)) * 60;
        // console.log(Number(((audio.duration / 60).toFixed(2) * completionPercentage / 100).toFixed(2)));
    };
});




progressAudio.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let initialValue = progressAudio.getBoundingClientRect().x;

    // test.style.left = String(x) + "px";

    let finalValue = progressAudio.getBoundingClientRect().x + progressAudio.getBoundingClientRect().width;

    completionPercentage = (x - initialValue) / (finalValue - initialValue) * 100;
});

window.addEventListener('resize', () => {
    bgImage.style.width = String(window.innerWidth) + 'px';
    // bgImage.style.height = String(window.innerHeight - footer.style.height) + 'px';
    // footer.style.width = String(window.innerWidth) + 'px';
});