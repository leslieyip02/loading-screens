const insertGrains = () => {
    let hourglass = document.getElementsByClassName("hourglass")[0];
    for (let i = 0; i < 70; i++) {
        let grain = document.createElement("div");
        grain.classList.add("sand__grain");
        grain.style.animationDelay = (i / 10) + "s";
        hourglass.append(grain);
    }
};