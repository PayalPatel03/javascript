# Documentation for the Quotes Webpage

## Overview
This project is a simple Quotes Webpage that displays an inspirational quote and its author. The quote changes every 3 seconds automatically and can also be changed manually using a button. The webpage is styled using Bootstrap and custom CSS.

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Custom styles for design enhancement
- **Bootstrap 5**: Predefined styles and layout
- **JavaScript**: Handles dynamic quote changes

## File Structure
- `index.html` - The main HTML file containing the structure
- `style.css` - The custom styles for the webpage
- `script.js` - The JavaScript file controlling quote updates

---

## HTML Explanation
### `head` Section
- Defines character encoding and viewport settings for responsiveness.
- Includes Bootstrap CSS and a custom CSS file (`style.css`).
- Links JavaScript files (`Bootstrap JS` and `script.js`).

### `body` Section
- Contains a Bootstrap container that centers the card.
- **Card Structure:**
  - `.card-header`: Displays "Quote" as the title.
  - `.card-body`: Displays the quote inside a `<blockquote>`.
  - `.blockquote-footer`: Displays the author's name.
  - A button labeled "Change Quote" triggers a new quote display.

---

## CSS Explanation
- **General Styling:**
  - Applies a linear gradient background.
  - Uses `Poppins` font.
  - Centers the card using `flexbox`.
- **Card Styling:**
  - Rounded corners, shadow effects, and hover effects.
- **Button Styling:**
  - Custom primary color with hover animations.

---

## JavaScript Explanation
### Quote Handling
1. **Selecting Elements**:
   ```js
   let quote = document.querySelector('.blockquote p');
   let footer = document.querySelector('.blockquote-footer');
   ```
2. **Array of Quotes**:
   - Contains objects with `quote` (text) and `author` (name).
3. **Function to Change Quote**:
   ```js
   let changeQuote = () => {
       let index = Math.floor(Math.random() * quotes.length);
       quote.textContent = quotes[index].quote;
       footer.textContent = quotes[index].author;
   };
   ```
4. **Auto-update every 3 seconds**:
   ```js
   setInterval(() => {
       changeQuote();
   }, 3000);
   ```
5. **Manual Quote Change**:
   - Clicking the "Change Quote" button triggers `changeQuote()`.

---

## Features
- **Automatic Quote Update** every 3 seconds.
- **Button Click Functionality** to change quotes manually.
- **Bootstrap Layout** ensures responsiveness.
- **Hover Effects** on the card and button for better UI.

## Possible Enhancements
- Fetching real-time quotes from an API.
- Adding fade-in/out animations for smooth transitions.
- Allowing users to copy quotes or share them.

---

## Conclusion
This project is a simple yet interactive webpage that displays inspirational quotes dynamically. It is built using HTML, CSS, Bootstrap, and JavaScript, making it easy to customize and enhance further.

