let table = document.createElement('table');

for(let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for(let i = 0; i < 10; i++) {
        let td = document.createElement('td');
        td.innerText = Math.floor(Math.random() * 100) + 1;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);