//Challenge-1
function ageInDays() {
var birthYear= prompt('What year were you born...good friend?');
var ageInDayss=(2021-birthYear) * 365;
var h1= document.createElement('h1');
var textAnswer= document.createTextNode('You are '+ ageInDayss + 'days old');
h1.setAttribute('id','ageInDayss');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDayss').remove();
}

//Challenge 2- Cat generator
function generateCat() {
    var image= document.createElement('img');
    var divi= document.getElementById('flex-cat-gen');
    image.src ="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    divi.appendChild(image);
}