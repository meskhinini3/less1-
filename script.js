 
// #1
let numberOfUsers = 100 ;
if (numberOfUsers < 20) {
    console.log(  "<50");
}
else if (numberOfUsers > 20){
    console.log(">20");
}
 else {
console.log("error")
}

// let userName = mariam 
// if (userName == mariam) {
//     console.log (true)
// }
// else {
//     console.log (error)
// }


//   #2
let userName = "mariam";
let result = ( userName == "mariam" ) ? "true" : "false"
console.log (result);


// #3
let userName1  = "Mariam" ; 
switch(userName1) {
case "Mariam":
 console.log("true");
 break;
default:
    console.log("false");
}