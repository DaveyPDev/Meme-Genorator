// 3* //
const memeForm = document.getElementById('formID')
const bodyClick = document.querySelector('body')

memeForm.addEventListener ('submit', function(e) {
    e.preventDefault()
//    start top text   //
    const topText = document.getElementById('top-text')
    topText.innerText = input.value;
    input.value = ''
    console.log(topText)
//   end top text    //
//    start bot text    //
    const botText = document.getElementById('bot-text')
    botText.innerText = ''
    console.log(botText)
    console.log('Form submitted')
//    end bot text   //
//    start url submit
    const memeUrl = document.createElement('img');
    memeUrl.src = '';
    newDiv.append(memeUrl)
//    end url submit    //
// 5*  //
//   start top text div   //
    const newDivImg = document.createElement('div')
    const parentContainerImg = document.querySelector('.container')
    parentContainerImg.append(newDivImg)
    newDivImg.innerText = 'test img'; // make it url?
    newDivImg.classList.add('meme-img')

//    end top text div    //
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
//    end bot text div    //.,mkjuy6t5 4
   
// 4* //
    // const submitText = document.querySelector('submit')
    // submitText.innerText = input.value;
    // input.value = '';
    
});



// currently just for click targets
bodyClick.addEventListener('click', function(e) {
    console.log(e.target)
})

