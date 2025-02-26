# Documentation for Signup & Login Page

## Overview
This project is a simple signup and login system built using HTML, Bootstrap, and JavaScript. The system consists of two forms: one for user registration (signup) and one for authentication (login). Upon successful login, a user card is displayed with their email as the username.

## Technologies Used
- **HTML**: Structure of the page
- **CSS (Bootstrap 5.3.2)**: Styling and layout
- **JavaScript**: Handling form interactions and authentication

## File Structure
```
- index.html   (Main HTML file)
- script.js    (JavaScript file for form handling)
```

## Components
### 1. Signup Form
Located inside the `<body>`, the signup form contains:
- An email input field
- A password input field
- A submit button

### 2. Login Form
The login form is initially hidden using JavaScript (`display: none`). It consists of:
- An email input field
- A password input field
- A submit button

### 3. User Card
The user card is initially hidden. It is displayed after a successful login and shows the user's email.


## JavaScript Functionality
### 1. Signup Functionality
When the signup form is submitted:
- The email and password are stored in global variables.
- The signup form is hidden, and the login form is displayed.

### 2. Login Functionality
When the login form is submitted:
- It checks if the entered credentials match the stored credentials.
- If they match, the user card is displayed.
- If they don't match, an alert is shown.

## Conclusion
This project demonstrates a simple client-side authentication system using HTML, Bootstrap, and JavaScript. While it is functional for demonstration purposes, it lacks proper security measures such as encrypted passwords and server-side authentication. For a production-ready system, server-side validation and database storage should be implemented.