let counter = 2;
let img = document.querySelector('img');

function openNext(){
    if(counter > 3){
        counter = 1;
    }
    img.setAttribute('src',counter + '.jpeg');
    counter = counter + 1;
}

function openPrev(){
    if(counter < 1){
        counter = 3;
    }
    img.setAttribute('src',counter + '.jpeg');
    counter = counter - 1;   
}