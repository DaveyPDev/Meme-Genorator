// 3* //
const memeForm = document.getElementById('formID')
const topText = document.getElementById('top-text')
const botText = document.getElementById('bot-text')
const memeUrl = document.getElementById('img');

memeForm.addEventListener ('submit', function(e) {
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

function memeGen (url, topText, botText) {

//    start img div    //
const newDivImg = document.createElement('div')
const parentContainerImg = document.querySelector('.container')
parentContainerImg.append(newDivImg)
newDivImg.innerText = 'test img'; // make it url?
newDivImg.classList.add('meme-img')
//    end img div    //

//   start top text div   //
const newDivTop = document.createElement('div')
const parentContainerTop = document.querySelector('.container')
parentContainerTop.append(newDivTop)
newDivTop.innerText = 'test top';
newDivTop.classList.add('top-text')
//    end top text div    //

//    start bot text div    //
const newDivBot = document.createElement('div')
const parentContainerBot = document.querySelector('.container')
parentContainerBot.append(newDivBot)
newDivBot.innerText = 'test bot';
newDivBot.classList.add('bot-text')
//    end bot text div    //


input.value = ''
};