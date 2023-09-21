let audio = new Audio();
let playOrPauseBtn = document.querySelector('.playOrPauseBtn');
let nextTrack = document.querySelector('.nextTrack');
let previousTrack = document.querySelector('.previousTrack');
let isPlay = false;

let trackList = [
    {
        'singer': 'Lady Gaga',
        'trackName': 'Poker Face',
        'trackSrc': "music/Gaga - Poker Face.mp3",
        'imageFullSize': '1111',
        'imageMini': '2222'
    },
    {
        'singer': 'Mr.President',
        'trackName': 'Coco Jamboo',
        'trackSrc': "music/dr-alban-koko-dzhambo.mp3",
        'imageFullSize': '9999',
        'imageMini': '8888'
    }
];

let numTrack = 0;
let currentTrack = trackList[numTrack];

function PlayNextTrack() {
    if (numTrack === trackList.length - 1) {
        numTrack = 0;
    } else {
        numTrack = numTrack + 1;
    };
    currentTrack = trackList[numTrack];
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
    pauseTrack();
    playTrack();
};
// function playOrPause() {
//     if (!isPlay) {
//         audio.src = "music/Gaga - Poker Face.mp3";
//         audio.currentTime = 0;
//         audio.play();
//         isPlay = true;
//         playOrPauseBtn.classList.toggle('pause');
//     } else {
//         audio.pause();
//         isPlay = false;
//         playOrPauseBtn.classList.toggle('pause');
//     };
// };

function playTrack() {
    audio.src = currentTrack.trackSrc;
    console.log(currentTrack.singer);
    console.log(currentTrack.trackName);
    console.log(currentTrack.imageFullSize);
    console.log(currentTrack.imageMini);

    audio.play();
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

playOrPauseBtn.addEventListener('click', playOrPausefull);
nextTrack.addEventListener('click', PlayNextTrack);
previousTrack.addEventListener('click', PlayPreviousTrack);
