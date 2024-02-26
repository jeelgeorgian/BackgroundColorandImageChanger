// Constants for query selector
const studentIdParagraph = document.getElementById('200556289'); // Corrected ID
const customNumberInput = document.getElementById('customNumber');
const changeCustomColorButton = document.getElementById('changeCustomColor');
const changeRandomColorButton = document.getElementById('changeRandomColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');

// Array of image file names
const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// Function to change background color based on user input
function changeCustomColor() {
    let inputValue = parseInt(customNumberInput.value);
    studentIdParagraph.textContent = inputValue; // Display student ID
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 100) {
        changeBackgroundColor('red');
    } else if (inputValue >= 0 && inputValue < 20) {
        changeBackgroundColor('green');
    } else if (inputValue >= 20 && inputValue < 40) {
        changeBackgroundColor('blue');
    } else if (inputValue >= 40 && inputValue < 60) {
        changeBackgroundColor('orange');
    } else if (inputValue >= 60 && inputValue < 80) {
        changeBackgroundColor('purple');
    } else if (inputValue >= 80 && inputValue <= 100) {
        changeBackgroundColor('yellow');
    }
}

// Function to change background color from random number
function changeRandomColor() {
    let randomNumber = getRandomNumber(1, 100);
    customNumberInput.value = randomNumber; // Display random number in input
    if (randomNumber >= 0 && randomNumber < 20) {
        changeBackgroundColor('green');
    } else if (randomNumber >= 20 && randomNumber < 40) {
        changeBackgroundColor('blue');
    } else if (randomNumber >= 40 && randomNumber < 60) {
        changeBackgroundColor('orange');
    } else if (randomNumber >= 60 && randomNumber < 80) {
        changeBackgroundColor('purple');
    } else if (randomNumber >= 80 && randomNumber <= 100) {
        changeBackgroundColor('yellow');
    }
}

// Function to generate options for select list
function addList() {
    for (let imageName of imageNames) {
        let option = document.createElement('option');
        option.text = imageName;
        imageSelect.add(option);
    }
}

// Function to change image
function changeImage() {
    let selectedImageName = imageSelect.value;
    images.src = 'img/' + selectedImageName; // Set image source
}

// Event listeners for button clicks
changeCustomColorButton.addEventListener('click', changeCustomColor);
changeRandomColorButton.addEventListener('click', changeRandomColor);

// Event listener for select tag change
imageSelect.addEventListener('change', changeImage);

// Function to change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Populate select options
addList();
