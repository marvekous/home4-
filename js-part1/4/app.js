var array = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var result = [];
for(var word of array ){
    if(result.includes(word))continue
    result.push(word);
 }
 console.log(result);


 //4.2-homework

var teg = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var currrentTeg = {};
for (var i = 0; i < teg.length; i++) {
var teg2 = teg[i]
if(currrentTeg.hasOwnProperty (teg2)) {
    currrentTeg [teg2] += 1
} else {
    currrentTeg[teg2] = 1
}
}
console.log(currrentTeg);
