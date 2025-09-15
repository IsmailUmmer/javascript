
// document.cookie = "firstName=Ismail; expires = sun 1 january 2026 12:00:00 UTC; path=/"
// document.cookie = "LastName=Ummer; expires = sun 1 january 2026 12:00:00 UTC; path=/"

// deleteCookie("firstName")
// deleteCookie("LastName");
// deleteCookie("email");


setCookie("email", "ktismail92@gmail.com", 365);
setCookie("password", "ismail123", 365);
// console.log(document.cookie);
console.log(getCookie("email"));
function setCookie(name, value, daysofexp) {
    const date = new Date();
    date.setTime(date.getTime() + daysofexp * 24 * 60 * 60 * 1000);
    let expires = "expires" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires};path=/`
}
function deleteCookie(name) {
    setCookie(name, null, null);
}
function getCookie(name){
   const cDecoded = decodeURIComponent(document.cookie);
   const cArray =  cDecoded.split("; ")
   cArray.forEach(element => {
    if(element.indexOf(name)==0 ){
          result = element.substring(name.length +1);
    }
   })
   return result;
}