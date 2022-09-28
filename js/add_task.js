let x = document.getElementById("add_input");
let y = document.getElementById("add_button");
x.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        y.click();
        x.value = "";
    }
});