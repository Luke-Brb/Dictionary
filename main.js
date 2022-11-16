let dictionary = [];
const addWords = (ev)=>{
    ev.preventDefault();
    let inputWord = document.getElementById('word').value;
    const popMessage = document.getElementById('newMessage');
    popMessage.textContent = ' ';
    let found = 0;
    for (let i = 0; i < dictionary.length; i++, found == 0) {
        if (inputWord === dictionary[i]) {
            popMessage.textContent = 'The word already exists in the dictionary!';
            found = 1;
        }
    }       
    if (found === 0) {
        dictionary.push(inputWord);
        popMessage.textContent = 'The word has been saved in the dictionary!';
    }
    document.forms[0].reset();
}
const checkWords = (ev)=>{
    ev.preventDefault();
    let checkWord = document.getElementById('cword').value;
    const popMessage = document.getElementById('newMessage');
    popMessage.textContent = ' ';
    let found = 0;
    for (let j = 0; j < dictionary.length; j++, found == 0) {
        if (checkWord === dictionary[j]) {
            popMessage.textContent = 'The word is in the dictionary!';
            found = 1; 
        }
    }
    if (found === 0) {
        popMessage.textContent = 'The word must be added to the dictionary to be found!';  
    }
    document.forms[1].reset();
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addWords);
    document.getElementById('cbtn').addEventListener('click', checkWords);
});
