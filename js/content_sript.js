



let counter_for_checkbox = 2;

function Add() {
    let y = document.getElementById("add_input").value;
    console.log(y);
    let x = document.getElementById("card_container");


    let main_child = document.createElement('div');
    let input_div = document.createElement('div');
    let c_input = document.createElement('input');
    let c_text = document.createElement('text');

    main_child.className = "card";
    main_child.id = "card" + counter_for_checkbox.toString();

    c_input.type = "checkbox";



    c_input.id = counter_for_checkbox.toString();
    c_text.innerText = y;
    c_text.id = "text" + counter_for_checkbox.toString();

    input_div.appendChild(c_input);
    main_child.appendChild(input_div);
    main_child.appendChild(c_text);
    x.appendChild(main_child);

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



    counter_for_checkbox++;

}
