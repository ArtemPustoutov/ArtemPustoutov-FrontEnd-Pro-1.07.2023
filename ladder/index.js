// let ladder = {
//     step: 0,
//     up: function () {
//         this.step++;
//     },
//     down: function () {
//         this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//     }
//}

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { 
        alert(this.step);
    }
}