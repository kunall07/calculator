// Display the clicked button's value on the calculator screen
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the calculator display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last entered character
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result using eval (ensure only valid expressions are calculated)
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
