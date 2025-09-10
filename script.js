function doFunction()
{
    let inputText = document.querySelector("#input").value
    let str = String(inputText);

    document.querySelector("#length").innerText="Length: "+str.length
    document.querySelector("#upper").innerText="Upper Case: "+str.toUpperCase()
    document.querySelector("#lower").innerText="Lower Case: "+str.toLowerCase()

    let len = str.length;
    let midN = (len - (len % 2)) / 2;
    let middle = (len % 2 === 0)? str[midN - 1] + str[midN] : str[midN];
    document.querySelector('#middle').innerText ="Middle Character: "+ middle;

    let wcount = 0, inWord = false;
    for (let ch of str) {
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || (ch === '_')) {
            if (!inWord) {
                wcount++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    document.querySelector('#total').innerText ="Words Count: " +wcount;

    let consonants = 0;
    let vowels = 0;
    for (let ch of str) {
        if (ch == "A" || ch == "a" ||ch == "E" ||ch == "e" ||ch == "I" ||ch == "i" ||ch == "O" ||ch == "o" || ch == "U" ||ch == "u") {
            vowels++;
        } else if (ch !== ' ' && !(ch >= '-0' && ch <= '9')) {
            consonants++;
        }
    }
    document.querySelector('#Consonants').innerText ="Constant count: " +consonants;
    document.querySelector('#vowel').innerText ="Vowels count: " +vowels;


let result = "";
let tf = false;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if ((ch === " " || ch === "_" || ch === "-")){
        tf = true;
    }else{
        if(tf){
            result += str[i].toUpperCase(); 
            tf=false;
        }else 
            result += ch.toLowerCase();
    }
}
document.querySelector('#camel').innerText = "Camel Case: " +result;
}