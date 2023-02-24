const select = (selector) => {
    document.getElementById("loading-screen")
        .setAttribute("src", `./${selector.value}/index.html`);
}