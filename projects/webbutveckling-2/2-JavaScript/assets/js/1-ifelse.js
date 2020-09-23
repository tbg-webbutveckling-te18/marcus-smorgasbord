// Greater than
var age = 33;
if (age >= 18) {
    console.log('Du får ta körkortet.');
} else {
    console.log();
}
// If something is equal too
var lesson = 'Web development';
if (lesson == 'History') {
    console.log('We have: ' + lesson);
} else if (lesson == 'Web development') {
    console.log('We have: ' + lesson);
} else {
    console.log('Spare time!');
}
var isSunny = false;
if (isSunny == true) {
    console.log('Put on some shorts today.');
} else {
    console.log('Put on some warm clothes today.');
}
// step 1
var d = new Date();

 if (d.getHours() <18){
     console.log("good day")
 }
  
 else {console.log("good evening")
}


if (d.getHours() <10) {
    console.log("good morning!")
} else if (d.getHours() <18 ) {
    console.log("good day!");
}else {
    console.log("good evening!");
}

// step 3
if (d.getHours() <10) {
    if(d.getMonth() > 9 || d.getMonth( <2)){
        console.log("go ahead and sleep")
    } else{
        console.log("good morning");    
    }

} else if (d.getHours() <18 ) {
    console.log("good day!");
}else {
    console.log("good evening!");
}