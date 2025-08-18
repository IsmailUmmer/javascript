// 
//                                         BASICS OF JAVASCRIPT

// WINDOW ALERT 

// window.alert(`hello`);
// document.getElementById(`btn`).innerHTML = ' peresed'

//-----------------------------------------------------------------------------------------
//VARIABLE

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
// -----------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------------------------------------
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
//ARGUMENTS
// function happybday (userName,age){
//     console.log("happy birthday to you");
//     console.log(`happy birthday to ${userName}`);
//     console.log(`happy ${age}th birthday `);
// }

// // happybday();
// happybday("ismail", 10);

//RETURN KEWORD

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

// ARRAY METHODS
// let Fruits = ["apple", "banana", "orange", "mango",]

// Fruits.push("cocunut");             //added
// Fruits.pop();                       //removed
// Fruits.unshift("grape");         // adds a new element to starting of an array
// Fruits.shift();               // removed
// Fruits.sort();

// ARRAY LENGTH
// console.log(Fruits);
// let Numoffruits = Fruits.length;
// console.log(Numoffruits);

// ITERATING AN ARRAY
// console.log(Fruits[2]);
// for (let i = 0; i < Fruits.length; i++){
//     console.log(Fruits[i]);
// }

//ENHANCED  FORLOOP
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

//UNPACKING ELEMENTS IN AN ARRAY
// let max = Math.max(...num);
// let min = Math.min(...num);
// console.log(max);
// console.log(min);
//_____________________________________________
// let userName = "ismail";
// let letters =  [...userName];
// let lettersjoined = [...userName].join("");
// console.log(letters)
// console.log(lettersjoined);


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

//COMBINING STRINGS 
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
// ----------------------------------------------------------------------------------------------------------------

// MAP METHOD

// const numbers = [1,2,3,4,5,];

// squaredNumbers = numbers.map(square);

// console.log(squaredNumbers);
// function square(value ,index ,array) {
//     return Math.pow(value, 2);

// }

// -------------------------------------------------------------------------------------------------------------------

//  const Fruits = ["apple","banana","kwivi", "painapple"];

// let changeduppercase = Fruits.map(upperCase);

// function upperCase(value){
//    return value.toUpperCase();
// }

// console.log(changeduppercase);


// let dates = ["2010-1-30","2020-2-5","2022-5-12"];

// let arrangedDates = dates.map(split)

// function split (value){
//     let parts = value.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// console.log(arrangedDates);

//-------------------------------------------------------------------------------------------------------------------------
// FILTER MOTHOD

// const numbers = [1,2,3,4,5,6,7,8,9];

// const oddNumbers =numbers.filter(iseven);

// console.log(oddNumbers);

// function isodd (value){ 
//     if (value %2 === 0)
//             return value ;
// }
// function iseven(value){
//     if (value %2 !== 0)
//             return value ;
// }

// const age = [12,13,12,20,6,45,12,4,56];

// const adultsages= age.filter(adult);
// function child(value){
//      return value < 18;
// }

// function adult(value){
//     return value>18;
// }
// console.log(adultsages);

// const array = ["apple","banana","mango","pomagranate"];

// const short = array.filter(shortwords);
// console.log(short);
// function shortwords (value){
//   return value.length <=6;

// }

//------------------------------------------------------------------------------------------------------------------------

//        REDUCE

// const price  =  [10,20,30,4,5,8,90,50]

// const total = price.reduce(totalprice)
// console.log(total.toFixed(2));                                                                   
//                                                                   function name ( 10 , 20)
//                                                                    return  30;
// function totalprice (adding , next){                               function name (30 , 30)
//    return adding+next;                                              return 60;
// // }

// const grade = [50,60,60,30,20,90,2,95];

// const min = grade.reduce(minium)
// console.log(min);
// function minium (value , next ){
//      return Math.min(value,next) 
// }
// const max = grade.reduce(maxium)
// console.log(max)
// function maxium (value , next){
//     return Math.max(value,next)
// }
//-----------------------------------------------------------------------------------------------------------
// FUNCTION EXPPRSSSION

