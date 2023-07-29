const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey (length, characters) {
    let newWord = ''
    for(let i = 0; i < length; i++) {
        newWord += characters[Math.round(Math.random() * characters.length)];
    }
    return newWord;
}
let key = generateKey(8, characters);
console.log(key);