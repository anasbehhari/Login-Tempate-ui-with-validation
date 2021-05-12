const submit_button = document.querySelector("button");
var pass = true;
let count = 0;
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
    if (data.fullname_input.value == "") {
        pass = false;
        data.fullname_input.focus()
        if ($(data.fullname)[0].children.length < 2) {
            data.fullname.append("<small class='failure error'><i class='bi bi-exclamation-circle-fill'></i> Saisisser votre nom complet.</small>")
            data.fullname.addClass("failure")
            if (count == 0) {
                data.fullname_input.onblur = () => {
                    if (data.fullname_input.value != "" && typeof data.fullname[0].children[1]) {
                        data.fullname[0].children[1].remove()
                        data.fullname.removeClass("failure")
                        if ($(".error").length == 0) {
                            pass = true;
                        }
                    }
                    else if (!data.fullname[0].children[1] && data.fullname_input.value == "") {
                        pass = false;
                        data.fullname.append("<small class='failure error'><i class='bi bi-exclamation-circle-fill'></i>  Saisisser votre nom complet.</small>")
                        data.fullname.addClass("failure")
                    }
                }
            }
        }
    }
    if (data.email_input.value == "" && !validateEmail(data.email_input.value)) {
        pass = false;
        data.email_input.focus()
        if ($(data.email)[0].children.length < 2) {
            data.email.append("<small class='failure error'><i class='bi bi-exclamation-circle-fill'></i> Saisissez une adresse e-mail valide.</small>")
            data.email.addClass("failure")
            if (count == 0) {
                data.email_input.onblur = () => {
                    if (data.email[0].children[1] && validateEmail(data.email_input.value)) {
                        data.email[0].children[1].remove()
                        data.email.removeClass("failure")
                        if ($(".error").length == 0) {
                            pass = true;
                        }
                    }
                    else if (!data.email[0].children[1] && !validateEmail(data.email_input.value)) {
                        pass = false;
                        data.email.append("<small class='failure error'><i class='bi bi-exclamation-circle-fill'></i> Saisissez une adresse e-mail valide.</small>")
                        data.email.addClass("failure")
                    }
                }
            }
        }
    }
    if (data.password_input.value.length < 7) {
        pass = false;
        data.password_input.focus()
        data.password.addClass("failure")
        if ($(data.password)[0].children.length < 3) {

            data.password[0].children[1].classList.add("failure")
            if (count == 0) {
                data.password_input.onblur = () => {
                    if (data.password_input.value.length > 7 && data.password[0].children[1]) {
                        data.password[0].children[1].classList.remove("failure")
                        data.email.removeClass("failure")
                        if ($(".error").length == 0) {
                            pass = true;
                        }
                    }
                    else {
                        pass = false;
                        data.password[0].children[1].classList.add("failure")
                    }
                }
            }
        }
    }
    
    if (data.password_input.value.length > 7) {
        if (data.password_input.value === data.password_confirm_input.value ) {
            console.log("here0");
            if (data.password_confirm[0].children[1]) {
                data.password_confirm[0].children[1].remove()
                data.password_confirm.removeClass("failure")
            }
            if ($(".error").length == 0) {
                
                pass=true;
            }
            else {
                pass=false;
            }
        }
        else if (data.password_confirm_input.value != data.password_input.value && data.password_confirm_input.value.length!=0) {
            if (data.password_confirm[0].children[1]) {
                data.password_confirm[0].children[1].remove()
                data.password_confirm.removeClass("failure")
            }
            data.password_confirm_input.focus()
            data.password_confirm.append("<small class='failure error'><i class='bi bi-exclamation-circle-fill'></i> Les mots de passe que vous avez entrés ne sont pas identiques.</small>")
            data.password_confirm.addClass("failure")
        }
        else {
            if (data.password_confirm[0].children[1]) {
                data.password_confirm[0].children[1].remove()
                data.password_confirm.removeClass("failure")
            }
            console.log("here3");
            data.password_confirm_input.focus()
            data.password_confirm.append("<small class='failure error'><i class='bi bi-exclamation-circle-fill'></i> confirmer votre mot de passe .</small>")
            data.password_confirm.addClass("failure")
        }

    }

    if (!pass || !data.checkbox_input.checked) {
        alert(pass)
        e.preventDefault();
    }
    count++;
}























const eyes = document.querySelectorAll(".bi-ps-s-h");
eyes.forEach(eye => {
    eye.onclick = () => {
        if (eye.classList.contains("hide")) {
            eye.parentElement.children[0].setAttribute("type","password");
            eye.classList.remove("hide")
        }
        else {
            eye.parentElement.children[0].setAttribute("type","text");
            eye.classList.add("hide")
        }
    }
})
