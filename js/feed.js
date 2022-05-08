const url = window.location.href
const name = url.split("=");
const uid = document.querySelector(".uid");
uid.innerHTML = name[1];
