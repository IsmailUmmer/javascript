// WINDOW ALERT 


// window.alert(`hello`);
// document.getElementById(`btn`).innerHTML = ' peresed'
// let fullName = "ismail";
// let age = 10;
// let course = false;

// document.getElementById("p1").textContent = `my name is ${fullName}` ;
// document.getElementById("p2").textContent = ` my age is ${age}`;
// document.getElementById("p3").textContent= `is enrolled for course ? = ${course}`;

// let x = 30;

// console.log(x);
//  let age = window.prompt("enter your age");
//  age = Number(age);
//  age+=1;

//  console.log(age);

// let userName;

// document.getElementById("submitbtn").onclick = function(){
//    userName = document.getElementById("text").value;
//    console.log(userName);
//     document.getElementById("head").textContent = (`hello ${userName}`);
    
// }
// --------------------------------------------------------------------------//
//MATH OPERATORS

// console.log(Math.PI);

// let x = 3.24;
// let z;
// // z = Math.round(x);
// // z = Math.floor(x);
// // z = Math.ceil(x);
// // z = Math.trunc(x);
// z = Math.abs(-x);

// console.log(z);

//-------------------------------------------------------------------------------------------------------------

// TERNARY OPERATOR

// let age = 2;
// let message = age>= 18 ? "you are fit to enter this site" : "you are not fit to enter this site";
// console.log(message);

// let time = 15;

// const message=time <=12 ?"good morning" : "good everngiting";
// console.log(message);

// let purchaseamt = 125;
// let discount = purchaseamt >=100 ? 10: 0;
// purchaseamt= purchaseamt-purchaseamt*(discount/100);
// console.log(`your amount is ${purchaseamt} after discount ${discount}% totoal amount is ${purchaseamt}`);

//----------------------------------------------------------------------------------------------------------------------------
 // SWITCH CASE

// let day = " 1" ;

// switch (day){
//     case 1:
//         console.log("day is monday");
//         break;
//     case 2:
//         console.log("day is tuesday");
//         break;
//     case 3:
//         console.log("day is wednesday");
//         break;
//     case 4:
//         console.log("day is thursday");
//         break;
//     case 5:
//         console.log("day is friday");
//         break;
//     case 6:
//         console.log("day is saturday");
//         break;
//     case 7:
//         console.log("day is sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

//  let mark = 30; 
// switch(true){
//     case  mark >= 90 :  
//      grade = "A";
//      break;
//     case mark >= 80:
//      grade = "B";
//      break;
//     case mark >= 70:                           // errors came while writing case :   if case >= 90 :
//      grade = "C";
//      break;
//      case mark >= 60:
//      grade = "D";
//      break;
//     default:
//      grade = "F";
//      break;
// }

// console.log(grade);

//----------------------------------------------------------------------------------------------------------------------------
//  STRINGS

// let userName = "ismail ismail";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("m"));
// console.log(userName.lastIndexOf("m"));
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(7));
// console.log(userName.padStart(16,"KT."));
// console.log(userName.padEnd(16,"KT."));
// console.log(userName.trimStart());

// let fname = userName.startsWith(" ") ? "username cant start with space" : "username is valid";
// console.log(fname);

// let fnname = userName.includes(" ") ? "username cant have space" : "username is valid";
// console.log(fnname);

// let replaced = userName.replaceAll(" ","");
// console.log(replaced);

//---------------------------------------------------------------------------------------------------------------------------
//  SUBSRING AND SLICE

// let userName =  "ktIsmail ummer";

// firstName = userName.slice(0,7);
// lastName = userName.slice(7);
// console.log(firstName);
// console.log(lastName);

// firstName = userName.slice(0,userName.indexOf(" "));
// lastName = userName.slice(userName.indexOf(" ")+1);
// console.log(firstName);
// console.log(lastName);

// const email = "ktismail92@gmail.com";

// userName = email.slice(0,email.indexOf("@"));
// console.log(` your user name will be ${userName}`);
// extention = email.slice(email.indexOf("@")+1);
// console.log(extention);

// METHOD CHAINING

// userName = window.prompt("enter your name");

// userName= userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();
// userName = letter + userName.slice(1);

// last = userName.slice(1);
// last = last.toLowerCase();
// userName = letter + last;
// console.log(userName);

// userName= userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);


//LOGICAL OPERATORS

// let temp = -20;

// if(temp >0 && temp<35){
//     console.log("the weather is good");
// }
// else{
//     console.log("the weather is bad");
// };

// if(temp >0 || temp>35){
//     console.log("the weather is good");
// }
// else{
//     console.log("the weather is bad");
// };

// let isSunny = false;

// if (!isSunny){
//     console.log("it is not sunny");
// }
// else{
//     console.log("it is sunny");
// }

//---------------------------------------------------------------------------------------------------------------------------

