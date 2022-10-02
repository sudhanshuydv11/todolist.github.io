let x_in = document.getElementById("add_input");
let y = document.getElementById("add_button");
x_in.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        y.click();

    }
});
