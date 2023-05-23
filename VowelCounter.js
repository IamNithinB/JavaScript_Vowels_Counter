

function vowelCounter(str) {
    var InputValue = document.getElementById("inputText")
    var counterCircle = document.getElementsByClassName("counterCircle")
    
    vowels = ['a','e','i','o','u']
    counter = 0;
    str = str.toLowerCase()
    for (let letter of str) {
        if(vowels.includes(letter)){
            counter ++;
        }
        counterValue.innerHTML = counter;
    }
}