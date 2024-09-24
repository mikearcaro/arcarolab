// Auto-scroll functionality
const scrollContainer = document.getElementById('auto-scroll-container');
const scrollContent = document.getElementById('scroll-content').innerHTML;
scrollContainer.innerHTML += scrollContent;

let startPos = 0;
const speed = 0.25;

function autoScroll() {
    if (startPos >= scrollContainer.scrollHeight / 2) {
        startPos = 0;
    }
    startPos += speed;
    scrollContainer.scrollTop = startPos;
    window.requestAnimationFrame(autoScroll);
}

autoScroll();
