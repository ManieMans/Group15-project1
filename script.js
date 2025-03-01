// List of random quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Happiness depends upon ourselves. – Aristotle",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
