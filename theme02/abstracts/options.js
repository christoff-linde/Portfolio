let option_container = document.getElementById("option_container");
let option_01 = document.getElementById("option_01");
let option_02 = document.getElementById("option_02");
let option_03 = document.getElementById("option_03");

let animList = {
   option_01_animData: {
      container: option_01,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/option_01.json'
    },
   option_02_animData: {
      container: option_02,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/option_02.json'
    },
   option_03_animData: {
      container: option_03,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/option_03.json'
    }
}

let option_01_anim = bodymovin.loadAnimation(animList["option_01_animData"]);
let option_02_anim = bodymovin.loadAnimation(animList["option_02_animData"]);
let option_03_anim = bodymovin.loadAnimation(animList["option_03_animData"]);

option_01.addEventListener("mouseenter", hover_in_01);
option_01.addEventListener("mouseleave", hover_out_01);
option_01.addEventListener("click", changeScreen);

option_02.addEventListener("mouseenter", hover_in_02);
option_02.addEventListener("mouseleave", hover_out_02);
option_02.addEventListener("click", changeScreen);

option_03.addEventListener("mouseenter", hover_in_03);
option_03.addEventListener("mouseleave", hover_out_03);
option_03.addEventListener("click", changeScreen);

function hover_in_01() {
   option_01_anim.playSegments([0, 7], true);
   this.style.cursor = "pointer";
}
function hover_out_01() {
   option_01_anim.playSegments([7, 0], true);
}

function hover_in_02() {
   option_02_anim.playSegments([0, 7], true);
   this.style.cursor = "pointer";
}
function hover_out_02() {
   option_02_anim.playSegments([7, 0], true);
}

function hover_in_03() {
   option_03_anim.playSegments([0, 7], true);
   this.style.cursor = "pointer";
}
function hover_out_03() {
   option_03_anim.playSegments([7, 0], true);
}

var myVar;
function changeScreen() {
  console.log("changeScreen");
  myVar = setTimeout(myFunction, 500);
}

function myFunction() {
  window.location.assign("page_06.html");
}