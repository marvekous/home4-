var summa = 0;
var number = 0; 
do{
summa += number; 
number = parseInt(prompt('Введите число: '));
}while (number > 0);

console.log('Сумма введенных положительных чисел: ', (summa));