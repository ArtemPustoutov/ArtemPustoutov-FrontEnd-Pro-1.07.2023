let arr = [1, 2, 3, 4, 5, 6, 7];
function removeElemet(arr,val ) {
    let index = arr.indexOf(val);
    arr.splice(index,1);
    return arr;
}
// removeElemet(arr, 4)      //Тут вводим индех обьекта который хотим удалить, например вызываем функцию
// console.log(arr);        // Наш массив без этого элемента; [1, 2, 3, 5, 6, 7]