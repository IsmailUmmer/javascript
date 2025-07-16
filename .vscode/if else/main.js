
let usrtext = document.getElementById('usrtext');
const btn = document.getElementById('submitbtn');
// const result= document.getElementById('result');
// console.log(usrtext);

btn.onclick = function() {
    age = document.getElementById('usrtext').value;
    age = Number(age);
    console.log(age);

    if(age>100){
        document.getElementById("result").textContent = (`u are too old to enter this site`);
    }
     else if (age>=18){
        document.getElementById("result").textContent = (`u are fit to enter this site`);
    }
    else if(age==0){
        document.getElementById("result").textContent = (`u are just born`);
    }
    else if(age<0){
        document.getElementById("result").textContent = (`u are not born yet`);
    }
    else{
        document.getElementById("result").textContent = (`u cant enter this site`);
    }
    }

