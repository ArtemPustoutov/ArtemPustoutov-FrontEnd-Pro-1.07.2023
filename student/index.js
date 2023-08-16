class Student {
    constructor(name, surName, bornYear, grade,) {
        this.name = name;
        this.grade = grade;
        this.surName = surName;
        this.bornYear = bornYear;
        this.visit = new Array(25);
        return name + surName + bornYear;
    }
    info() {
         return console.log(`Student: ${this.name} ${this.surName} ${this.bornYear}`)
    }
    gradePoint() {
        let sum = 0;
        for ( let i = 0; i < this.grade.length; i++) {
            sum += this.grade[i];
            this.point = sum / this.grade.length;
        }
        return console.log(`Средний бал ${this.point}`);
    }
    present() {
        for( let i = 0; i < this.visit.length; i++) {
            if(this.visit[i] == undefined) {
                this.visit[i] = true;
                return this.visit;
            }
        }
    }
    apsent() {
        for( let i = 0; i < this.visit.length; i++) {
            if(this.visit[i] == undefined) {
                this.visit[i] = false;
                return this.visit;
           }
        }
    }
    sumaru() {
        let countApsent = 0;
        let countPresent = 0;
        let classes = 0;
        let rating = 0;
        this.countPresent = countPresent;
        this.countApsent = countApsent;
        this.classes = classes;
        this.rating = rating;
        for (let i = 0; i < this.visit.length; i++) {
            if (this.visit[i] == true) {
                 this.countPresent++;
            } else if (this.visit[i] == false) {
                this.countApsent++;
            }
            this.classes = this.countPresent + this.countApsent ;
            this.rating = this.countPresent / this.classes;
        }
        switch(true) {
            case (this.point >= 90 && this.rating >= 0.9):
                console.log(`Средняя оценка ${this.point} посещения ${this.rating} : Молодець! `);
                break;
            case (this.point < 90 && this.rating < 0.9):
                console.log((`Средняя оценка ${this.point} посещения ${this.rating} : "Редиска!" `));
                break;
            default:
                console.log(`Средняя оценка ${this.point} посещения ${this.rating} : Добре, але можна краще `);
                break;
        }
    }
}

let andriy = new Student('andriy', 'kolomaka', 1989, [70, 65, 100, 95, 100]);
let kolya = new Student ('nikolay', 'miroshnik', 1992, [100, 100, 90, 100, 100, 90]);
let semen = new Student ('semen', 'kozakov', 1993, [89, 89, 89, 88, 85]);

kolya.info(); // == информация про студента
kolya.gradePoint(); // == средняя оценка
kolya.present(); // == визит true
kolya.present();
kolya.present();
kolya.present();
kolya.present();
kolya.present();
kolya.present();
kolya.present();
kolya.present();
kolya.apsent(); // == визит фолс
kolya.sumaru(); // = среднее значение віводит среднюю оценку и посещеия занятий
andriy.info();
andriy.gradePoint();
andriy.present();
andriy.present();
andriy.apsent();
andriy.sumaru()
//console.log(kolya.visit); при желании модно посмотреть или вывести в консоль журнал визитов
semen.info();
semen.gradePoint();
semen.present();
semen.present();
semen.present();
semen.sumaru();

