let audio = new Audio();
let playOrPauseBtn = document.querySelector('.playOrPauseBtn');
let nextTrack = document.querySelector('.nextTrack');
let previousTrack = document.querySelector('.previousTrack');
let bgImage = document.querySelector('.bgImage');
let bgImageMimi = document.querySelector('.bgImageMimi');
let progressAudio = document.querySelector('.progressAudio');
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

function PlayNextTrack() {
    if (numTrack === trackList.length - 1) {
        numTrack = 0;
    } else {
        numTrack = numTrack + 1;
    };
    currentTrack = trackList[numTrack];
    changePictures();
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

    changePictures();
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
// progressAudio.max = audio.duration;

function playTrack() {
    audio.src = currentTrack.trackSrc;
    console.log(currentTrack.singer);
    console.log(currentTrack.trackName);
    console.log(currentTrack.imageFullSize);
    console.log(currentTrack.imageMini);

    // bgImage.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lOBbKC1YJwK21y7QUeYjUXgmagvD2TUc3ITZ1ihcsQ&s'";

    audio.play();
    changePictures();
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

function changePictures() {
    bgImage.style.backgroundImage = currentTrack.imageFullSize;
    bgImageMimi.style.backgroundImage = currentTrack.imageMini;
}

playOrPauseBtn.addEventListener('click', playOrPausefull);
nextTrack.addEventListener('click', PlayNextTrack);
previousTrack.addEventListener('click', PlayPreviousTrack);
