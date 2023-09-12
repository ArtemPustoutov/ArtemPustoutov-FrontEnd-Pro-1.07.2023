let card = document.createElement('div');
let comment = document.createElement('input');
let commentCard = document.createElement('div');
let commentText = document.createElement('div');
let input = document.getElementById('info');
input.style.width = '150px'
comment.setAttribute('type', 'button');
comment.setAttribute('value', 'Get comment');

let showId = function() {
    let postId = document.getElementById('info').value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
        if(!response.ok) {
            throw Error(`is not ok:  ${response.status}`);
        }
        return response.json()
    })
    .then((data) => {
        let title = data.title;
        let ID = data.id;
        let postBody = data.body;
        card.innerHTML = `
        <h2> Title: ${title}</h2>
        <p>ID: ${ID} </p>
        <p>Body : ${postBody}</p>
        `
        document.body.appendChild(card);
        card.append(comment);
        card.append(commentCard);
    })
    .catch((err) => {
        console.log('catch', err)
    })
}

let printComment = function() {
    let postId = document.getElementById('info').value;
    commentCard.innerHTML = ' ';
    let commentPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    commentPromise
    .then((response) => response.json())
    .then((data) => {
        data.forEach(function(obj){
            let textComment = ''
            for (var key in obj){
                textComment += (`<br>${key}: ${obj[key]}`)
            }
            commentCard.innerHTML += `
            <p>${textComment}</p>
            `
            card.append(commentCard)
        });
    })
}

let clearPage = function() {
    card.innerHTML = ' ';
    commentCard.innerHTML = ' ';
}
butt.addEventListener('click', showId);
input.addEventListener('click', clearPage);
comment.addEventListener('click', printComment);