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

// colours
// #ff0000, #00ff00, #0000ff, #ffff00, #ff00ff, #00ffff
let colours = [
    "invert(22%) sepia(54%)  saturate(6762%) hue-rotate(353deg) brightness(91%)  contrast(126%)",
    "invert(47%) sepia(81%)  saturate(1377%) hue-rotate(86deg)  brightness(118%) contrast(126%)",
    "invert(9%)  sepia(100%) saturate(7367%) hue-rotate(248deg) brightness(91%)  contrast(144%)",
    "invert(87%) sepia(100%) saturate(7500%) hue-rotate(359deg) brightness(107%) contrast(107%)",
    "invert(17%) sepia(100%) saturate(3764%) hue-rotate(294deg) brightness(115%) contrast(126%)",
    "invert(74%) sepia(98%)  saturate(1132%) hue-rotate(120deg) brightness(101%) contrast(104%)"
];

let colourIndex = 0;
const swapColour = () => {
    DVD.style.filter = colours[(colourIndex + 1) % 6];
    colourIndex++;
};

setInterval(() => {
    if (x < 0 || (x + w) >= window.innerWidth) {
        dx *= -1;
        swapColour();
    }

    if (y < 0 || (y + h) >= window.innerHeight) {
        dy *= -1;
        swapColour();
    }

    x += dx;
    y += dy;

    DVD.style.left = x + "px";
    DVD.style.top = y + "px";
}, dt);