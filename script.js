
const memeForm = document.getElementById('formID')
const topText = document.getElementById('top-text')
const botText = document.getElementById('bot-text')
const memeUrl = document.getElementById('meme-img');

const bodyClick = document.querySelector('body')

bodyClick.addEventListener('click', function(e) {
    console.log(e)
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
parentContainerTop.append(newDivTop)
newDivTop.innerText = topText.value;
newDivTop.classList.add('top-text')
//    end top text div    //

//    start bot text div    //
const newDivBot = document.createElement('div')
const parentContainerBot = document.querySelector('.container')
parentContainerBot.append(newDivBot)
newDivBot.innerText = botText.value;
newDivBot.classList.add('bot-text')
//    end bot text div    //


};