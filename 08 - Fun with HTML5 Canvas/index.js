
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // 使用getContext('2d')定義為2d繪圖

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#a17a69'; // 定義繪畫的顏色
ctx.lineJoin = 'round'; // 定義兩線相交時的拐角
ctx.lineCap = 'round'; // 定義結束端點樣式
ctx.lineWidth = 100; // 定義線的寬度

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath(); // 繪畫啟動時
  ctx.moveTo(lastX, lastY); // 繪畫起始位置
  ctx.lineTo(e.offsetX, e.offsetY); // 繪畫終點位置
  ctx.stroke(); // 繪製以定義的路徑
  [lastX, lastY] = [e.offsetX, e.offsetY]; // 動態更新起始位置
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
 