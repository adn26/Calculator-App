// Display constant
const display = document.getElementById("display");
let resultDisplayed = false;  // Flag to track if result or error is displayed

function appendToDisplay(input) {
    // Check if the result or error was displayed and reset if needed
    if (resultDisplayed) {
        display.value = "";   // Clear the display for fresh input
        resultDisplayed = false;  // Reset the flag
    }

    if (input === '.') {
        // Get the current part of the display after the last operator
        let currentNumber = display.value.split(/[\+\-\x\/]/).pop();

        // If the current number already contains a decimal point, do not allow another
        if (currentNumber.includes('.')) {
            return;
        }
    }

    // Append the input to the display if no issues
    display.value += input;
}

function clearDisplay(){
    // Clears the display
    display.value = "";
    resultDisplayed = false;  // Reset the flag when cleared
}

function calculate() {
    try {
        // Replace 'x' with '*' for multiplication
        let expression = display.value.replace(/x/g, '*');

        // Use eval to calculate the result, but sanitize input
        let result = eval(expression);
        
        // Display the result
        display.value = result;

        // Set the flag to true after the result is displayed
        resultDisplayed = true;
    } catch (error) {
        // If there's an error (such as '10+'), show an error message
        display.value = "Error";
        resultDisplayed = true;  // Set the flag to true for error
    }
}