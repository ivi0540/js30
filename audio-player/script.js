let audio = document.querySelector('audio');
let playBtn = document.querySelector('.playBtn');
let pauseBtn = document.querySelector('.pauseBtn');

playBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
});
pauseBtn.addEventListener('click', () => {
    audio.pause();
});