let div = document.createElement('div');
div.classList.add('ghost');

function showDiv() {
    document.body.appendChild(div);
    div.style.position = 'absolute';
    div.style.display = 'inline-block';
    div.style.left = '250px';
    div.style.top = '50px';
}
function hideDiv () {
    div.style.display = 'none';
}

let input = document.getElementById('demo');
input.addEventListener('focus', showDiv);
input.addEventListener('blur', hideDiv);