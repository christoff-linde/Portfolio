let card_01_container = document.getElementById('password_card_container_01');
let card_02_container = document.getElementById('password_card_container_02');
let card_03_container = document.getElementById('password_card_container_03');
let card_04_container = document.getElementById('password_card_container_04');
let card_05_container = document.getElementById('password_card_container_05');

function addPhone() {
   let phone_container = document.getElementById("phone_container");
   let home_button = document.getElementById("home_button");
   phone_container.style.visibility = "visible";
   home_button.style.visibility = "visible";
   addMainCards();
   addPasswordCardScreen();
   addPirateScreen();
   addVirusScreen();
   addInstallScreen();
}

home_button.addEventListener("click", homeButton);
wifi_card.addEventListener("click", showPasswordCards);
computer_card.addEventListener("click", showPirateScreen);
virus_card.addEventListener("click", showInstallScreen);

let submit_bg = document.getElementById("submit_bg");

submit_bg.addEventListener("click", submitClicked);


function submitClicked() {
   hidePasswordCards();
   showVirus();
}

function homeButton() {
   hidePasswordCards();
   hidePirateScreen();
   hideVirus();
   hideInstallScreen();
   hideMalware();
   showMainCards();
}

function addMainCards() {
   let phone_title = document.getElementById("phone_title");
   let wifi_card = document.getElementById("wifi_card");
   let computer_card = document.getElementById("computer_card");
   let virus_card = document.getElementById("virus_card");
   showMainCards();
}

function hidePhone() {
   phone_container.style.visibility = "hidden";
   hideMainCards();
   hidePasswordCards();
}

function showMainCards() {
   phone_title.style.visibility = "visible";
   wifi_card.style.visibility = "visible";
   computer_card.style.visibility = "visible";
   virus_card.style.visibility = "visible";
}

function hideMainCards() {
   phone_title.style.visibility = "hidden";
   wifi_card.style.visibility = "hidden";
   computer_card.style.visibility = "hidden";
   virus_card.style.visibility = "hidden";
}

function addPasswordCardScreen() {
   let phone_subtitle = document.getElementById("phone_subtitle");
   let submit_card = document.getElementById("submit_card");
   hidePasswordCards();
}

function showPasswordCards() {
   hideMainCards();
   phone_subtitle.style.visibility = "visible";
   card_01_container.style.visibility = "visible";
   card_02_container.style.visibility = "visible";
   card_03_container.style.visibility = "visible";
   card_04_container.style.visibility = "visible";
   card_05_container.style.visibility = "visible";
   submit_card.style.visibility = "visible";
}

function hidePasswordCards() {
   phone_subtitle.style.visibility = "hidden";
   card_01_container.style.visibility = "hidden";
   card_02_container.style.visibility = "hidden";
   card_03_container.style.visibility = "hidden";
   card_04_container.style.visibility = "hidden";
   card_05_container.style.visibility = "hidden";
   submit_card.style.visibility = "hidden";
}

function addPirateScreen() {
   let pirate_screen = document.getElementById("pirate_screen");
   let download_button = document.getElementById("download_button");
   let exit_button = document.getElementById("exit_button");
   let hideIP_button = document.getElementById("hideIP_button");
   let clickMe_button = document.getElementById("clickMe_button");

   exit_button.addEventListener("click", showSafe);
   download_button.addEventListener("click", showVirus);
   hideIP_button.addEventListener("click", showVirus);
   clickMe_button.addEventListener("click", showVirus);

   pirate_screen.style.visibility = "hidden";
}

function showPirateScreen() {
   pirate_screen.style.visibility = "visible";
   download_button.style.visibility = "visible";
   exit_button.style.visibility = "visible";
}

function hidePirateScreen() {
   pirate_screen.style.visibility = "hidden";
   download_button.style.visibility = "hidden";
   exit_button.style.visibility = "hidden";
}

function addVirusScreen() {
   let virus_screen = document.getElementById("virus_screen");
   let hacked_message = document.getElementById("hacked_message");
   let improve_message = document.getElementById("improve_message");
   virus_screen.style.visibility = "hidden";
   hacked_message.style.visibility = "hidden";
   improve_message.style.visibility = "hidden";
}

function showSafe() {
   hidePirateScreen();
   showMainCards();
}

function showVirus() {
   hideMainCards();
   hidePirateScreen();
   virus_screen.style.visibility = "visible";
   hacked_message.style.visibility = "visible";
   improve_message.style.visibility = "hidden";

   window.setTimeout(showImproveMessage, 3000);
}

function hideVirus() {
   virus_screen.style.visibility = "hidden";
   hacked_message.style.visibility = "hidden";
   improve_message.style.visibility = "hidden";
}

function showImproveMessage() {
   hacked_message.style.visibility = "hidden";
   improve_message.style.visibility = "visible";
}

function addInstallScreen() {
   let malicious_install_screen = document.getElementById("malicious_install_screen");
   let yes_btn = document.getElementById("yes_btn");
   let no_btn = document.getElementById("no_btn");
   yes_btn.addEventListener("click", hideInstallScreen);
   no_btn.addEventListener("click", showMalware)
   hideInstallScreen();
}

function showInstallScreen() {
   console.log('showInstallScreen');
   hideMainCards();
   malicious_install_screen.style.visibility = "visible";
   russian_message_container.style.visibility = "hidden";
   setTimeout(showVirusDialog, 600);
}

