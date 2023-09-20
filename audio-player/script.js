// let audio = document.querySelector('audio');
let audio = new Audio();
// let playBtn = document.querySelector('.playBtn');
// let pauseBtn = document.querySelector('.pauseBtn');
let playOrPauseBtn = document.querySelector('.playOrPauseBtn');
let isPlay = false;

playOrPauseBtn.addEventListener('click', () => {
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
});
