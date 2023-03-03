const word = function reverseWord(str) {
    var newWord = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newWord += str[i];
    }
    return newWord;
}

console.log(word(' урок история'));



// homework 5.1
const num = [5, 7, 8, 9, 10, 22, 30];
const getAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {sum += numbers[i];
    }
    return sum / numbers.length;};

    console.log(getAverage(num));