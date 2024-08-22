// let age = prompt("What is your age");
// let age2 = age*2;
// alert("2nta 3omrak mdawbal " + age2);

// let hero = prompt("Who is your favorite hero?");
// if(hero === "superman" || hero === "Superman"){
//     alert("Welcome Superman");
// }
// else if(hero === "Batman"  || hero === "batman"){
//     alert("Batman is cool!");
// }
// else if(hero === "pinocio" || hero === "thanos"){
//     alert("")
// }
// else{
//     alert("Not cool!");
// }


// let userName = prompt("What is your name?");
// let greeting = document.querySelector(".userGreeting");
// greeting.innerHTML = "Welcome " + userName + "!";

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
