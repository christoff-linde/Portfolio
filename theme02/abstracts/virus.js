let virus_icon_container = document.getElementById("virus_icon_container");
let button_container = document.getElementById("button_container");

let virus_icon_anim;
let button_anim;

let anim_list = {
   virus_icon_animData: {
      container: virus_icon_container,
      renderer: 'svg',
      autoplay: false,
      loop: true,
      path: 'abstracts/animation_data/virus_icon.json'
   },
   button_animData: {
      container: button_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/credits.json'
   }
}

load_charts();
activate_buttons();

button_anim = bodymovin.loadAnimation(anim_list["button_animData"]);

function load_charts() {
   charts_anim = bodymovin.loadAnimation(anim_list["virus_icon_animData"]);
   charts_anim.addEventListener("data_ready", data_ready);
}

function data_ready() {
   charts_anim.play();
}

function activate_buttons() {
   button_container.addEventListener("click", button_click);
   button_container.addEventListener("mouseenter", button_hover_in);
   button_container.addEventListener("mouseleave", button_hover_out);
};

function button_hover_in() {
   console.log("mouseenter");
   button_anim.playSegments([0, 7], true);
   button_container.style.cursor = "pointer";
};

function button_hover_out() {
   console.log("mouseleave");
   button_anim.playSegments([7, 0], true);
   button_container.style.cursor = "pointer";
}

function button_click() {
   button_container.removeEventListener("mouseenter", button_hover_in);
   button_container.removeEventListener("mouseleave", button_hover_out);

   button_anim.playSegments([20, 40], true);

   setTimeout(changeScreen, 1000);
}

var myVar;
function changeScreen() {
   console.log("changeScreen");
   myVar = setTimeout(myFunction, 500);
}

function myFunction() {
   window.location.assign("page_08.html");
}