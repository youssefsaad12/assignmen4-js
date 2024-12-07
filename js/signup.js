var Signupname = document.getElementById("Signupname")
var Signupemail = document.getElementById("Signupemail")
var x = document.getElementById("signup_button")
var y = document.getElementById("error") 
var z = document.getElementById("Success")
var w = document.getElementById("emailexists")
var v = document.getElementById("incorrect")
var container = [];
if (localStorage.getItem('inputs') != null) {
    container = JSON.parse(localStorage.getItem("inputs"))
}
function addinputs() {
    var emailExists = false;
    if (Signupname.value == "" || Signupemail.value == "" || Signuppass.value == "") {
        y.classList.remove("d-none")
        z.classList.add("d-none")
    } else {
        var inputs = {
            name: Signupname.value,
            email: Signupemail.value,
            pass: Signuppass.value,
        }
        for (var i = 0; i < container.length; i++) {
            if (Signupemail.value === container[i].email) {
                emailExists = true;
                break;
            }
        }
        if (emailExists) {
            w.classList.remove("d-none");
            z.classList.add("d-none");
            y.classList.add("d-none");
        } else {
            container.push(inputs);
            localStorage.setItem("inputs", JSON.stringify(container));
            clear();
            y.classList.add("d-none");
            z.classList.remove("d-none");
            w.classList.add("d-none");
        }
    }


}

function clear() {
    Signupname.value = null
    Signupemail.value = null
    Signuppass.value = null
}
x.addEventListener("click", addinputs)

