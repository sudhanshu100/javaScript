let btn = document.querySelector("button");
let mode = "lite";
btn.addEventListener("click", () => {
    if (mode === "lite"){
        mode = "dark";  
        let body = document.querySelector("body")
        body.style.backgroundColor = "black";
    }
    else{
        mode = "lite";
        let body = document.querySelector("body")
        body.style.backgroundColor = "white";
    }
    console.log(mode);
})
