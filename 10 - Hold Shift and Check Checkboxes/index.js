
const checkboxs = document.querySelectorAll('input[type="checkbox"]');

checkboxs.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));

let lastCheckbox;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) { // 運用 e 裡面的　shiftKey 屬性可以判斷是否有按 shift 鍵
    checkboxs.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastCheckbox) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastCheckbox = this;
}

// 邏輯：
// shift 的使用方式應該是在點擊 checkbox 後再按下 shift，
// 可以由 shiftKey 屬性判定是否按下，當兩者皆啟動後，再點擊另外一個 checkbox 才會出現效果，
// 這邊可以先定義最後一個點擊的是 lastChecked，
// 而這邊用 inBetween 參數當做在兩個 checkbox 之間的內容，
// 若在兩個之間為true, 其他則會false。所以最後只要判斷 inBetween 為 true 時打勾即可。