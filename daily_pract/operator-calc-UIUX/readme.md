# Documentation for Simple Calculator Web Application

## Overview
This is a simple web-based calculator that allows users to input two numbers and perform basic arithmetic operations (addition, subtraction, multiplication, and division). The application consists of an HTML form, CSS for styling, and JavaScript for functionality.

---

## File Structure
- **index.html** - Main structure of the web page
- **style.css** - Styling for the web page
- **script.js** - JavaScript functionality for handling user input and calculations

---

## HTML (index.html)

### Structure
The HTML file consists of:
1. **Form Section**:
   - Two input fields (`num1` and `num2`) for entering numbers.
   - A submit button to process the input values.
2. **Result Display Section**:
   - Displays the entered values.
   - Contains buttons for arithmetic operations.
   - Displays the result of the selected operation.

### Key Elements
- `<form>`: Captures user input and triggers the `printValue()` function upon submission.
- `<input>`: Accepts numeric input values.
- `<button>`: Triggers arithmetic operations.
- `<div id='result'>`: Displays numbers and the result of calculations.
- `<script src='./script.js'></script>`: Links the JavaScript file for interactivity.

---

## CSS (style.css)

### Styling Features
- Centered main container.
- Responsive input fields with rounded borders.
- Styled buttons with hover effects (commented out).
- Hidden result section (revealed after form submission).

### Key CSS Classes and IDs
- `.main`: Main container styling.
- `form input`: Styles input fields.
- `#result`: Styles result display section.
- `.box-button button`: Styles arithmetic operation buttons.
- `#ans`: Box for displaying calculation result.
- `.hidden`: Hides elements before they are displayed dynamically.
- `.active`: Shows elements dynamically.

---

## JavaScript (script.js)

### Functionality
- **printValue()**:
  - Retrieves values from input fields.
  - Updates the result display with entered numbers.
  - Reveals the result section.

- **Operation(type)**:
  - Performs arithmetic operations based on the button clicked.
  - Updates the result box (`#ans`) with the computed value.

### Key Features
- `document.getElementById('result').classList.add('hidden');` - Initially hides the result section.
- `switch(type) {...}` - Performs operations based on user input.
- `parseInt(num1) + parseInt(num2)` - Converts string inputs to integers before performing calculations.

---

## Usage Instructions
1. Enter two numbers in the input fields.
2. Click **Submit** to store and display the values.
3. Click an arithmetic operator (+, -, *, /) to perform the respective calculation.
4. View the result in the designated box.

---

## Enhancements & Future Improvements
- Add validation to ensure only numbers are entered.
- Include error handling for division by zero.
- Improve UI/UX with animations and better styling.
- Implement additional mathematical operations.
- Make it fully responsive for mobile users.

