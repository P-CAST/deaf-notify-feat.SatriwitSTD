class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit()
    }

    validateonSubmit() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault()
            localStorage.setItem("auth", 1)
            this.form.submit()
        })
    }
}

class Auth {
    constructor() {
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }
    // check to see if the localStorage item passed to the function is valid and set
    validateAuth(auth) {
        if (auth != 1) {
            window.location.replace("/login");
        } else {
            document.querySelector("body").style.display = "block";
        }
    }
    // will remove the localStorage item and redirect to login  screen
    logOut() {
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
}

export const isAuth = () => {
    if (localStorage.getItem("auth") == 1) return true
    else return false
}

const form = document.querySelector(".loginForm")

if (form) {
    const fields = ["email", "password"]
    const validator = new Login(form, fields)
}