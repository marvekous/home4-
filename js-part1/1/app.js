var month = prompt('Введите месяц рождения: ')
var day = prompt("Введите число рождения: ")

if(
    day >= 21 && day <= 31 && month === 'Март'  || 
    day <= 19 && day >= 1 && month === 'Апрель' 
    ){
        console.log('ОВЕН')
    }
else if(
    day >= 21 && day <= 30 && month === 'Апрель' ||
    day <= 21 && day >= 1 && month === 'Май' 
    ){
        console.log('ТЕЛЕЦ')
    }
else if(
    day >= 22 && day <= 31 && month === 'Май' ||
    day <= 21 && day >= 1 && month === 'Июнь' 
    ){
        console.log('БЛИЗНЕЦЫ')
    }
else if(
    day >= 22 && day <= 30 && month === 'Июнь'||
    day <= 22 && day >= 1 && month === 'Июль' 
   
    ){
        console.log('РАК')
    }
else if(
    day >= 23 && day <= 31 && month === 'Июль' ||
    day <= 23 && day >= 1 && month === 'Август'
    ){
        console.log('ЛЕВ')
    }
else{
    console.log('Не корректные данные');
}