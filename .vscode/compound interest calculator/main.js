function calculate() {
    const totalAmount = document.getElementById("Total");
    const principleInput = document.getElementById("principal");
    const rateInput = document.getElementById("Interest");
    const yearsInput = document.getElementById("years");

    const principal = Number(principleInput.value);
    const rate = Number(rateInput.value/100);
    const  years = Number(yearsInput.value); 

       const result = principal * Math.pow((1 + rate / 1), 1 * years);
    
       totalAmount.textContent = result.toLocaleString("en-IN",{style :"currency",currency: "INR"});;
}