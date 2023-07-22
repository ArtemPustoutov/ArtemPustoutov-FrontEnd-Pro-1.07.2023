//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let str = '';
for (n = 10; n < 21; n++) {
     str =(str += n) + ',';
}
alert( str );

//Вивести квадрати чисел від 10 до 20
let str2 = '';
for (n = 10; n < 21; n++) {
     str2 = (str2 += n**2) + ',';
}
alert( str2 );

//Вивести таблицю множення на 7
let i = 1; 
let msg = '';
while (i < 10) {
  msg+= i + ' x 7 = ' + (i * 7) + '<br>';  
  i++;
}
document.write(msg);


//Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
for (n = 1; n <= 15; n++) {
     sum += n;
}
alert(sum)

//Знайти добуток усіх цілих чисел від 15 до 35
let dob = 1;
for (n = 15; n <= 35; n++) {
     dob *= n;
}
alert(dob);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let ser = 0;
for (n = 1; n <=500; n++) {
     ser+=n / 500;
}
alert(ser);

//Вивести суму лише парних чисел в діапазоні від 30 до 80
let par = 0;
for (n = 30; n <=80; n++) {
     if(n / 2) {
          par+=n;
     }
}
alert(par);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let dea ='';
for (n = 100; n <=200; n++) {
     if( n % 3 == 0 ) {
          dea =(dea += n) + ',';
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
               summa +=i;
          }
     }
}
alert(count);
alert(summa);

//Надрукувати повну таблицю множення від 1 до 10.
for (i = 1; i <= 10; i = i + 1) {
     for (j = 1; j <= 10; j = j + 1) {
       let number = i * j;
       if (number <= 10) {
         document.write(" 0" + number + " ");
       } else {
         document.write(" " + number + " ");
       }
     }
     document.write("<br>");
}