const DVD = document.getElementById("dvd");

// DVD dimensions
let w = DVD.clientWidth;
let h = DVD.clientHeight;

// DVD position
let x = 0;
let y = 0;
let dx = 3;
let dy = 3;

// 30 FPS
let dt = 1 / 30;

setInterval(() => {
    if (x < 0 || (x + w) >= window.innerWidth) {
        dx *= -1;
    }

    if (y < 0 || (y + h) >= window.innerHeight) {
        dy *= -1;
    }

    x += dx;
    y += dy;

    DVD.style.left = x + "px";
    DVD.style.top = y + "px";
}, dt);