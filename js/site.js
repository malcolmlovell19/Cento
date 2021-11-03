//Get values from the page
function getValues(){
let startValue = document.getElementById("startValue").value;
let endValue = document.getElementById("endValue").value;

startValue = parseInt(startValue);
endValue = parseInt(endValue);

if(Number.isInteger(startValue) && Number.isInteger(endValue)){
 
   let numbers = generateNumbers(startValue, endValue);  
    displayNumbers(numbers);

}
else{
    alert("Error: Enter valid numbers");
}
}


//Generate numbers from the start value to end value
function generateNumbers(startValue, endValue) {
let numbers = [];
for(let i = startValue; i <= endValue; i++ ){
    numbers.push(i);
}
return numbers;
}

//Display the numbers and mark the even numbers bold
function displayNumbers(numbers) {
let templateRows = "";
for (let i = 0; i < numbers.length; i++) {
    let className = "even";
    let number = numbers[i];
    if (number % 2 == 0){
        className = "even";
    }
    else{
        className = "odd";
    }
    templateRows += `<tr><td class=${className}>${number}</td></tr>`;
    document.getElementById("results").innerHTML = templateRows;
}
}
