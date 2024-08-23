// let ul = document.querySelector('ul');
// ul.style.backgroundColor = 'lightblue';

// let all = document.querySelectorAll('*');
// let allList = Array.from(all);
// allList.forEach(function (item) {
//     item.style.color = 'red';
// });


function turnOnLight(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}

function turnOnDark(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}