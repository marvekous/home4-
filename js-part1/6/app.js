let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let number = 0;

buttonCountPlus.onclick = function() {
    if (number <= Infinity + 0) {
        number++;
        count.innerHTML = number;

    }
};

buttonCountMinus.onclick = function() {
   if (number >= -9) {
       number--;
       count.innerHTML = number;

    }
};


//2) homework
const div = document.createElement('div')
const body = document.querySelector('body')
body.appendChild(div)
let text = 'отправлено'
const ul = `
<button>click</button>
<button>click</button>
<button>click</button>
<button>click</button>`

div.innerHTML = ul
body.addEventListener('click', function(){
    text 
    console.log(text);  
})






