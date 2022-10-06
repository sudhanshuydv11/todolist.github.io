// eslint-disable-next-line camelcase
const x_in = document.getElementById("add_input");
const y = document.getElementById("add_button");
// eslint-disable-next-line camelcase
x_in.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        y.click();
    }
});
