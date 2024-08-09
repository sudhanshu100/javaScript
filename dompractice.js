let bttn = document.createElement("button");
bttn.innerText = "click me";
bttn.style.backgroundColor = "red";
bttn.style.color = "white";

document.querySelector("body").prepend(bttn);


let para = document.querySelector("p");
para.classList.add("newcls");
para.classList.remove("random");
