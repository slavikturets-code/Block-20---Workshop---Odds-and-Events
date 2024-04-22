// TODO: this file! :)
let oddArr = [];
let evenArr = [];
let numberBank = [];

const formSubmit = document.querySelector("form");
const input = document.querySelector("form").querySelector("label").querySelector("input");
const numberBankOutput = document.getElementById("numberBank").querySelector("output");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");
const oddOutput = document.getElementById("odds").querySelector("output");
const evenOutput = document.getElementById("evens").querySelector("output");

input.addEventListener("change", (e) => {
    if((e.target.value != null) && (e.target.value != "") && (e.target.value!=undefined))
      number = e.target.value;
}); 

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();   
  input.value = "";  
  if(numberBank.length == 0){
    evenOutput.value = "";
    oddOutput.value = "";
    numberBankOutput.value = "";
  }
  if((number != null) && (number != "") && (number!=undefined)){      
    numberBank.push(number);
    number = "";
    numberBankOutput.value = numberBank; 
  }  
});

sortOneButton.addEventListener("click", (e) => {
    if(numberBank.length != 0){
       if((numberBank[0] % 2) == 0){
        evenArr.push(numberBank[0]); 
        evenOutput.value = evenArr;
       }else{
        oddArr.push(numberBank[0]);
        oddOutput.value = oddArr;
       }
       numberBank = numberBank.slice(1);
       if(numberBank.length == 0){
        evenArr.splice(0,evenArr.length);
        oddArr.splice(0,oddArr.length);
       }
       numberBankOutput.value = numberBank; 
    }
});

sortAllButton.addEventListener("click", (e) => {
    if(numberBank.length != 0){
       numberBank.forEach(element =>{
        if((element % 2) == 0){
            evenArr.push(element);            
           }else{
            oddArr.push(element);            
           }
       })
       evenOutput.value = evenArr;
       oddOutput.value = oddArr;
       numberBank.splice(0,numberBank.length);
       evenArr.splice(0,evenArr.length);
       oddArr.splice(0,oddArr.length);
       console.log(numberBank);
       numberBankOutput.value = ""; 
    }
});



 

