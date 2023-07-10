// Initialize variables for firstNumber, secondNumber, thirdNumber and operator
let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;
let operator = "";


//Loop through the numbers 0-9 and add event listener to each button
for(let i=0;i<=9;i++) {
    const element = document.getElementById("number" + i);
    element.addEventListener("click", function () {
        getNumbers(element.innerText)
    }, false)
}

//Add an event listener to the dot button
const element_dot = document.getElementById("dot");
element_dot.addEventListener("click", function () {
    getNumbers(".")
}, false)

//Function to add numbers to the output
function getNumbers(number) {
    
	//display numbers calculator	
	let display = document.getElementById("output");
	// If the length of the content inside the "display" element is less than 6 characters
	if(display.innerHTML.length < 6) {
        display.innerHTML += number;// Append the value of "number" to the current content of the "display" element
    }
}


//Add an event listener to the del button
const element_del = document.getElementById("del");
element_del.addEventListener("click", function () {
    del()
}, false)

// Function to delete the last character in the output field
function del() {
    del_number = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = del_number.slice(0, -1);
}



// Add an event listener to the AC button
const element_AC = document.getElementById("ac");
element_AC.addEventListener("click", function () {
    ac()
}, false)

// Function to clear the output
function ac() {
    document.getElementById("output").innerHTML = "";
}



// Add event listeners to the operator buttons (+, -, /, *)
const element_plus = document.getElementById("plus");
element_plus.addEventListener("click", function () {
    operator="+";
    operation()
}, false)

const element_sub = document.getElementById("sub");
element_sub.addEventListener("click", function () {
    operator="-";
    operation()
}, false)

const element_div = document.getElementById("div");
element_div.addEventListener("click", function () {
    operator="/";
    operation()
}, false)

const element_mul = document.getElementById("mul");
element_mul.addEventListener("click", function () {
    operator="*";
    operation()
}, false)

// Function to set the firstNumber to the value in the output field, then clear the output
function operation(){
if (document.getElementById("output").innerHTML != "WRONG NUMBER"){
    firstNumber = parseFloat(document.getElementById("output").innerHTML);
	//console.log(firstNumber);
    document.getElementById("output").innerHTML = "";
}
else {
	document.getElementById("output").innerHTML = "";
}

}



// Add an event listener to the equals button
const element_ison = document.getElementById("equals");
element_ison.addEventListener("click", function () {
    calculator_equals()
}, false)

// Function to calculate the result based on the operator and display it in the output
function calculator_equals(){
	
	// Check if either `firstNumber` or `secondNumber` is not a valid number
	if(isNaN(firstNumber) || isNaN(secondNumber)){
		// If either of them is not a number, display "WRONG NUMBER" message in the output field
		document.getElementById("output").innerHTML = "WRONG NUMBER";
	}
	else {
    //Parsing parseFloat to variable secondNumber to support decimal values
    secondNumber = parseFloat(document.getElementById("output").innerHTML);

    if (operator == "+"){

        thirdNumber = firstNumber+secondNumber;
    }
    else if (operator == "-"){
        thirdNumber = firstNumber-secondNumber;
    }
    else if (operator == "/"){
        thirdNumber = firstNumber/secondNumber;

    }
    else if (operator == "*"){
        thirdNumber = firstNumber*secondNumber;

    }
    document.getElementById("output").innerHTML = thirdNumber;
	}
}