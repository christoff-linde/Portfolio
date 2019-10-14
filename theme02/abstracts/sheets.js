let email_container = document.getElementById("email_container");
let keep_sub_btn_container = document.getElementById("keep_sub_btn_container");
let unsub_btn_container = document.getElementById("unsub_btn_container");
let sheets_container = document.getElementById("sheets_container");
let button_container = document.getElementById("button_container");

let sheets_anim;
let button_anim;

sheets_container.style.visibility = "hidden";
button_container.style.visibility = "hidden";

var anim_list = {
  sheets_animData: {
    container: sheets_container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: 'abstracts/animation_data/sheets.json'
  },
  button_animData: {
    container: button_container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: 'abstracts/animation_data/sheets_button.json'
  },
  keep_sub_btn_animData: {
    container: keep_sub_btn_container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: 'abstracts/animation_data/keep_sub_button.json'
  },
  unsub_btn_animData: {
    container: unsub_btn_container,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: 'abstracts/animation_data/unsub_button.json'
  }
};

let keep_sub_btn_anim = bodymovin.loadAnimation(anim_list['keep_sub_btn_animData']);
let unsub_btn_anim = bodymovin.loadAnimation(anim_list['unsub_btn_animData']);

keep_sub_btn_container.addEventListener("mouseenter", keep_sub_btn_hover_in);
keep_sub_btn_container.addEventListener("mouseleave", keep_sub_btn_hover_out);
unsub_btn_container.addEventListener("mouseenter", unsub_btn_hover_in);
unsub_btn_container.addEventListener("mouseleave", unsub_btn_hover_out);
keep_sub_btn_container.addEventListener("click", keep_sub_clicked);
unsub_btn_container.addEventListener("click", unsub_clicked);

function keep_sub_btn_hover_in() {
  keep_sub_btn_anim.playSegments([0, 7], true);
  this.style.cursor = "pointer";
}

function keep_sub_btn_hover_out() {
  keep_sub_btn_anim.playSegments([7, 0], true);
}

function unsub_btn_hover_in() {
  unsub_btn_anim.playSegments([0, 7], true);
  this.style.cursor = "pointer";
}

function unsub_btn_hover_out() {
  unsub_btn_anim.playSegments([7, 0], true);
}

function keep_sub_clicked() {
  keep_sub_btn_anim.playSegments([20, 40], true);
  remove_eventlisteners();
  setTimeout(load_sheets, 1000);
}

function unsub_clicked() {
  unsub_btn_anim.playSegments([20, 40], true);
  remove_eventlisteners();
  setTimeout(load_sheets, 1000);
}

function remove_eventlisteners() {
  keep_sub_btn_container.removeEventListener("mouseenter", keep_sub_btn_hover_in);
  keep_sub_btn_container.removeEventListener("mouseleave", keep_sub_btn_hover_out);
  unsub_btn_container.removeEventListener("mouseenter", unsub_btn_hover_in);
  unsub_btn_container.removeEventListener("mouseleave", unsub_btn_hover_out);
}

function remove_email() {
  email_container.parentNode.removeChild(email_container);
}

function load_sheets() {
  console.log("load_sheets");
  remove_email();

  sheets_anim = bodymovin.loadAnimation(anim_list["sheets_animData"]);
  sheets_anim.addEventListener("data_ready", data_ready);
};

function load_button() {
  console.log("load_button");
  button_anim = bodymovin.loadAnimation(anim_list["button_animData"]);
};

function data_ready() {
  console.log("data_ready");
  sheets_container.style.visibility = "visible";
  load_button();
  setTimeout(play_sheets, 1000);
};

function play_sheets() {
  sheets_anim.play();
  sheets_anim.addEventListener('complete', sheets_complete);
};

function sheets_complete() {
  console.log("sheets_complete");
  setTimeout(activate_buttons, 1000);
};

function activate_buttons() {
  button_container.style.visibility = "visible";
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
  window.location.assign("page_04.html");
}