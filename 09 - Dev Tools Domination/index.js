
const pClick = document.querySelector('#test');
pClick.addEventListener('click', makeGreen);

const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Black', age: 5 },
];

function makeGreen() {
  this.style.color = '#BADA55';
  this.style.fontSize = '50px';
}

// Regular
console.log('ABCDE');

// Interpolated
console.log('hello %s', 'world'); // 替代字符的方式

// Styled
console.log('%c hello world', 'font-size:50px'); // 加入css

// warning!
console.warn('BB~! WARN!!'); // 警示符號

// Error :|
console.error('BBBBB~~~! ERROR!!!'); // 錯誤符號

// Info
console.info('You have information!!'); // 資訊符號

// Testing
console.assert( 1 === 1 , 'This is false');
console.assert(pClick.classList.contains('111'), 'wrong!');
// console.assert()若第一參數為false，則會輸出第二參數內容。

// clearing
// console.clear(); // 清除console畫面

// Viewing DOM Elements
console.log(pClick);
console.dir(pClick); // 查看被選取的dom元素屬性

// Grouping together
// console.groupCollapsed()、console.groupEnd() 可以把陣列資料組合好
dogs.forEach((item) => {
  console.groupCollapsed(`${item.name}`);
  console.log(`This is ${item.name}`);
  console.log(`${item.name} is ${item.age} years old`);
  console.log(`${item.name} is ${item.age * 7} dog years old`);
  console.groupEnd(`${item.name}`);
})

// counting
// console.count() 可以計算出現次數
console.count('A');
console.count('B');
console.count('C');
console.count('B');
console.count('B');
console.count('A');

// timing
// console.tiem() ~ console.timeEnd() 可以計算這之間執行的時間
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

// table
console.table(dogs); // 把 array 資料用表格型式輸出