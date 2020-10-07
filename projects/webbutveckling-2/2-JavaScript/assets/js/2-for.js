for(var i = 0; i < 10; i++) {
    document.writeln("Count is: " + i + "<br>");
}

document.writeln("-----------------------------------<br>");


for(var count = 1; count < 13; count ++) {
    document.writeln("Count is: " + i + "<br>");
}

document.writeln("-----------------------------------<br>");


var str = "Hello World!";

// document.writeln(str[0]);

for (var i = 0; i < str.length; i++) {
    document.writeln(str[i]);
}

document.writeln("<br>-----------------------------------<br>");


var codeArr = ["CSS", "HTML", "JS", 33, true]; 
var len = codeArr.length;
for(var i =0; i < len; i++) {
    document.writeln("Language:" + codeArr[i] + "<br>");
}

document.writeln("-----------------------------------<br>");

for(var i = 1; i < 366; i++) {
    if(i % 2 === 0) {
        document.writeln("Even dates: " + i + "<br>");
    }
}


for(var i = -10; i < 20; i ++) {
    document.writeln("Count is:" + i + "<br>" );
}

document.writeln("-----------------------------------<br>");


for(var i= 10; i <41; i++){
    if(i % 2 ===0){
        document.writeln("Even numbers:" + i + "<br>");
    }
}

document.writeln("-----------------------------------<br>");
for(var i= 300; i < 334; i++){
    if(i % 2 !==0){
        document.writeln("odd numbers:" + i + "<br>");
    }
}


document.writeln("-----------------------------------<br>");


// Nested for loops
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


for(var i = 0; i <5; i++) {
    for(var j = 0; j < 5; j++){
        document.writeln("*");
    }
    document.writeln("<br>");
}

for (var i =0; i < 11; i++){
    for (var j = 0; j < 11; j++) {
        document.writeln(i * j)
    }
    document.writeln("<br>")
    
}

var gamesArr = ["lol", "cs", "pac", "dota 2"];
var len = gamesArr.length;
for (var i =0; i<len; i++) {
    var choice = i+1;
    var suffix;

    if(choice ===1){
        suffix = "st";
       
    }
    else if (choice ===2){
        suffix = "nd";
    }
    else if (choice ===3){
        suffix = "rd";
    }else{
        suffix = "th";
    }
    document.writeln("My" + choice + suffix + "choice is" + choices[i] + "<br>");
    
    
}