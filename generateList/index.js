let array = [1, 2, [1.1, 1.2, 1.3], 3];
 
generateList(array);

function generateList(array) {
    let str = "<ul>";
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        if (Array.isArray(row)) {
            str += "<li><ul>";
            for (let j = 0; j < row.length; j++) {
                str += `<li>${row[j]}</li>`;
            }
            str += "</ul></li>";
        }
        else {
            str += `<li>${row}</li>`;
        }
    }
    str += "</ul>";
    document.body.innerHTML = str;
}