let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//Знайти суму та кількість позитивних елементів.
let sum  = 0;
let quan = 0;
for (n = 0; n < arr.length; n++) {
    if (arr[n] > 0) {
        sum += arr[n];
        quan += arr[n] > 0;
    }
}
console.log(sum); // Сумма позитивных элементов
console.log(quan) // Количество позитивных элементов

//Знайти мінімальний елемент масиву та його порядковий номер.
let min = Math.min(...arr);
console.log(min);                //Минимальный элемент
let ind = arr.indexOf(min);
console.log(ind);               //Индех Минимального елемента

//Знайти максимальний елемент масиву та його порядковий номер
let max = Math.max(...arr);
let maxInd = arr.indexOf(max);
console.log(max);               //Максимальный елемент
console.log(maxInd);            //Индекс максимального елемента

//Визначити кількість негативних елементів.
let deny = 0;
for (n = 0; n < arr.length; n++) {
    if(arr[n] < 0) {
        deny += arr[n] < 0;
    }
}
console.log(deny);              // Количество негативных элементов

//Знайти кількість непарних позитивних елементів.
let notParied = 0;
for (n = 0; n < arr.length; n++) {
    if (arr[n] > 0 && arr[n] % 2 !== 0) {
        notParied += arr[n] > 0 && arr[n] % 2 !== 0;
    }
}
console.log(notParied);         // Количество не парных позитивных элементов;

//Знайти кількість парних позитивних елементів
let paried = 0;
for (n = 0; n < arr.length; n++) {
    if (arr[n] > 0 && arr[n] % 2 == 0) {
        paried += arr[n] > 0 && arr[n] % 2 == 0;
    }
}
console.log(paried);            // Количество парніх позитивных элементов

//Знайти суму непарних позитивних елементів.
let SumNotParied = 0;
for (n = 0; n < arr.length; n++) {
    if (arr[n] > 0 && arr[n] % 2 !== 0) {
        SumNotParied += arr[n];
    }
}
console.log(SumNotParied);         //Cумма не парных позитивных элементов

//Знайти суму парних позитивних елементів
let SumParied = 0;
for (n = 0; n < arr.length; n++) {
    if (arr[n] > 0 && arr[n] % 2 == 0) {
        SumParied += arr[n];
    }
}
console.log(SumParied);             //Cумма парних позитивних елементів

//Знайти добуток позитивних елементів.
let dob = 1;
for (n = 0; n < arr.length; n++) {
    if (arr[n] > 0) {
        dob *= arr[n];
    }
}
console.log(dob);                   //добуток позитивних елементів.

//Знайти найбільший серед елементів масиву, остальні обнулити
let maximum = Math.max(...arr);
let newRes = arr.map(n => n == maximum ? n : 0);
console.log(newRes);                //Новый масив где только наибольшее значение остальное 0
