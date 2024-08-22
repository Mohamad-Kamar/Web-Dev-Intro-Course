let age = prompt("What is your age?");
if(age >= 18){
    let a = document.querySelector("a");
    a.setAttribute("href", "https://www.youtube.com/");
}
else if (age < 18){
    let a = document.querySelector("a");
    a.setAttribute("href", "https://www.youtubekids.com/");
}