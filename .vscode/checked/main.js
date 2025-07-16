sub = document.getElementById('sub');
visa = document.getElementById('visa');
master = document.getElementById('master');
amex = document.getElementById('amex');
mytext1 = document.getElementById('mytext1');
mytext2 = document.getElementById('mytext2');
submit = document.getElementById('submit');

submit.onclick = function(){
if(sub.checked){
    mytext1.textContent = (`you are subscribed`);
}
else{
    mytext1.textContent = (`you are not subscribed`);
}
if (visa.checked){
 mytext2.textContent = (`you have selected visa`);
   
}
else if(master.checked){
    mytext2.textContent = (`you have selected master card`);
}
else if(amex.checked){
    mytext2.textContent = (`you have selected american express`);
}
else{
    mytext2.textContent = (`you have not selected any card`);
}
}

