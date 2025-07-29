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

//--------------------------------------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------------------------------------------------

// FUNCTIONS

// function happybday (userName,age){
//     console.log("happy birthday to you");
//     console.log(`happy birthday to ${userName}`);
//     console.log(`happy ${age}th birthday `);
// }

// // happybday();
// happybday("ismail", 10);

// function add(x, y){
//     return x + y;
// }

// console.log(add(2,4));

// let email = window.prompt("enter your email");
// console.log(isvalid(email));

// function isvalid(email){
//     if (email.includes("@") && email.includes(".com")){
//         return true;
//     }
//     else{
//         return false;
//     }
    
// }
// console.log(email)

//----------------------------------------------------------------------------------------------------------------------
// SCOPE VARIABLE

//     let x=1;                      //global variable

//    function fuv(){
//     x=10;                          //here local will be called first since both has same variabe
//     console.log(x);
//    }
//    fuv();


//------------------------------------------------------------------------------------------------------------------
//ARRAYS

// let Fruits = ["apple", "banana", "orange", "mango",]

// Fruits.push("cocunut");             //added
// Fruits.pop();                       //removed
// Fruits.unshift("grape");         // adds a new element to starting of an array
// Fruits.shift();               // removed
// Fruits.sort();

// console.log(Fruits);
// let Numoffruits = Fruits.length;
// console.log(Numoffruits);

// console.log(Fruits[2]);
// for (let i = 0; i < Fruits.length; i++){
//     console.log(Fruits[i]);
// }

// for(let Fruit of Fruits)
//     {
//         console.log(Fruit);
//     }



//----------------------------------------------------------------------------------------------------------------  

// 2 D ARRAYS

// const matrix = [[1,2,3],[4,5,6],[7,8,9]];

// for (row of matrix){
//   const rowstring = row.join(' ');
//   console.log(rowstring);
// }

//----------------------------------------------------------------------------------------------------------------
// SPREAD OPERATOR
// let num = [1,2,3,4,5,6,7,8,9];

// let max = Math.max(...num);
// let min = Math.min(...num);
// console.log(max);
// console.log(min);

// let Fruits = ["apple","orange","banana"];
// let veg = ["tomato","potato","carrot"];

// let food = [...Fruits,...veg, "egg"];

// console.log(food);

//--------------------------------------------------------------------------------------------------------------

//  REST PARAMETERS

// function fridge(...foods){
//     console.log(foods);
// }

// function fridge(...foods){
//     return foods;
// }


// const food1 = "biriyani";
// const food2 = "pizza";
// const food3 = "burger";
// const food4 = "sushi"

// // fridge(food1,food2);

// const food = fridge(food1,food2,food3,food4);

// console.log(...food);

// function sum (...numbers){
//     let result = 0;
//     for(let number of numbers){
//      result += number;
//     }
//      return result;
    
// }

// const total = sum(1,2,2,5);
// console.log(total);

// function avg(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result/numbers.length;
// }
// const totalavg = avg(75,100,85,90,50);
// console.log(totalavg);

// function combinestr(...str)
// {
//     return str.join(' ');
   
// }

// const fullname = combinestr("ismai", "ummer", "kakkathadathil")
// console.log(fullname);
//------------------------------------------------------------------------------------------------------------------------

//   CALLBACK

// goodbye();
// hello(wait);
// wait();

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function wait(){
//     console.log("wait");
// }

// function goodbye(){
//     console.log("good bye")
// }
// sum(dispay, 3,2);

// function sum (callback , x , y){
//   let result = x +y;
//   callback(result);

// }
// function dispay(result) {
//     console.log(result);
// }

//=---------------------------------------------------------------------------------------------

// FOR EACH

// let numbers = [1,2,3,4,5,6,7];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(value , index , array ){
//    array[index]= value *2;
// }

// function triple(value ,index, array){
//     array[index]= value*3;
// }

// function square(value ,index , array ){
//    array[index]= Math.pow(value,2);
// }


// function display(element){
//     console.log(element);
// }
//
// const Fruits = ["apple", "banaNa","mango","cocunut"];
// Fruits.forEach(camelCase);
// Fruits.forEach(display);

// function UpperCase(value, index , array){
//      array[index]= value.toUpperCase();
// }

// function camelCase (value ,index, array){
//     array[index ]= value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
// }

// function display(element){
//         console.log(element);
//  }