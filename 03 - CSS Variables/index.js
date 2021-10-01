
//-----------------------第一次自己寫----------------------
// 這次沒用使用 CSS :root ，下次一定要使用
const title = document.querySelector('h2 span');
const photo = document.querySelector('img');
const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const controls = document.querySelector('.controls');

render(spacing, blur, base);

function render(spacingObj = spacing, blurObj = blur, baseObj = base) {
    let styleObj = {
        border: `${spacingObj.value}${spacingObj.getAttribute('data-sizing')} solid ${baseObj.value}`,
        blur: `blur(${blurObj.value}${blurObj.getAttribute('data-sizing')})`,
        color: `${baseObj.value}`,
    };
    title.style.color = styleObj.color;
    photo.style.border = styleObj.border;
    photo.style.filter = styleObj.blur;
}

controls.addEventListener('change', (e) => {
    const range = e.target.getAttribute('name');
    switch(range) {
        case 'spacing':
            render(spacing);
            break;
        case 'blur':
            render(spacing, blur);
            break;
        case 'base':
            render(spacing, blur, base);
            break;
    }
    
})
//-----------------------第一次自己寫----------------------