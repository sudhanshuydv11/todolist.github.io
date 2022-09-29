



let counter_for_checkbox = 2;

function Add() {

    let y1 = document.getElementById("add_input");
    let y = y1.value;
    if (y === "") return;
    console.log(y);
    let x = document.getElementById("card_container");


    let main_child = document.createElement('div');
    let input_div = document.createElement('div');
    let text_div = document.createElement('div');
    let c_input = document.createElement('input');
    let c_text = document.createElement('text');

    main_child.className = "card";
    main_child.id = "card" + counter_for_checkbox.toString();

    c_input.type = "checkbox";
    input_div.className = "common_div";
    text_div.className = "common_div";

    c_input.id = counter_for_checkbox.toString();
    c_text.innerText = y;
    c_text.className = "custom_text";
    c_text.id = "text" + counter_for_checkbox.toString();

    input_div.appendChild(c_input);
    text_div.appendChild(c_text);
    main_child.appendChild(input_div);
    main_child.appendChild(text_div);
    x.appendChild(main_child);
    setTimeout(() => {
        c_text.style.opacity = "1";
        main_child.style.opacity = "1";
    }, 10);








    c_input.addEventListener("click", () => {
        let temp = document.getElementById("text" + c_input.id);
        temp.style.color = "grey";
        temp.style.textDecoration = "line-through";
        temp = document.getElementById("card" + c_input.id);
        temp.style.transition = "opacity 0.5s";
        temp.style.opacity = "0";
        setTimeout(() => {

            temp.remove();

        }, 400, temp);

    });


    y1.value = "";
    counter_for_checkbox++;

}
