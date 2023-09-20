let audio = new Audio();
let playOrPauseBtn = document.querySelector('.playOrPauseBtn');
let isPlay = false;

let trackList = [
    {
        'singer': 'Lady Gaga',
        'trackName': 'Poker Face',
        'trackSrc': "music/Gaga - Poker Face.mp3",
    }
];

function playOrPause() {
    if (!isPlay) {
        audio.src = "music/Gaga - Poker Face.mp3";
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        playOrPauseBtn.classList.toggle('pause');
    } else {
        audio.pause();
        isPlay = false;
        playOrPauseBtn.classList.toggle('pause');
    };
};

playOrPauseBtn.addEventListener('click', playOrPause);
