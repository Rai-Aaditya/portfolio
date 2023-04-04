const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const body = document.getElementById('body');
function menuDisplay(){
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('bg-white');
}

function changeTheme(){
    body.classList.toggle('dark');
}
