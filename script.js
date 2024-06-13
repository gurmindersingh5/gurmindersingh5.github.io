// Counter Functionality
let count = 0;

function increment() {
    count++;
    document.getElementById('count').innerText = count;
}

function reset() {
    count = 0;
    document.getElementById('count').innerText = count;
}

// Random Quote Generator
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "The journey of a thousand miles begins with one step.",
    "Believe you can and you're halfway there."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
