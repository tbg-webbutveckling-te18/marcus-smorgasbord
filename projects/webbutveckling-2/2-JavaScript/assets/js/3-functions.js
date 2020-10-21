/* 
    function functionName(parameter1, parameter2) {
        // code block
    }
*/
// Blinka lilla stjärna
document.writeln('Blinka lilla stjärna där <br>');
document.writeln('hur jag undrar var du är <br>');
document.writeln('Fjärran lockar du min syn <br>');
document.writeln('lik en diamant i skyn <br>');
document.writeln('<br>');
// Sjung den igen
document.writeln('Blinka lilla stjärna där <br>');
document.writeln('hur jag undrar var du är <br>');
document.writeln('Fjärran lockar du min syn <br>');
document.writeln('lik en diamant i skyn <br>');
document.writeln('<br>');
// Detta är inte vad programmeringsvärlden skulle kalla DRY code!
// DRY - Do not Repeat Yourself
// Motsatsen till DRY är WET
// WET - Write Everything Twice
// Decalare a function without parameters
function twinkle() {
    document.writeln('Blinka lilla stjärna där <br>');
    document.writeln('hur jag undrar var du är <br>');
    document.writeln('Fjärran lockar du min syn <br>');
    document.writeln('lik en diamant i skyn <br>');
    document.writeln('<br>');
}
// Call a function (På svenska: anropa)
twinkle();
twinkle();
/*
***************************************
            Arguments
***************************************
*/
// Decalare a function with parameters
function square(num) {
    document.writeln(num * num);
}
// Call a function with one argument
square(10);
square(5);
square('A'); // NaN
square(''); // 0
/*
***************************************
             Return
***************************************
*/
function area(width, height) {
    return width * height;
}
document.writeln('<br> The area is: ' + area(5, 10));
var result = area(6, 9);
document.writeln(result);
function quadrupleMe(x) {
    return 4 * x;
}
var myNumber = quadrupleMe(4);
// Select element
var btnNumber = document.getElementById('myNumber');
// Manipulate element
btnNumber.innerHTML = '<strong>My favourite</strong> number is: ' + myNumber;
// Funktion för att göra första bokstaven stor
function capitalize(str) {
    return str.charAt('').toUpperCase() + str.slice(1);
}
var city = 'stockholm';
var capital = capitalize(city);
document.writeln('<br> Capital of Sweden is: ' + capital);
/*
***************************************
            muntligt test
***************************************
*/
// Test 1
// Förklara vad som händer
function test1(x, y) {
    return y - x;
}
document.writeln(test1(10, 40));
// Test 2
// Förklara vad som händer
function test2(x) {
    return x * 2;
    document.writeln(x);
    return x / 2;
    document.writeln(x);
}
document.writeln(test2(40));
/*
*************************************** 
        skriftligt test
***************************************
*/
// Test 1
// Write a function isEven() which takes a single numeric
// argument and returns true if the number is even,
// and false otherwise
// Call the function a few times
// Test 2
// Write a function kebabToSnake() which takes
// a single kebab-cased string
// Argument and returns the snake_cased version
// Basically replace "-" with "_"
// Call the function a few times
// Example of kebab-case:
// Hej-jag-heter-Dennis --> Hej_jag_heter_Dennis
function kebabToSnake(str) {
    var snakeCasedStr = str.replaceAll('-', '_');
    return snakeCasedStr;
}
document.writeln(kebabToSnake('<br>' + 'Hej-jag-heter-Dennis'));
/*
***************************************
            JS Scope
***************************************
*/
var p = document.getElementById("scopes");


function localScope (){
    var localVar = 31;
    p.innerHTML = localVar;

}

localScope();

var globalVar = "This is a global variable";
p.innerHTML = globalVar;
p.style.fontSize = "20 px";
p.style.color = "#639";

function changeGlobalVar() {
    globalVar = "ha ah i got a new value now";
    p.innerHTML = globalVar ;
}


changeGlobalVar();


function tricky(){
    var globalVar = "Am i a local variable";
}
tricky();

p.innerHTML = globalVar;




