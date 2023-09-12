// let array = [1, 2, [1.1, 1.2, 1.3], 3];
 
// generateList(array);

// function generateList(array) {
//     let str = "<ul>";
//     for (let i = 0; i < array.length; i++) {
//         let row = array[i];
//         if (Array.isArray(row)) {
//             str += "<li><ul>";
//             for (let j = 0; j < row.length; j++) {
//                 str += `<li>${row[j]}</li>`;
//             }
//             str += "</ul></li>";
//         }
//         else {
//             str += `<li>${row}</li>`;
//         }
//     }
//     str += "</ul>";
//     document.body.innerHTML = str;
// }
let array = [1, 2, [1.1,[6, 7, 8] , 1.3], 3];

let generateList = function generateList(array) {
    let ul = document.createElement('ul');
    array.forEach(function(element) {
        let childElement;
        let li = document.createElement('li');
        if(Array.isArray(element)) {
            childElement = generateList(element);
        }else {
            childElement = document.createTextNode(element);
        }
        li.appendChild(childElement);
        ul.appendChild(li);
    });
    return ul;
}

document.body.appendChild(generateList(array));