// let userName = "";

// while(userName === "" || userName === null){
//    userName = window.prompt("enter your name");
// }
// console.log(` you are logged in   `)


let isLoggedin = false;

do{
    let userName = window.prompt("enter your username");
   
    let password = window.prompt("enter your password");

    if (userName === "admin" && password == "admin"){
      isLoggedin =true;
      console.log("you are logged in");
    }
    else{
        console.log("invalid username or password");
    } 
   }
    while(!isLoggedin);
    
