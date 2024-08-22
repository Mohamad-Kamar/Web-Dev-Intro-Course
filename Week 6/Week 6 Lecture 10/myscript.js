let name = "mohamad";

function sayHi(){
    alert("Hi Mohamad!");
};

function logIn(){

    let correctName = "Mohamad";
    let correctPassword = "1234";
    
    let userName = prompt("What is your name?");
    let password = prompt("What is your password?");
    let greeting = document.querySelector(".userGreeting");
    let body = document.querySelector("body");
    if(userName === correctName && password === correctPassword){
        greeting.innerHTML = "Welcome " + userName;
        body.style.backgroundColor = "blue";
    }
    else {
        body.style.backgroundColor = "red";
    }
    
}


function changeColor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
}

let body = document.querySelector("body");

let img1 = document.querySelector(".img1");
img1.addEventListener("mouseover", function(){
    body.style.backgroundColor = "red";
});
img1.addEventListener("mouseout", function(){
    body.style.backgroundColor = "white";
});

let img2 = document.querySelector(".img2");
img2.addEventListener("mouseover", function(){
    body.style.backgroundColor = "green";
});
img2.addEventListener("mouseout", function(){
    body.style.backgroundColor = "white";
});