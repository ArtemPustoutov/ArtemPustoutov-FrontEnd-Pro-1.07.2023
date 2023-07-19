let a = prompt('Введите элементы через запятую');
let arr = a.split(',');
arr.sort();
alert(`Сортируем по возрастанию ${arr}`);
let remooved = arr.splice(1,3);
alert(`Удалили ${remooved}`);
alert(`Осталось ${arr}`);