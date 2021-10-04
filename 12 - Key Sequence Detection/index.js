
//---------- 學習重點-----------
// splice() - 新的使用方式邏輯 (刪除陣列第一個資料，再陣列最後增加新的資料)
// join() - 將陣列或一個類陣列中所有的元素連接、合併成一個字串，並回傳此字串。
// includes() - 判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
//---------- 學習重點-----------

let enterKey = [];
const secretCode = 'wasabi';

window.addEventListener('keyup', (e) => {
  enterKey.push(e.key);
  enterKey.splice(- enterKey.length - 1, (enterKey.length - secretCode.length));
  // 刪除陣列第一筆資料，新增資料在陣列最後
  if (enterKey.join('').includes(secretCode)) {
    // 陣列資料合併並判斷是否包含特定的元素
    console.log('bingGo');
    cornify_add();
  }
  console.log(enterKey);
})