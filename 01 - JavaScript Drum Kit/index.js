
//-------------- --------第一次 ----------------------------

const keys = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');

window.addEventListener('keydown', (e) => {
    const keyCode = e.keyCode;
    keys.forEach((item) => {
        item.classList.remove('playing');
        if (Number(item.getAttribute('data-key')) === keyCode) {
            item.classList.add('playing');
        }
    })
    audio.forEach((item) => {
        item.pause();
        item.currentTime = 0;
        if (Number(item.getAttribute('data-key')) === keyCode) {
            item.play();
        }
    })
})