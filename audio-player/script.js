let audio = new Audio();
let playOrPauseBtn = document.querySelector('.playOrPauseBtn');
let nextTrack = document.querySelector('.nextTrack');
let previousTrack = document.querySelector('.previousTrack');
let bgImage = document.querySelector('.bgImage');
let bgImageMimi = document.querySelector('.bgImageMimi');
let progressAudio = document.querySelector('.progressAudio');
let authorTrack = document.querySelector('.authorTrack');
let nameTrack = document.querySelector('.nameTrack');

// init
let isPlay = false;
let trackList = [
    {
        'singer': 'Lady Gaga',
        'trackName': 'Poker Face',
        'trackSrc': "music/Gaga - Poker Face.mp3",
        'imageFullSize': "url('image/7924.jpg')",
        'imageMini': "url('image/sddefault.jpg')"
    },
    {
        'singer': 'Mr.President',
        'trackName': 'Coco Jamboo',
        'trackSrc': "music/dr-alban-koko-dzhambo.mp3",
        'imageFullSize': "url('image/maxresdefault (1).jpg')",
        'imageMini': "url('image/sddefault_2.jpg')"
    }
];
let numTrack = 0;
let currentTrack = trackList[numTrack];
authorTrack.textContent = currentTrack.singer;
nameTrack.textContent = currentTrack.trackName;

function PlayNextTrack() {
    if (numTrack === trackList.length - 1) {
        numTrack = 0;
    } else {
        numTrack = numTrack + 1;
    };
    currentTrack = trackList[numTrack];
    changeTrack();
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
    pauseTrack();
    playTrack();
};

progressAudio.max = 100;
progressAudio.value = 0;


function playTrack() {
    audio.src = currentTrack.trackSrc;

    // progressAudio.max = audio.duration;
    // progressAudio.value = audio.currentTime;

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
progressAudio.addEventListener('click', () => {
    console.log(audio.duration);
    console.log(audio.currentTime);
});

audio.addEventListener('timeupdate', () => {
    progressAudio.max = audio.duration;
    progressAudio.value = audio.currentTime;

    // console.log(audio.duration);
    // console.log(audio.currentTime);
});
