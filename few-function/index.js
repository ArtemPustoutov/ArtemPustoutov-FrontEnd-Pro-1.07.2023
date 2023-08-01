//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr = [];
function average(arr) {
    sum = 0;
    result = 0;
    count = 0;
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) == false) {
            count++;
            sum += arr[i];
            result = sum / count;
        }   
    }
    return result;
}
console.log(average(arr));

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача
let x = +prompt('Введите число х')
let znak = prompt('введите знак знак для операции " +, -, *, /, %, ^ (ступінь )"')
let y = +prompt('Введите число y')

function calculator( x, znak, y) {
    if( znak === '+') {
        return x + y;
    } else if ( znak === '-') {
        return x - y;
    } else if ( znak === '*') {
        return x * y;
    } else if ( znak === '/') {
        return x / y;
    } else if ( znak === '%') {
        return x % y;
    } else if ( znak === '^') {
        return x ** y;
    } else {
        return alert ('Неизвестная операция');
    }
}
alert(calculator(x, znak, y));

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function userArr() {
    let long = +prompt('Введите количество массивов в первом массиве');
    let cell = +prompt('Введите количество елементов');
    let arr = new Array(long);
    for (i = 0; i < long; i++) {
        arr[i] = new Array(cell);
        for (j = 0; j < cell; j++){
            let mess = prompt('данные масива' + (i + 1));
            arr[i][j] = mess;
        }
    }
    return arr;
}
console.log(userArr());

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач

function replace_string(string, symbol){
    let delate = symbol.join('');
    return string.replace(new RegExp(`[${delate}]`, 'gi'), '')
}
console.log(replace_string('Hello World', ['l', 'd']))