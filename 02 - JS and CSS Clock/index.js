
//---------------------第一次-----------------------
// 參考網路上寫法
const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');

function nowTime() {
    const now = new Date();

    const nowSecond = now.getSeconds();
    const secondDeg = nowSecond * (360/60) + 90;
    second.style.transform = `rotate(${secondDeg}deg)`;

    const nowMin = now.getMinutes();
    const minDeg = (nowMin * (360/60)) + (nowSecond * (6/60)) + 90;
    min.style.transform = `rotate(${minDeg}deg)`;

    const nowHour = now.getHours();
    const hourDeg = (nowHour * (360/12)) + (nowMin * (30/60)) + 90;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}

nowTime();
setInterval(nowTime, 1000); // 每 1 秒執行一次