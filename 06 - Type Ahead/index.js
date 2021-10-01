const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
let cityData = [];

//取得資料
function getData() {
  axios.get(endpoint).then((res) => {
    cityData = res.data;
  }).catch((err) => {
    console.log(err);
  })
}

// 渲染資料
function renderData(data, searchValue, regex) {
  let str = '';
  data.forEach((item) => {
    const cityName = item.city.replace(regex, `<span class="hl">${searchValue}</span>`);
    const stateName = item.state.replace(regex, `<span class="hl">${searchValue}</span>`);
    str += `<li>
              <span>
                ${cityName}, ${stateName}
              </span>
              <span>${numberWithCommas(item.population)}</span>
            </li>`;
  })
  suggestions.innerHTML = str;
}

// 數字千分號(3位 + ",")
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 搜尋資料
function searchData(){
  const searchValue = this.value;
  const regex = new RegExp(searchValue, 'gi'); // 正規表達式
  const searchArray = cityData.filter(
    (item) => item.city.match(regex) || item.state.match(regex)
  )
  renderData(searchArray, searchValue, regex);
}

getData();

search.addEventListener('keyup', searchData);
