Draggable.create(".icon01", {
  type: "y",
  bounds: { minY: -131.72, maxY: 98.72 }
});
Draggable.create(".icon02", {
  type: "y",
  bounds: { minY: -181.72, maxY: 48.72 }
});
Draggable.create(".icon03", {
  type: "y",
  bounds: { minY: -161.72, maxY: 68.72 }
});
Draggable.create(".icon04", {
  type: "y",
  bounds: { minY: -179.72, maxY: 50.72 }
});
Draggable.create(".icon05", {
  type: "y",
  bounds: { minY: -201.72, maxY: 28.72 }
});
Draggable.create(".icon06", {
  type: "y",
  bounds: { minY: -171.72, maxY: 58.72 }
});
Draggable.create(".icon07", {
  type: "y",
  bounds: { minY: -211.72, maxY: 18.72 }
});
Draggable.create(".icon08", {
  type: "y",
  bounds: { minY: -151.72, maxY: 78.72 }
});

var mixer = document.getElementById("mixingConsole");
var circle01 = document.getElementById("circle01");
var circle02 = document.getElementById("circle02");
var circle03 = document.getElementById("circle03");
var circle04 = document.getElementById("circle04");
var circle05 = document.getElementById("circle05");
var circle06 = document.getElementById("circle06");
var circle07 = document.getElementById("circle07");
var circle08 = document.getElementById("circle08");

var myAudio = document.getElementById("backgroundMusic");
myAudio.volume = 0;
mixer.addEventListener("click", playAudio);

document.addEventListener("keydown", stopAudio);

function stopAudio(e) {
  if (e.keyCode == 49) {
    myAudio.volume = 0.2;
    console.log(myAudio.volume);
  } else if (e.keyCode == 50) {
    myAudio.volume = 0.4;
    console.log(myAudio.volume);
  } else if (e.keyCode == 51) {
    myAudio.volume = 0.6;
    console.log(myAudio.volume);
  } else if (e.keyCode == 52) {
    myAudio.volume = 0.8;
    console.log(myAudio.volume);
  } else if (e.keyCode == 53) {
    myAudio.volume = 1;
    console.log(myAudio.volume);
  }
}

function playAudio() {
  console.log("audioPlaying");
  myAudio.volume = 0;
  myAudio.play();
}

var body = document.getElementById("body");
body.addEventListener("keyup", changeScreen);
function changeScreen(e) {
  if (e.keyCode == "32") {
    body.removeEventListener("keyup", changeScreen);
    window.location.assign("finalScreen.html");
  }
}
