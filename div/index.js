let div = document.createElement('div');
div.classList.add('ghost');
document.body.appendChild(div);

function showDiv() {
    div.style.display = 'block';
}
function hideDiv () {
    div.style.display = 'none';
}

let input = document.getElementById('demo');
input.addEventListener('focus', showDiv);
input.addEventListener('blur', hideDiv);