//  const array = [1,2,3,4,5,6];
//  const squre = array.map( function (value){
//     return Math.pow(value,2);
// })
// console.log(squre)

// const cube =array.map(function (value){
//     return Math.pow(value,3);
// })
// console.log(cube);

// const total = array.reduce( function(value , next){
//    return value+next;
// })
// console.log(total);

//-------------------------------------------------------------------------------------------------------------------
// ARROW FUNCTIONS

// setTimeout( hello = ()=> console.log("hello")  ,3000)

// hello();

// const numbers = [1,2,3,4,5,6];

// const square = numbers.map( (value)=> Math.pow(value,2)  )
// const max = numbers.reduce((value,next)=> Math.max(value,next))
// const oddNumbers = numbers.filter((value)=> value%2 !==0 )

// console.log(oddNumbers);


// const hello = (usrname, age)=> {console.log(`hii ${usrname}`)
//                                console.log(`your age is ${age}`)}

// hello("ismail", 25);

// -------------------------------------------------------------------------------------------------------------------
//
// OBJECTS

// const person1 = {
//     firstName : "spongebob",
//     lastName  :"square pants",
//      eat :  () => console.log("hi , i am spongebob")  ,

// }
// person1.eat();


// const person1 = {
//     firstName : "spongebob",
//     lastName  :"square pants",
//      eat :  () => console.log("hi , i am spongebob")  ,

// }
// person1.eat();

// class mathutil{
//     static PI = 3.14159;
//     static radius (radius){
//         return radius * 2;
//      }
//      static circumference(radius){
//         return 2 * this.PI * radius;
//      }
// }

// console.log(mathutil.PI);
// console.log(mathutil.radius(10));
// console.log(mathutil.circumference(10));   

// ---------------------------------------------------------------------------------------------------------------

// STATIC METHODS

// class Users {
//      static totalActiveUsers = 0;

//      constructor(name){
//         this.name = name;
//      }
//      check(){
//         console.log(`${this.name}`)
//         Users.totalActiveUsers++;
//         console.log(` total active users are ${Users.totalActiveUsers}`);
//      }
// }

// const user1 = new Users("ismail");
// user1.check();


// ----------------------------------------------------------------------------------------------------------------
//  INHERITANCE
// class animal {

//     static alive = true;
//     eat(){
//         console.log(`${this.name} is eating`) 
//     }
// }
// class rabbit extends animal {
//     name = "rabbit";
//     run(){
//         console.log(`the ${this.name} can run`)
//     }
// }
// class Duck extends animal {
//     name = "duck";
//     swim(){
//             console.log(`the ${this.name} can swim`)
//     }
// }

// const rabbit1 = new rabbit();
// rabbit1.eat();

// const duck = new Duck();
// duck.swim();
// duck.eat();

//------------------------------------------------------------------------------------------------------------------------
//SUPER 

// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`${this.name} is moving at a speed of ${speed} mph`);
//     }
//     }
// class Rabbit extends Animal{
//     constructor (name , age ,runspeed){
//         super(name,age)
//         this.runspeed = runspeed;
//     }
//     run(){
//         console.log(`${this.name} can run`);
//         super.move(this.runspeed);
//     }
// }
// class Duck extends Animal{
//     constructor(name,age,swimspeed){
//         super(name,age)
//         this.swimspeed = swimspeed;
//     }
//     swim(){
//         console.log(`${this.name} can swim`);
//         super.move(this.swimspeed);
// }
// }
// class Pegion extends Animal{
//     constructor(name,age,flyspeed){
//         super(name, age);
//         this.flyspeed = flyspeed;
//         }
//     fly(){
//         console.log(`${this.name} can fly`);
//         super.move(this.flyspeed);
//     }
// }

// const pegion = new Pegion("pegion",10,100);
// console.log(pegion);
// const duck = new Duck("duck",20,10);
// console.log(duck);
// const rabbit = new Rabbit("rabbit",14,141);
// console.log(rabbit);
// rabbit.run();

//----------------------------------------------------------------------------------------------------------------

//GETTERS & SETTERS

