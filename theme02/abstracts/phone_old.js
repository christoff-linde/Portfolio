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

function resetAnim() {
   console.log("resetAnim");
}

home_button.addEventListener("click", homeButton);
wifi_card.addEventListener("click", showPasswordCards);
computer_card.addEventListener("click", showPirateScreen);
virus_card.addEventListener("click", showInstallScreen);

// let card01_bg = document.getElementById("card01_bg");
// let card02_bg = document.getElementById("card02_bg");
// let card03_bg = document.getElementById("card03_bg");
// let card04_bg = document.getElementById("card04_bg");
// let card05_bg = document.getElementById("card05_bg");
let submit_bg = document.getElementById("submit_bg");

let pw01 = document.getElementById("pw01");
let pw02 = document.getElementById("pw02");
let pw03 = document.getElementById("pw03");
let pw04 = document.getElementById("pw04");
let pw05 = document.getElementById("pw05");

// card01_bg.addEventListener("click", cardClicked);
// card02_bg.addEventListener("click", cardClicked);
// card03_bg.addEventListener("click", cardClicked);
// card04_bg.addEventListener("click", cardClicked);
// card05_bg.addEventListener("click", cardClicked);
submit_bg.addEventListener("click", submitClicked);

let card01_state = 0;
let card02_state = 0;
let card03_state = 0;
let card04_state = 0;
let card05_state = 0;

function cardClicked() {
   if (this.id == "card01_bg") {
      if (card01_state == 0) {
         this.style.fill = "#663377";
         pw01.style.fill = "#fff";
         card01_state = 1;
      } else if (card01_state == 1) {
         this.style.fill = "rgba(255,255,255,0.8)";
         pw01.style.fill = "#663377";
         card01_state = 0;
      }
   } else if (this.id == "card02_bg") {
      if (card02_state == 0) {
         this.style.fill = "#663377";
         pw02.style.fill = "#fff";
         card02_state = 1;
      } else if (card02_state == 1) {
         this.style.fill = "rgba(255,255,255,0.8)";
         pw02.style.fill = "#663377";
         card02_state = 0;
      }
   } else if (this.id == "card03_bg") {
      if (card03_state == 0) {
         this.style.fill = "#663377";
         pw03.style.fill = "#fff";
         card03_state = 1;
      } else if (card03_state == 1) {
         this.style.fill = "rgba(255,255,255,0.8)";
         pw03.style.fill = "#663377";
         card03_state = 0;
      }
   } else if (this.id == "card04_bg") {
      if (card04_state == 0) {
         this.style.fill = "#663377";
         pw04.style.fill = "#fff";
         card04_state = 1;
      } else if (card04_state == 1) {
         this.style.fill = "rgba(255,255,255,0.8)";
         pw04.style.fill = "#663377";
         card04_state = 0;
      }
   } else if (this.id == "card05_bg") {
      if (card05_state == 0) {
         this.style.fill = "#663377";
         pw05.style.fill = "#fff";
         card05_state = 1;
      } else if (card05_state == 1) {
         this.style.fill = "rgba(255,255,255,0.8)";
         pw05.style.fill = "#663377";
         card05_state = 0;
      }
   }
}

function submitClicked() {
   hidePasswordCards();
   showVirus();
}

function homeButton() {
   hidePasswordCards();
   hidePirateScreen();
   hideVirus();
   hideInstallScreen();
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
   // let card01 = document.getElementById("card01");
   // let card02 = document.getElementById("card02");
   // let card03 = document.getElementById("card03");
   // let card04 = document.getElementById("card04");
   // let card05 = document.getElementById("card05");
   let submit_card = document.getElementById("submit_card");
   hidePasswordCards();
}

function showPasswordCards() {
   hideMainCards();
   phone_subtitle.style.visibility = "visible";
   // card01.style.visibility = "visible";
   // card02.style.visibility = "visible";
   // card03.style.visibility = "visible";
   // card04.style.visibility = "visible";
   // card05.style.visibility = "visible";
   submit_card.style.visibility = "visible";
}

function hidePasswordCards() {
   phone_subtitle.style.visibility = "hidden";
   // card01.style.visibility = "hidden";
   // card02.style.visibility = "hidden";
   // card03.style.visibility = "hidden";
   // card04.style.visibility = "hidden";
   // card05.style.visibility = "hidden";
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
   yes_btn.addEventListener("click", showMalware);
   no_btn.addEventListener("click", hideInstallScreen)
   hideInstallScreen();
}

function showInstallScreen() {
   hideMainCards();
   malicious_install_screen.style.visibility = "visible";
}

function hideInstallScreen() {
   malicious_install_screen.style.visibility = "hidden";
   showMainCards();
}

function showMalware() {

}

addPhone();