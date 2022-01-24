// 3* //

const form = document.querySelector('form');



form.addEventListener('submit', function(e) {
    e.preventDefault()
    window.history.back()
    
    
}, true);


form.addEventListener('click', function(e) {
    e.preventDefault()
     // 4* //
    // Looking to add submitted text //
    const submitText = document.querySelector('submit')
    submitText.innerText = input.value;
    input.value = '';
    // submit text //
    console.log(e)
})
