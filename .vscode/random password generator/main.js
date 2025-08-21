
 function generatedpassword ( length , includeUpperCase , includeLowerCase , includeNumbers , includeSymbols ){
   
      let password = "";
      let totalchars = "";
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()";

      totalchars += includeUpperCase ? upperCase : "";
      totalchars += includeLowerCase ? lowerCase : "";
      totalchars += includeNumbers ? numbers : "";
      totalchars += includeSymbols ? symbols : "";
      // console.log(totalchars.length);

      if(totalchars === ""){}
 
    for(i = 0; i < length; i++){
        const random = [Math.floor(Math.random() * totalchars.length)];
        console.log(random);
        password += totalchars[random];
    }
   return password;
}

// const passwordLength = 12;
// const includeUpperCase = true;
// const includeLowerCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

document.querySelector("button").addEventListener("click", () => {
  const passwordLength = document.querySelector("#passwordLength").value;
  const result = document.querySelector("#result");
  const includeUpperCase = document.getElementById('includeUpperCase').querySelector('input').checked;
  const includeLowerCase = document.getElementById('includeLowerCase').querySelector('input').checked;
  const includeNumbers = document.getElementById('includeNumbers').querySelector('input').checked;
  const includeSymbols = document.getElementById('includeSymbols').querySelector('input').checked;

const password = generatedpassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);
result.textContent = password;
});

// console.log(`generated password : ${password}`);