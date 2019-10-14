let icon_01_container = document.getElementById("icon_01");
let icon_02_container = document.getElementById("icon_02");
let icon_03_container = document.getElementById("icon_03");

let loader_01 = document.getElementById("loader01");
let loader_02 = document.getElementById("loader02");
let loader_03 = document.getElementById("loader03");

let next_button_container = document.getElementById("next_text");
next_button_container.style.visibility = "hidden";

icon_01_container.addEventListener("click", playAnimation_01);
icon_02_container.addEventListener("click", playAnimation_02);
icon_03_container.addEventListener("click", playAnimation_03);

var animList = {
   icon_01_animData: {
      container: icon_01_container,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      path: 'abstracts/animation_data/heartbeat.json'
   },
   icon_02_animData: {
      container: icon_02_container,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      path: 'abstracts/animation_data/house.json'
   },
   icon_03_animData: {
      container: icon_03_container,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      path: 'abstracts/animation_data/car.json'
   },
   loader_01_animData: {
      container: loader_01,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/romance_loader.json'
   }, loader_02_animData: {
      container: loader_02,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/automotive_loader.json'
   }, loader_03_animData: {
      container: loader_03,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/realEstate_loader.json'
   },
   next_button_animData: {
      container: next_button_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/next_button.json'
   }
};

function loadAnimations() {
   var heartbeatAnim = bodymovin.loadAnimation(animList['icon_01_animData']);
   var carAnim = bodymovin.loadAnimation(animList['icon_02_animData']);
   var houseAnim = bodymovin.loadAnimation(animList['icon_03_animData']);
   heartbeatAnim.addEventListener('DOMLoaded', load_loaders);
}

var anim01 = bodymovin.loadAnimation(animList['loader_01_animData']);
var anim02 = bodymovin.loadAnimation(animList['loader_02_animData']);
var anim03 = bodymovin.loadAnimation(animList['loader_03_animData']);
var nextAnim = bodymovin.loadAnimation(animList['next_button_animData']);

function load_loaders() {
   loader_01.style.visibility = 'hidden';
   loader_02.style.visibility = 'hidden';
   loader_03.style.visibility = 'hidden';
}

function playAnimation_01() {
   console.log("playAnim_01")
   loader_01.style.visibility = 'visible';
   anim01.play();
}

function playAnimation_02() {
   console.log("playAnim_02")
   loader_02.style.visibility = 'visible';
   anim02.play();
}

function playAnimation_03() {
   console.log("playAnim_03")
   loader_03.style.visibility = 'visible';
   anim03.play();
   setTimeout(displayNext, 3500);
}

function displayNext() {
   next_button_container.style.visibility = "visible";
   nextAnim.play();
}

loadAnimations();
load_loaders();