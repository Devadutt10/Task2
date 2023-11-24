const numOne = document.querySelector('#num1');
const numTwo = document.querySelector('#num2');
const addBtn = document.querySelector('.add-btn');
const sumField = document.querySelector('#sum');

addBtn.addEventListener('click',function(){
    if(numOne.value == "" || numTwo.value == ""){
        alert("Enter the numbers in the field.");
    }
    else if(Number.isInteger(numOne.value)==false || Number.isInteger(numTwo.value)==false){
        alert("Enter a valid value");
        numOne.value="";
        numTwo.value="";
    }
    else{
        let num1 = parseFloat(numOne.value);
        let num2 = parseFloat(numTwo.value);
        sumField.innerHTML = num1+num2;
    }
})