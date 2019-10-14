let menu_sound = document.getElementById("click_sound");
let no_item = document.getElementById("no-item");

no_item.addEventListener('onclick', playSound);

function playSound() {
   menu_sound.play();
}
