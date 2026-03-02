// Scroll Button
function scrollToContent() {
    window.scrollTo({
        top: document.querySelector(".content").offsetTop,
        behavior: "smooth"
    });
}

// Countdown Timer
const birthday = new Date("2026-04-15"); // CHANGE THIS DATE

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

setInterval(updateCountdown, 1000);

// Load Markdown File
fetch("index.md")
    .then(response => response.text())
    .then(text => {
        document.getElementById("markdown-content").innerHTML = marked.parse(text);
    });
