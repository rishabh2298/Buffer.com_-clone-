import { signup_part,signup_code } from "../components/page_content.js";


let left = document.querySelector("#left_part")
left.innerHTML = signup_part();

let form = document.querySelector("form")

let my_function = (event) => {
    event.preventDefault();

    let obj = {
        email : form.email.value,
        password : form.password.value,
    }
    signup_code(obj.email, obj.password);
}

form.addEventListener("submit",my_function)