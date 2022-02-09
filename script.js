
const memeForm = document.getElementById('formID')
const topText = document.getElementById('top-text')
const botText = document.getElementById('bot-text')
const memeUrl = document.getElementById('meme-img');
const bodyClick = document.querySelector('body')

bodyClick.addEventListener('click', function(e) {
    console.log(e)

    if( e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})

memeForm.addEventListener ('submit', function(e) {
    // 3* //
    e.preventDefault()
//    start top text   //
//   end top text    //
//    start bot text    //
//    end bot text   //
//    start url submit
   
// 5*  //
//   start top text div   //
  
//    end bot text div    //
   
// 4* //
    // const submitText = document.querySelector('submit')
    // submitText.innerText = input.value;
    // input.value = '';
    
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
memeUrl = ''
//    end img div    //

//   start top text div   //
const newDivTop = document.createElement('div')
const parentContainerTop = document.querySelector('.container')
parentContainerTop.appendChild(newDivTop)
newDivTop.innerText = topText;
newDivTop.classList.add('top-text')
// newDivTop.setAttribute('p', topText)
topText = ''
//    end top text div    //

//    start bot text div    //
const newDivBot = document.createElement('div')
const parentContainerBot = document.querySelector('.container')
parentContainerBot.appendChild(newDivBot)
newDivBot.innerText = botText;
newDivBot.classList.add('bot-text')
// newDivBot.setAttribute('p', botText)
botText = ''
//    end bot text div    //

//    start remove button    //
const removeBtn = document.createElement('button')
removeBtn.innerText = 'X'
newDivImg.appendChild(removeBtn);
removeBtn.classList.add('removeBtn')
//    end remove button    //
};