let counter=1;
let images = document.querySelectorAll(".bookcover")
images.forEach((image)=>{
    console.log(image);
    image.setAttribute("data-index",counter)
    counter++;
});
images.forEach((image)=>{
    let index = image.dataset['index']
    let source
    image.addEventListener("click",()=>{
        source = image.getAttribute("src")
        console.log(source);
        let descimg = document.querySelector(".descriptionimg");
        let overlay = document.querySelector(".overlayhidden");
        descimg.setAttribute("src",source);
        overlay.className = "overlay";
    })
});
function hide(){
    let overlay = document.querySelector(".overlay");
    if (overlay.className == "overlay") {
        overlay.className = "overlayhidden";
    }
}