const formA = document.querySelector('form')
const answer = document.querySelector('.answer')
const input = document.getElementById('email')
const err = document.getElementById('para')
answer.addEventListener('click', function(){
    const testt = /.+\@\w+\.\w/
    if(testt.test(input.value)){
        alert('вы успешно зарегистрировались')
        err.style.color = 'black'
input.style.borderBlockColor = 'black'
err.textContent = ''
    }
    else{
err.textContent = 'вы не правильно вели email'
err.style.color = 'red'
input.style.borderBlockColor = 'red'
    }   
})