function addVirusMessage() {
   console.log('addVirusMessage');
   let virus_message = document.getElementById("virus_message");
   virus_message.style.visibility = "hidden";
}

function showVirusDialog() {
   virus_dialog_anim.play();
   yesBtn_anim.play();
   noBtn_anim.play();
}

function hideInstallScreen() {
   malicious_install_screen.style.visibility = "hidden";
   showMainCards();
}

function showMalware() {
   console.log('showMalware');
   russian_message_container.style.visibility = "visible";
   malicious_install_screen.style.visibility = "hidden";
   russian_message_anim.playSegments([0, 20], true);
}

function hideMalware() {
   russian_message_container.style.visibility = "hidden";
}

addPhone();

let card_01_state = 0;
let card_02_state = 0;
let card_03_state = 0;
let card_04_state = 0;
let card_05_state = 0;

let card_anim_list = {
   card_01_animData: {
      container: card_01_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/phone_card01.json'
   },
   card_02_animData: {
      container: card_02_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/phone_card02.json'
   },
   card_03_animData: {
      container: card_03_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/phone_card03.json'
   },
   card_04_animData: {
      container: card_04_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/phone_card04.json'
   },
   card_05_animData: {
      container: card_05_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/phone_card05.json'
   }
}

let cell_signal_container = document.getElementById('cell_signal_container');
let virus_dialog_container = document.getElementById("virus_dialog");
let virus_yesBtn_container = document.getElementById("yes_btn");
let virus_noBtn_container = document.getElementById("no_btn");
let russian_message_container = document.getElementById("russian_message");

russian_message_container.addEventListener('mouseenter', translate);

function translate() {
   russian_message_anim.playSegments([20, 60], true);
}

let phone_anim_list = {
   cell_signal_animData: {
      container: cell_signal_container,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      path: 'abstracts/animation_data/cellular_animation.json'
   },
   virus_dialog_animData: {
      container: virus_dialog_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/virus_dialog.json'
   },
   virus_yesBtn_animData: {
      container: virus_yesBtn_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/yes_button.json'
   },
   virus_noBtn_animData: {
      container: virus_noBtn_container,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: 'abstracts/animation_data/no_button.json'
   },
   russian_message_animData: {
      container: russian_message_container,
      renderer: 'svg',
      autoplay: true,
      loop: false,
      path: 'abstracts/animation_data/virus_russian_message.json'
   }
}


let card_01_anim = bodymovin.loadAnimation(card_anim_list['card_01_animData']);
let card_02_anim = bodymovin.loadAnimation(card_anim_list['card_02_animData']);
let card_03_anim = bodymovin.loadAnimation(card_anim_list['card_03_animData']);
let card_04_anim = bodymovin.loadAnimation(card_anim_list['card_04_animData']);
let card_05_anim = bodymovin.loadAnimation(card_anim_list['card_05_animData']);

let cell_signal_anim = bodymovin.loadAnimation(phone_anim_list['cell_signal_animData'])
var virus_dialog_anim = bodymovin.loadAnimation(phone_anim_list['virus_dialog_animData']);
let yesBtn_anim = bodymovin.loadAnimation(phone_anim_list['virus_yesBtn_animData']);
let noBtn_anim = bodymovin.loadAnimation(phone_anim_list['virus_noBtn_animData']);

let russian_message_anim = bodymovin.loadAnimation(phone_anim_list['russian_message_animData']);

card_01_container.addEventListener('click', play_card_01_anim);
card_02_container.addEventListener('click', play_card_02_anim);
card_03_container.addEventListener('click', play_card_03_anim);
card_04_container.addEventListener('click', play_card_04_anim);
card_05_container.addEventListener('click', play_card_05_anim);

function play_card_01_anim() {
   console.log(card_01_state);
   if (card_01_state === 0) {
      card_01_anim.setDirection(1);
      card_01_anim.play();
      card_01_state = 1;
   } else if (card_01_state === 1) {
      card_01_anim.setDirection(-1);
      card_01_anim.play();
      card_01_state = 0;
   }
}

function play_card_02_anim() {
   console.log(card_02_state);
   if (card_02_state === 0) {
      card_02_anim.setDirection(1);
      card_02_anim.play();
      card_02_state = 1;
   } else if (card_02_state === 1) {
      card_02_anim.setDirection(-1);
      card_02_anim.play();
      card_02_state = 0;
   }
}

function play_card_03_anim() {
   console.log(card_03_state);
   if (card_03_state === 0) {
      card_03_anim.setDirection(1);
      card_03_anim.play();
      card_03_state = 1;
   } else if (card_03_state === 1) {
      card_03_anim.setDirection(-1);
      card_03_anim.play();
      card_03_state = 0;
   }
}

function play_card_04_anim() {
   console.log(card_04_state);
   if (card_04_state === 0) {
      card_04_anim.setDirection(1);
      card_04_anim.play();
      card_04_state = 1;
   } else if (card_04_state === 1) {
      card_04_anim.setDirection(-1);
      card_04_anim.play();
      card_04_state = 0;
   }
}

function play_card_05_anim() {
   console.log(card_05_state);
   if (card_05_state === 0) {
      card_05_anim.setDirection(1);
      card_05_anim.play();
      card_05_state = 1;
   } else if (card_05_state === 1) {
      card_05_anim.setDirection(-1);
      card_05_anim.play();
      card_05_state = 0;
   }
}