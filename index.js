/* eslint-env es6 */
/* eslint-disable no-console */
let tg = window.Telegram.WebApp;

tg.expand();

const coinBtn = document.querySelector('.coin');
const handleClick = (event) => {
    console.log('Click');
    const clickValString = document.querySelector('.income-val-tap');
    const coinCount = document.querySelector('.count-name');
    const clickVal = clickValString.textContent.substring(1);
    
    let newVal = Number(coinCount.textContent) + Number(clickVal);
    
    coinCount.textContent = newVal;
}

coinBtn.addEventListener('click', handleClick);