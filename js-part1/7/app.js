const projektA = document.querySelector('.sum');
const projektB =document.querySelector('.minus');
const projektC = document.querySelector('.answer')
const projektD = document.querySelector('.poro')
const projektF = document.querySelector('.amount')


function sum (a, b){
    return a + b
}
function minus(a, b){
    return a - b
}
function multi(a, b){
    return a * b
}


const operasion = {
    sum:'+',
    minus:'-',
    multi: '*'

};

function actions({ a, b, opera}){
    let result = null;
   switch (opera) {
    case operasion.sum:
        result = sum(a, b)
        break;
    case operasion.minus:
        result = minus(a, b)
        break;
    case operasion.multi:
        result = multi(a, b)
    default:
        break;
   }

    return result
}
projektC.addEventListener('click', function(){
    const a =Number(projektA.value);
    const b = Number(projektB.value);
    const opera = projektD.value;

    const result = actions({ a, b, opera})
    projektF.innerHTML = result
})

document.querySelector(".addBtn").onclick = function () {
    if (document.querySelector("input").value === "") {
      alert("Pleasr enter a task");
    } else {
      document.querySelector(".tasks").innerHTML += `
      <div class= "task" >
         <span class= "taskName">
         ${document.querySelector("input").value}
      </span>
      <button class="delete">x</button>
      </div>`;
  
      //delete task
      let deleteTask = document.querySelectorAll(".delete");
      for (let i = 0; i < deleteTask.length; i++) {
        deleteTask[i].onclick = function () {
          this.parentNode.remove();
        };
      }
      //done task//
      let tasks = document.querySelectorAll(".taskName");
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
          this.classList.toggle("completed");
        };
      }
      document.querySelector("input").value = "";
      // document.querySelector(".newTask input").value = ""; Второй вариант
    }
  };