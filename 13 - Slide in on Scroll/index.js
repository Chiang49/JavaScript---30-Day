
//---------------- debounce 學習補充 ---------------
// 實戰上 debounce 不一定要加，當連續事件發生問題時在考慮是否要使用
// debounce(func, wait = 20, immediate = true) => 壓低事件執行的次數
// wait = 20 => 等待 20 毫秒後再執行
// immediate => 是否要直接做
//---------------- debounce 學習補充 ---------------

//---------------- 學習重點---------------
// window.scrollY - 取得 Y 軸的卷軸"頂點"座標位置
// window.innerHeight - 取得瀏覽器畫面高度
// .offsetTop - 取得物件頂部座標
// 視窗"底部"座標：window.scrollY + window.innerHeight
// 圖片高度一半的座標：img.offsetTop + img.height
// 計算畫面高度邏輯：
// 當瀏覽器視窗底部座標"超過"圖片高度一半的座標時，圖片滑出來
//---------------- 學習重點---------------

//---------------- 學習補充---------------
// window.scrollTo(scrollX, scrollY)
//---------------- 學習補充---------------

const photos = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {

  const windowBottom = window.scrollY + window.innerHeight;
  
  photos.forEach((photo) => {
    let photoHalf = photo.offsetTop + photo.height / 2;
    if (windowBottom > photoHalf) {
      photo.classList.add('active');
    } else {
      photo.classList.remove('active');
    }
  })
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

