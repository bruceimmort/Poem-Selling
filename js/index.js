const login = document.querrySelector(".login");

function loginfun(){
    const signuptxt = document.querrySelector(".signuptxt");
    // const password = document.querrySelector("password").value;
    singnuptxt.innerHTML = "Login";
}

login.addEventListener('click', loginfun);