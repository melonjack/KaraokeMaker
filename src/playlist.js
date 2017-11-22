import {player} from './app.js';

let area = document.getElementById('playlist_area');
let button = document.getElementById('playlist_button');
let button_arrows = document.getElementById('playlist_button_arrows');
let nav_button = document.getElementById('nav_playlist_button');
let playlist_window = document.getElementById('playlist_area_window');

nav_button.addEventListener('click',function() {
    openPlaylist();
});

button.addEventListener('click', function () {
    openPlaylist();
});

let active = false;
function arrowAnimation() {
    if (active) {
        button_arrows.style.transform = "";
        button_arrows.style.color = "";
    } else {
        button_arrows.style.transform = "rotateY(180deg)";
        button_arrows.style.color = "rgb(230, 230, 230)";
    }
    return;
}


async function playlistAnimation(){
    if(active){
        playlist_window.style.opacity="";
        await sleep(500);
        playlist_window.style.display = "";
    }else{
        playlist_window.style.display = "block";
        await sleep(1);
        playlist_window.style.opacity="1";
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openPlaylist() {
    arrowAnimation();
    playlistAnimation();
    active = !active;
}