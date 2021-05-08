const submit_button = document.querySelector("button");
const data =
{
    fullname: $(".fullname"),
    fullname_input: $(".fullname input")[0],
    email: $(".email"),
    email_input: $(".email input")[0],
    password: $(".password"),
    password_input: $(".password input")[0],
    password_confirm: $(".password-confirm"),
    password_confirm_input: $(".password-confirm input")[0],
    checkbox: $(".checkbox"),
    checkbox_input: $(".checkbox input")[0],
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
submit_button.onclick = (e) => {
    var pass = true;
    if (!data.fullname_input.value && $(data.fullname)[0].children.length < 2) {
        pass = false;
        data.fullname.append("<small class='danger'><i class='bi bi-exclamation-circle-fill'></i> Saisisser votre nom complet.</small>")
        data.fullname.addClass("danger")
        data.fullname_input.focus()
        data.fullname_input.onblur = () => {
            if (data.fullname_input.value != "" && data.fullname[0].children[1]) {
                data.fullname[0].children[1].remove()
                data.fullname.removeClass("danger")
                pass = true;
            }
        }
    }
    if (!data.email_input.value && $(data.email)[0].children.length < 2 && !validateEmail(data.email_input.value)) {
        pass = false;
        data.email.append("<small class='danger'><i class='bi bi-exclamation-circle-fill'></i> Saisissez une adresse e-mail valide.</small>")
        data.email.addClass("danger")
        data.email_input.focus()
        data.email_input.onblur = () => {
            if (data.email_input.value != "" && data.email[0].children[1] && validateEmail(data.email_input.value)) {
                data.email[0].children[1].remove()
                data.email.removeClass("danger")
                pass = true;
            }
        }
    }
    if (!data.password_confirm_input.value && !data.password_input.value && $(data.password_confirm)[0].children.length < 2) {
        pass = false;
        data.password_confirm.append("<small class='danger'><i class='bi bi-exclamation-circle-fill'></i> Saisissez un Mot de passe valide .</small>")
        data.password_confirm.addClass("danger")
        data.password_confirm_input.focus()
        data.password_confirm_input.onblur = () => {
            if (data.password_confirm_input.value != "" && data.password_confirm[0].children[1]) {
                data.password_confirm[0].children[1].remove()
                data.password_confirm.removeClass("danger")
                pass = true;

            }
        }
    }
    if (data.password_confirm_input.value != "" && data.password_confirm_input.value != data.password_input.value) {
        pass = false;
        data.password_confirm.append("<small class='danger'><i class='bi bi-exclamation-circle-fill'></i> Les mots de passe que vous avez entrés ne sont pas identiques.</small>")
        data.password_confirm.addClass("danger")
        data.password_confirm_input.focus()
        data.password_confirm_input.onblur = () => {
            if (data.password_confirm_input.value != "" && data.password_confirm[0].children[1]) {
                data.password_confirm[0].children[1].remove()
                data.password_confirm.removeClass("danger")
                pass = true;

            }
        }
    }
    if (data.password_confirm_input.value != "" && data.password_confirm_input.value == data.password_input.value && !data.password_input.value.lentgh > 6) {
        pass = false;
        data.password[0].children[1].addClass("danger")
    }
    if (data.password_confirm_input.value != "" && data.password_confirm_input.value == data.password_input.value && data.password_input.value.lentgh > 6) {
        data.password[0].children[1].removeClass("danger")
        pass = true;
    }
   
    if (!pass && !data.checkbox_input.checked) {
        e.preventDefault();
    }
   
}


const eyes = document.querySelectorAll(".bi-ps-s-h");
eyes.forEach(eye => {
    eye.onclick =()=>{
        if(eye.classList.contains("hide")) {
            eye.parentElement.children[0].setAttribute("type","password");
            eye.classList.remove("hide")
        }
        else {
            eye.parentElement.children[0].setAttribute("type","text");
            eye.classList.add("hide")
        }
    }
})