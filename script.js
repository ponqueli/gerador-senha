
let sliderElement = document.querySelector("#slider")
let generatePasswordButtonID = document.querySelector("#generatePasswordButtonID")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvxzABCDFGHIJKLMNOPQRSTUVXZ0123456789!?@#$%&*.-"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass = ""
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("esconde")
    password.innerHTML = pass
    novaSenha = pass
    generateToastMessage("Senha gerada com sucesso!", "#198754", "#fff")
}

function copyPasswordAndCallToast(){
    navigator.clipboard.writeText(novaSenha)
    generateToastMessage("Senha copiada!", "#0dcaf0", "#000")
}
function generateToastMessage(text, bgColor, fontColor){
    Toastify({
        text,
        className: "info",
        gravity: "bottom",
        position:"center",
        stopOnFocus: true,
        style: {
            background: bgColor,
            fontSize: "22px",
            borderRadius: "8px",
            color: fontColor
        },
    }).showToast();
}
