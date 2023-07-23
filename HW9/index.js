//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let str = '';
let n = 1
for (n = 10; n < 21; n++) {
     str += n + ',';
}
alert( str );

//Вивести квадрати чисел від 10 до 20
let str2 = '';
let e = 1;
for (e = 10; e < 21; e++) {
     str2 += e**2 + ',';
}
alert( str2 );

//Вивести таблицю множення на 7
let i = 1;
let msg = '';
while (i < 10) {
  msg += `${i} x 7 = ${i * 7} <br>`;
  i++;
}
document.write(msg);


//Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
let r = 1;
for (r = 1; r <= 15; r++) {
     sum += r;
}
alert(sum);

//Знайти добуток усіх цілих чисел від 15 до 35
let dob = 1;
let q = 1;
for (q = 15; q <= 35; q++) {
     dob *= q;
}
alert(dob);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let ser = 0;
let y = 1;
for (y = 1; y <= 500; y++) {
     ser += y / 500;
}
alert(ser);

//Вивести суму лише парних чисел в діапазоні від 30 до 80
let par = 0;
let u = 1;
for (u = 30; u <= 80; u++) {
     if(u / 2) {
          par += u;
     }
}
alert(par);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let dea ='';
let o = 1;
for (o = 100; o <= 200; o++) {
     if( o % 3 == 0 ) {
          dea += o + ',';
     }
}
alert(dea);

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників. COUNT
//Знайти суму його парних дільників. SUMMA
let Num = x;
let count = 0;
let summa = 0;
for (let i = 2; i * 2 <= x; i++) {
     if ( x % i == 0) {
          alert( i );
          if (i % 2 ==0) {
               count++;
               summa += i;
          }
     }
}
alert(count);
alert(summa);

//Надрукувати повну таблицю множення від 1 до 10.
let m = 1;
let number;
for (m = 1; m <= 10; m = m + 1) {
     for (j = 1; j <= 10; j = j + 1) {
       let number = m * j;
       if (number <= 10) {
         document.write(" 0" + number + " ");
       } else {
         document.write(" " + number + " ");
       }
     }
     document.write("<br>");
}