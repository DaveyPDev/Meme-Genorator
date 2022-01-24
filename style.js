// 3*

const form = document.querySelector('body');



form.addEventListener('submit', function(e) {
    e.preventDefault()
    window.history.back()
    
}, true);

form.addEventListener('click', function(e) {
    console.log(e.target)
})
