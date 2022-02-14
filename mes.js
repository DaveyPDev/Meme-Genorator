const memeForm = document.getElementById('formID')
const topText = document.getElementById('top-text')
const botText = document.getElementById('bot-text')
const memeUrl = document.getElementById('meme-img');
const mainDiv = document.querySelector(".container")
 
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
   const newDivImg = document.createElement('div');
   const memeImg = document.createElement('img');
   memeImg.classList.add('meme-img');
   memeImg.setAttribute('src', memeUrl);
   newDivImg.append(memeImg);
   //    end img div    //
 
   //   start top text div   //
   const newDivTop = document.createElement('p')
   newDivTop.innerText = topText;
   newDivTop.classList.add('top-text');
   newDivImg.append(newDivTop);
   //    end top text div    //
 
   //    start bot text div    //
   const newDivBot = document.createElement('p');
   newDivBot.innerText = botText;
   newDivBot.classList.add('bot-text');
   newDivImg.append(newDivBot);
   //    end bot text div    //
 
   //    start remove button    //
   const removeBtn = document.createElement('button');
   removeBtn.innerText = 'X';
   removeBtn.classList.add('removeBtn');
   newDivImg.append(removeBtn);
   //    end remove button    //
 
   mainDiv.append(newDivImg);
};
 
mainDiv.addEventListener('click', function(e) {
   if( e.target.tagName === 'BUTTON') {
       e.target.parentElement.remove();
   }
})
