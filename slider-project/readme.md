# Image Slider Documentation

## Live Demo
[View Live Slider](https://storied-smakager-65bd9d.netlify.app/)

## Overview
This project is a simple and elegant image slider that cycles through multiple images with smooth fade transitions. The slider includes navigation buttons, an automatic slideshow feature, and dot indicators for user interaction.

## Features
- **Automatic Slideshow**: The images transition automatically every 2 seconds.
- **Manual Navigation**: Users can navigate using next and previous buttons.
- **Dot Indicators**: Users can click on dots to jump to a specific slide.
- **Smooth Animations**: Fade-in effects enhance visual appeal.
- **Responsive Design**: Adapts well to different screen sizes.

## Technologies Used
- HTML
- CSS
- JavaScript
- Font Awesome (for navigation icons)

## How It Works
### HTML Structure
- The slider consists of multiple `div` elements with class `slider-item`, each containing an image.
- Navigation buttons (`prev` and `next`) allow manual transitions.
- A `div` with class `indicator` displays the current slide number.
- `dots` allow direct navigation to slides.

### CSS Styling
- The `.slider` container holds the images and controls.
- `.slider-item` elements are hidden by default using `display: none;`, except the active one.
- `.active` class ensures the currently displayed slide is visible.
- Animations (`fade` effect) enhance the transition between images.
- Buttons and dots are styled for easy navigation.

### JavaScript Functionality
- The `displaySlide(n)` function controls slide visibility.
- The `currSlide(n)` function changes slides on button clicks.
- `setInterval` automatically changes slides every 2 seconds.
- Click events on `dots` allow users to select specific slides.

## Usage Instructions
1. Clone or download the project.
2. Open `index.html` in a browser.
3. Click navigation buttons or dots to switch slides.
4. Observe the automatic transitions.

## Future Improvements
- Adding pause/resume functionality for the automatic slideshow.
- Making it fully responsive for smaller devices.
- Adding swipe gestures for mobile users.



