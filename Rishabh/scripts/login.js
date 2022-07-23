import { login_part,login_code } from "../components/page_content.js";

let login_section = document.querySelector("#left_part");
login_section.innerHTML = login_part();

// fucntion section :- 

let form = document.querySelector("form");

let check_entry = (e) => {
    e.preventDefault();

    let obj = {
        email : form.email.value,
        password : form.password.value,
    }
    login_code(obj.email,obj.password)
}

form.addEventListener("submit",check_entry)