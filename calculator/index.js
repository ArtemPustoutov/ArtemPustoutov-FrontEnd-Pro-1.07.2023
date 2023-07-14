let action = prompt('Выберите действие (add, sub, mult, div)');
let a = +prompt('Первое число');
let b = +prompt('Второе число');
switch(action) {
    case 'add':
        alert(`${a} + ${b} = ${a + b}`);
        break;
    case 'sub':
        alert(`${a} - ${b} = ${a - b}`);
        break;
    case 'mult':
        alert(`${a} * ${b} = ${a * b}`);
        break;
    case 'div':
        alert(`${a} / ${b} = ${a / b}`);
        break;
    case null:
        alert('Вы не выбрали действие');
        break;
    default:
        alert('Калькулятор не знает такого действия');
}