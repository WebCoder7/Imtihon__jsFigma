const form = document.querySelector(".form")
const formUsername = document.querySelector(".Login__email")
const formPasword = document.querySelector(".Login__pasword")


form.addEventListener("submit", e => {
    e.preventDefault()
    let user = {
        username: formUsername.value,
        password: formPasword.value
    }
    console.log(user);
})

