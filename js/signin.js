
var signinemail = document.getElementById("signinemail")
var Signinpass = document.getElementById("signinpass")
var s = document.getElementById("signin_button")
var v = document.getElementById("incorrect")
var y = document.getElementById("error") 
var container=[]
if (localStorage.getItem('inputs') != null) {
    container = JSON.parse(localStorage.getItem("inputs"))
}
function addinputs2() {
    var exist = false;
    if (signinemail.value == "" || Signinpass.value == "") {
        y.classList.remove("d-none")
    } 
    else {
        var inputs = {
            email: signinemail.value,
            pass: Signinpass.value,
        }
        for (var i = 0; i < container.length; i++) {
            if (inputs.email === container[i].email && inputs.pass === container[i].pass) {
                exist =true
                localStorage.setItem("username",container[i].name)
                window.location.href="name.html"
                break
            }
        } if (!exist) {
            y.classList.add("d-none")
            v.classList.remove("d-none")
        } 


    }
}
s.addEventListener("click",addinputs2)