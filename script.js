// 3* //
const memeForm = document.getElementById('formID')
const bodyClick = document.querySelector('body')

memeForm.addEventListener ('submit', function(e) {
    e.preventDefault()
   
    
    const topText = document.getElementById('top-text')
    console.log(topText)
    const botText = document.getElementById('bot-text')
    console.log(botText)
    console.log('Form submitted')
// 4* //
    // const submitText = document.querySelector('submit')
    // submitText.innerText = input.value;
    // input.value = '';
    
});

// currently just for click targets
bodyClick.addEventListener('click', function(e) {
    console.log(e.target)
})
