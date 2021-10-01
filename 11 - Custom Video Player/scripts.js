
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipBtn = document.querySelectorAll('[data-skip]');

// console.log(progressBar);

// 重點屬性與語法：---------------------------------------
// video 屬性：video.paused - 判斷影片是否播放
// video 屬性：video.currentTime - 顯示影片"現在播放"的時間
// video 屬性：video.duration - 影片全長時間
// video 屬性：video.volume - 影片聲音大小
// video 屬性：video.playbackRate - 影片撥放速度快慢
// video 語法：video[play]() or video[pause]() 控制影片播放或暫停
// .dataset 屬性：可以取得 HTML 標籤內 data-xxx 的屬性值
// 監聽事件：timeUpdate、progress
// 重點屬性與語法：---------------------------------------

// 影片播放、暫停鈕
function toggleVide() {
  const method = video.paused ? 'play' : 'pause'; // video.paused 影片是否撥放中
  const icon = video.paused ? '❚ ❚' : '►';
  video[method](); // 控制影片播放語法
  toggle.textContent = icon;
  console.dir(video);
}

video.addEventListener('click', toggleVide);
toggle.addEventListener('click', toggleVide);

// 影片快轉、到帶按鈕
function skip() {
  const skip = this.dataset.skip;
  video.currentTime += parseInt(skip);
  // 利用 HTML 屬性 data-xxx 的值來操控影片播放速度
}

skipBtn.forEach((item) => item.addEventListener('click', skip));

// 影片聲音大小、播放速度快慢控制 Range
function handleRange() {
  video[this.name] = this.value;
  // 利用 HTML input 屬性 name 與 value 值加上 video[語法] 來控制
}

ranges.forEach((item) => item.addEventListener('change', handleRange));
ranges.forEach((item) => item.addEventListener('mouseover', handleRange));

// 處理播放 Bar 的顯示
function handleProgress() {
  const videoTime = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${videoTime}%`;
}

video.addEventListener('timeupdate', handleProgress);
// 要注意監聽對象是監聽"影片"不是 progressBar

// 處理拖拉播放 Bar 的效果
function scrub(e) {
  const videoTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = videoTime;
}

let mouseDown = false; // 設滑鼠的 flag
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown',() => mouseDown = true);
progress.addEventListener('mouseup',() => mouseDown = false);
progress.addEventListener('mousemove',(e) => mouseDown && scrub(e));