// class Rectangle {
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     set width (width){
//         if(width>=0) {
//         this._width = width;
//     }
//     else{
//         console.error("width cannot be negative");
//     }
// }
//     get width(){
//         return this._width;
//     }
//     set height(height){
//         if(height>=0) {
//             this._height = height;
//         }
//         else{
//             console.error("height cannot be negative");
//         }

//     }
//     get height(){
//         return this._height;
//     }
//     }

//     const rectangle = new Rectangle("-100","ismail")

//     console.log(rectangle.height);
//     console.log(rectangle.width);

//-----------------------------------------------
// class Person {
//     constructor(name, lastname, age) {
//         this.name = name;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     set name(newname) {
//         if (typeof (newname) === "string" && newname.length > 0) {
//             this._name = newname;
//         } else {
//             console.error("username is invalid")
//         }
//     }
//     set lastname(newlastname) {
//         if (typeof (newlastname) === "string" && newlastname.length > 0) {
//             this._lastname = newlastname;
//         } else {
//             console.error("lastname is invalid")
//         }
//     }
//     set age(newage){
//         if (typeof newage === 'number' && newage >0 ){
//             this._age = newage;
//         }else{
//             console.error("invalid age");
//         }
//     }
//     get name(){
//         return this._name;
//     }
//     get lastname(){
//        return  this._lastname;
//     }

//     get age(){
//         return this._age;
//     }

//     get fullname(){
//         return this._name + " " + this._lastname;
//     }

// }
// const person1 = new Person("ismail", "kakkathadathil", 25);
// console.log(person1.name);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.fullname);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// DESTRUCURING 

// SWAPING 
// let a = 2;
// let b =5;
// [a, b] =[b,a];
// console.log(a,b);

//ASSIGNING ARRAY ELEMENTS TO VARIABLES
// const fruits= ["apple","banana","orange","mango","coconut","watermilon"];
// [fruit1,fruit2,fruit3,fruit4, ...restoffruits] = fruits;
// console.log(restoffruits);

//EXTRACTING VALUES FROM OBJECTS 
// const colors =["red","green","blue","black","white"];
// [colors[0],colors[3]]= [colors[3],colors[0]]
// console.log(colors);

//IN FUN. PERAMETERS
// const person ={
//     fullName : "ismail",
//     age : "25",
//     job : "engineer",
// } 
// const person1 = {
//     fullName : "patrick",
//     age : 30,

// }
// const {fullName,age,job= "unemployed"} =  person1 ;

// console.log(fullName);
// console.log(age);
// console.log(job);

//EXAMPLE 2 
// function dispayPerson({fullName,age,job="umemployed"}){
//  console.log(`fullname  : ${fullName}, age : ${age} , job: ${job}`)
// }
// const person ={
//     fullName : "ismail",
//     age : "25",
//     job : "engineer",
// } 
// const person1 = {
//     fullName : "patrick",
//     age : 30,
// }

// dispayPerson(person1);

//---------------------------------------------------------------------------------------------------------------------------
//NESTED OBJECTS

// const person = {
//     fullname: "ismail",
//     class: "10th",
//     age: 16,
//     hobbies: ["watching movies", "playing", "singing"],
//     address: {
//         street: "muthuthala",
//         place: "pattambi",
//         district: "palakkad",
//         state: "kerala",
//     }
// }

// console.log(person.fullname);
// console.log(person.class);
// console.log(person.age);
// console.log(person.hobbies[2]);
// console.log(person.address.place);
//-----------------------------------------

// class Person  {
//     constructor(name , age , ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address)
//     }
// }

// class Address {
//     constructor(street, place, district, state) {
//         this.street = street;
//         this.place = place;
//         this.district = district;
//         this.state = state;
//     }
// }
// const person = new Person ("ismail", 16 , "muthuthala", "pattambi", "palakkad", "kerala");

// console.log(person.address.place)

// const fruits = [
//     {name :"apple", color :"red", calorires : 96},
//     {name :"banana", color :"yellow", calorires : 100},
//     {name :"orange", color :"orange", calorires : 84},
//     {name :"pinapple", color :"yellow", calorires : 44},
//     {name :"cocounut", color :"brown", calorires : 50} 
// ]

//  fruits.pop();
//  fruits.push({name: "jackfruit" , color : "yellow", calorires : 98})

//--------------------filter
// const newfruit = fruits.filter(fruit => fruit.calorires>70 )
// console.log(newfruit);

//----------------for each 
// fruits.forEach(fruits => console.log(fruits.name))

//-----------------map
// const newfruit = fruits.map(fruit => (fruit.name))  
// console.log(newfruit)

//-----------------reduce

// const maxcal = fruits.reduce((value , next)=> fruits.calorires < value.calorires ? next :value);
// console.log(maxcal);




// const Fruit = [{name : "apple" , color:"red", calories : 85},
//             {name : "orange" , color:"orange", calories : 45},
//             {name : "banana" , color:"yellow", calories : 105},
//             {name : "coconut" , color:"white", calories : 150}
//  ]
//  const maxcalfruit =  Fruit.reduce((value , next)=> value.calories > next.calories ? value:next)

//  console.log(maxcalfruit);

//------------------------------------------------------------------------------------------------
//SORT 
//  const numbers = [1,10,20,3,9,6,4,9];

//  numbers.sort((a,b)=> a-b)
//  console.log(numbers)

// const people =[ {name : "vpongebob" , age : 25 , gpa :2.0},
//                {name : "atrick" , age : 28 , gpa :2.8},
//                {name : "qidword" , age : 40 , gpa :3.4},
//                {name : "sandy" , age : 20 , gpa :3.9}
// ]

// people.sort((a,b)=> a.name.localeCompare( b.name))

// console.log(people)
//-----------------------------------------------------------------------------------------------------------------------------------------
//SHUFFLE

// const cards = ["A", 1,2,3,4,5,6,7,8,9,10,"J","Q","K"];

// shuffle(cards);

// console.log(cards)

// function shuffle (cards){
//     for(i = cards.length-1;i>0;i--){
//         const random = Math.floor(Math.random() * (i+1));
//         [cards[i],cards[random]] = [cards[random],cards[i]]
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------
//DATE OBJECTS
// const date = new Date("2024-04-02T12:30:11Z")
// const date = new Date()

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour =date.getHours();
// console.log(hour)

//---------
// date.setDate(2);
// date.setMonth(3)

// console.log(date);
//----------
// const date1 = new Date("2030-12-31");
// const date2 = new Date("2031-01-01");

// if (date1<date2){
//     console.log("happy new year")
// }

//CLOSURE
// function game() {
//     let count = 1;
//     function increment() {
//         count++;
//         console.log(`counter is ${count}`);
//     }
//     function decrement() {
//         count--;
//         console.log(`counter is ${count}`);
//     }
//     return {increment,decrement};
// }

// const play =  game()
// play.increment();
// play.increment();
// play.decrement();


// function getScore(){
//     let score = 0;
// function increseScore (points){
//     score += points;
//     console.log(`+${points}pts`);
// }
// function decreseScore (points){
//     score -= points;
//     console.log(`+${points}pts`);
// }
// function Tscore(){
//   return score;
// }
// return {increseScore,decreseScore,Tscore}
// }

// const newscore = getScore();
// newscore.increseScore(5);
// newscore.increseScore(5);
// newscore.decreseScore(2)
// console.log(`your score is ${newscore.Tscore()}`);

//--------------------------------------------------------------------------------------------------------------------------
// SET TIMEOUT
// let timeout;
// function settimeOut(){
//     console.log("started")
//  timeout= setTimeout(()=> window.alert("hellow"),3000);
// }
// function cleartimeout(){
//     console.log("ended")
// clearTimeout(timeout);
// }

//----------------------------------------------------------------------------------------------------------------------------
//TIME 

// function loadData (){
//     console.time("loadData")
//     for( let i=0 ;i<10000000; i++){

//     }
//     console.timeEnd("loadData");
// }
// loadData()

//--------------------------------------------------------------------------------------------------------------------------

//TOLOCAL STRING
// let number = 504103104;

// number = number.toLocaleString("en-IN",{style :"currency",currency: "INR"});

// console.log(number)