const login = document.querySelector(".login");
const signup = document.getElementById("signup");
const submitbtn = document.querySelector('.submitbtn');
const loginbtn = document.querySelector('.loginbtn');
const closeerror = document.querySelector(".close");

function loginfun(){
    const signup = document.querySelector(".signup");
    const logindiv = document.querySelector(".logindivhidden");
    signup.className = "signuphidden";
    logindiv.className = "logindiv";
    // 23121985
}
function signupfun(){
    const signup = document.querySelector(".signuphidden");
    const logindiv = document.querySelector(".logindiv");
    signup.className = "signup";
    logindiv.className = "logindivhidden";
}
function signin(){
    const input1 = document.querySelector(".input1").value;
    const input2 = document.querySelector(".input2").value;
    const input3 = document.querySelector(".input3").value;
    const category = document.querySelector(".category").value;
    const error = document.querySelector(".errorhidden");
    // var encrypt = {"a":"k", "b":"l","c":"o","d":""}
    if (input1 == "" || input2 == "" || input3 == "") {
        error.className = "error";
        setTimeout(()=>{error.className = "errorhidden"},5000);
    } else {
        if (category == "aficionado") {
            window.location.href = "../feed.html?u=a&n="+input1;
        } else {
            window.location.href = "../feed.html?u=p&n="+input1;
        }
    }
}
function loggingin(){
    const input4 = document.querySelector(".input4").value;
    const input5 = document.querySelector(".input5").value;
    const error = document.querySelector(".errorhidden");
    if (input4 == "" || input5 == "") {
        error.className = "error";
        setTimeout(()=>{error.className = "errorhidden"},5000);
    } else {
        window.location.href = "../feed.html?n="+input4;
    }
}
function closeerrorfun(){
    const error = document.querySelector(".error");
    error.className = "errorhidden";
}

login.addEventListener('click', loginfun);
signup.addEventListener('click', signupfun);
submitbtn.addEventListener('click', signin);
loginbtn.addEventListener('click', loggingin);
closeerror.addEventListener('click', closeerrorfun);