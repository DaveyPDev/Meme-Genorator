
const memeForm = document.getElementById('formID')
const topText = document.getElementById('top-text')
const botText = document.getElementById('bot-text')
const memeUrl = document.getElementById('meme-img');
const bodyClick = document.getElementById('container')

bodyClick.addEventListener('click', function(e) {
  
    if( e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})

    memeForm.addEventListener ('submit', function(e) {
    // 3* //
    e.preventDefault()
    memeGen(memeUrl.value, topText.value, botText.value);
    memeUrl.value = '';
    topText.value = '';
    botText.value = '';
});

function memeGen (memeUrl, topText, botText) {

//    start img div    //
    const newDivImg = document.createElement('div')
    const parentContainerImg = document.querySelector('.container')
    const memeImg = document.createElement('img')
    parentContainerImg.append(newDivImg)

    memeImg.classList.add('meme-img')
    newDivImg.append(memeImg)
    memeImg.setAttribute('src', memeUrl)
//    end img div    //

//   start top text div   //
    const newDivTop = document.createElement('p')
    const parentContainerTop = document.querySelector('.container')
    parentContainerTop.append(newDivTop)
    newDivTop.innerText = topText;
    newDivTop.classList.add('top-text')
//    end top text div    //

//    start bot text div    //
    const newDivBot = document.createElement('p')
    const parentContainerBot = document.querySelector('.container')
    parentContainerBot.append(newDivBot)
    newDivBot.innerText = botText;
    newDivBot.classList.add('bot-text')
//    end bot text div    //

//    start remove button    //
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'X'
    newDivImg.appendChild(removeBtn);
    removeBtn.classList.add('removeBtn')
//    end remove button    //
};