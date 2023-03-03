const CONTAINER_WIDTH = 20;
const TOTAL_POINTS = 80;
const DELAY_FACTOR = TOTAL_POINTS;

const insertPoints = () => {
    let ripple = document.getElementById("sinusoidal");
    for (let i = 0; i < TOTAL_POINTS; i++) {
        let point = document.createElement("div");
        point.classList.add("ripple__point");
        point.classList.add("ripple--sinusoidal");
        point.style.left = i / TOTAL_POINTS * CONTAINER_WIDTH + "rem";
        point.style.animationDelay = (i / DELAY_FACTOR) + "s";
        ripple.append(point);
    }
};