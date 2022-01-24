// 3* //
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault()
    window.history.back()
    
// 4* //
    const submitText = document.querySelector('submit')
    submitText.innerText = input.value;
    input.value = '';
    
}, true);


form.addEventListener('click', function(e) {
    e.preventDefault()
    
   
    console.log(e)
})
