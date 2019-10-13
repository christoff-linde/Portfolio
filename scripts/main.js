var audioElement = document.createElement("video");
audioElement.classList.add("controls", "controls");
audioElement.setAttribute("controls", "controls");

var audioSource = document.createElement("source");
audioSource.setAttribute("src", "media/sound-effects.mp3");

let main = document.getElementById("main");
let animState = 0;
let currentAnimation = 0;
let svgContainer = document.getElementById("svgContainer");
// let discoverContainer = document.querySelector(".page");
let discoverContainer = document.querySelector(".discover");
let theme01Container = document.querySelector(".theme01");
let theme02Container = document.querySelector(".theme02");
let theme03Container = document.querySelector(".theme03");
let theme04Container = document.querySelector(".theme04");
let backButtonContainer = document.querySelector(".back");
let maskMiddle = document.querySelector("#maskMiddle");
let maskLeft = document.querySelector("#maskLeft");
let maskTop = document.querySelector("#maskTop");
let maskRight = document.querySelector("#maskRight");
let maskBottom = document.querySelector("#maskButton");
let backButton = document.querySelector("#backButton");

function loadAudio() {
  main.appendChild(audioElement);
  audioElement.appendChild(audioSource);

  setTimeout(function() {
    audioElement.pause();
    audioElement.load();
    audioElement.play();
    audioElement.volume = 0.2;
    audioElement.loop = true;
  }, 1);
}

const baseWidth = 1920;
const baseHeight = 1079;

let backgroundShapesAnim = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  autoplay: false,
  path: "./data-v10.json"
});

backgroundShapesAnim.addEventListener("DOMLoaded", () => {
  console.log("DOMLoaded");
  loadAudio();
  discoverContainer.addEventListener("click", discoverClicked);
  backgroundShapesAnim.playSegments([0, 120], true);
});

function discoverClicked() {
  currentAnimation = 0;
  if (animState == 0) {
    backgroundShapesAnim.playSegments([6000, 6030], true);
    animState++;

    addEventListeners();
  } else if (animState == 1) {
    backgroundShapesAnim.playSegments([6030, 6060], true);
    animState--;
  }
}

function theme01Clicked() {
  currentAnimation = 1;
  // playAnimationSegment(480, 540);
  if (animState == 1) {
    backgroundShapesAnim.playSegments([6030, 6060], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([480, 540], true);
    }, 500);
    animState++;
    removeEventListeners(1);
  } else if (animState == 2) {
    backgroundShapesAnim.playSegments([540, 600], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  }
}

function theme02Clicked() {
  currentAnimation = 2;
  // playAnimationSegment(360, 420);
  if (animState == 1) {
    backgroundShapesAnim.playSegments([6030, 6060], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([360, 420], true);
    }, 500);
    animState++;
    removeEventListeners(2);
  } else if (animState == 2) {
    backgroundShapesAnim.playSegments([420, 360], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  }
}

function theme03Clicked() {
  currentAnimation = 3;
  // playAnimationSegment(120, 180);
  if (animState == 1) {
    backgroundShapesAnim.playSegments([6030, 6060], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([120, 180], true);
    }, 500);
    animState++;
    removeEventListeners(3);
  } else if (animState == 2) {
    backgroundShapesAnim.playSegments([180, 240], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  }
}

function theme04Clicked() {
  currentAnimation = 4;
  // playAnimationSegment(240, 300);
  if (animState == 1) {
    backgroundShapesAnim.playSegments([6030, 6060], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([240, 300], true);
    }, 500);
    animState++;
    removeEventListeners(4);
  } else if (animState == 2) {
    backgroundShapesAnim.playSegments([300, 360], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  }
}

function backButtonClicked() {
  console.log(currentAnimation);
  if (currentAnimation == 0) {
    backgroundShapesAnim.playSegments([6030, 6060], true);
    animState--;
    setTimeout(function() {
      backgroundShapesAnim.playSegments([0, 120], true);
    }, 500);
  } else if (currentAnimation == 1) {
    backgroundShapesAnim.playSegments([540, 600], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  } else if (currentAnimation == 2) {
    backgroundShapesAnim.playSegments([420, 360], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  } else if (currentAnimation == 3) {
    backgroundShapesAnim.playSegments([180, 240], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  } else if (currentAnimation == 4) {
    backgroundShapesAnim.playSegments([300, 360], true);
    setTimeout(function() {
      backgroundShapesAnim.playSegments([6000, 6030], true);
    }, 1000);
    animState--;
    addEventListeners();
  }
}

function gotToProject() {
  if (currentAnimation == 1) {
    console.log("goToAnimation for theme0" + currentAnimation);
    window.location.assign("../theme03/index.html");
  } else if (currentAnimation == 4) {
    console.log("goToAnimation for theme0" + currentAnimation);
    window.location.assign("../theme02/index.html");
  } else if (currentAnimation == 3) {
    console.log("goToAnimation for theme0" + currentAnimation);
    window.location.assign("../theme01/index.html");
  }
}

// function playAnimationSegment(segment1, segment2) {
//   if (animState == 0) {
//     console.log(animState);
//     backgroundShapesAnim.playSegments([segment1, segment2], true);
//     addEventListeners();
//     animState++;
//   } else if (animState == 1) {
//     console.log(animState);
//     backgroundShapesAnim.playSegments([6030, 6000], true);
//     setTimeout(function() {
//       backgroundShapesAnim.playSegments([segment1, segment2], true);
//     }, 500);
//     backgroundShapesAnim.playSegments([segment1, segment2], true);
//     animState++;
//   } else if (animState == 2) {
//     console.log(animState);
//     backgroundShapesAnim.playSegments([6000, 6030], true);
//     setTimeout(function() {}, 1000);
//     backgroundShapesAnim.playSegments([segment2, segment1], true);
//     animState--;
//   }
// }

function removeEventListeners(currentEventListener) {
  if (currentEventListener == 1) {
    theme02Container.removeEventListener("click", theme02Clicked);
    theme03Container.removeEventListener("click", theme03Clicked);
    theme04Container.removeEventListener("click", theme04Clicked);

    theme02Container.removeEventListener("onclick", gotToProject);
  } else if (currentEventListener == 2) {
    theme01Container.removeEventListener("click", theme01Clicked);
    theme03Container.removeEventListener("click", theme03Clicked);
    theme04Container.removeEventListener("click", theme04Clicked);

    theme02Container.removeEventListener("onclick", gotToProject);
  } else if (currentEventListener == 3) {
    theme01Container.removeEventListener("click", theme01Clicked);
    theme02Container.removeEventListener("click", theme02Clicked);
    theme04Container.removeEventListener("click", theme04Clicked);

    theme02Container.removeEventListener("onclick", gotToProject);
  } else if (currentEventListener == 4) {
    theme01Container.removeEventListener("click", theme01Clicked);
    theme02Container.removeEventListener("click", theme02Clicked);
    theme03Container.removeEventListener("click", theme03Clicked);
  }
}
function addEventListeners() {
  theme01Container.addEventListener("click", theme01Clicked);
  theme02Container.addEventListener("click", theme02Clicked);
  theme03Container.addEventListener("click", theme03Clicked);
  theme04Container.addEventListener("click", theme04Clicked);
  backButtonContainer.addEventListener("click", backButtonClicked);

  theme02Container.addEventListener("click", gotToProject);
}

var viewportwidth;
var viewportheight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
if (typeof window.innerWidth != "undefined") {
  (viewportwidth = window.innerWidth), (viewportheight = window.innerHeight);
}
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
else if (
  typeof document.documentElement != "undefined" &&
  typeof document.documentElement.clientWidth != "undefined" &&
  document.documentElement.clientWidth != 0
) {
  (viewportwidth = document.documentElement.clientWidth),
    (viewportheight = document.documentElement.clientHeight);
}
// older versions of IE
else {
  (viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
    (viewportheight = document.getElementsByTagName("body")[0].clientHeight);
}

function updateWindowSize() {
  // Get width and height of the window excluding scrollbars
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;

  updatePos(windowWidth, windowHeight);
}

window.addEventListener("resize", updateWindowSize);
updateWindowSize();

function updatePos(x, y) {
  let xCoord = x / 2;
  let yCoord = y / 2;

  let shapeWidthScale = baseWidth / x;
  let shapeHeightScale = baseHeight / y;
  // console.log(shapeWidthScale + " " + shapeHeightScale);

  let shapeW = 96 / shapeWidthScale;
  let shapeH = 96 / shapeHeightScale;

  if (shapeW > shapeH) {
    var shapeR = shapeH;
    if (shapeR > 96 || shapeH > 96 || shapeW > 96) {
      shapeR = 96;
      shapeW = 96;
      shapeH = 96;
      console.log(shapeH);
    }
  } else if (shapeW < shapeH) {
    var shapeR = shapeW;
    if (shapeR > 96 || shapeH > 96 || shapeW > 96) {
      shapeR = 96;
      shapeW = 96;
      shapeH = 96;
      console.log(shapeH);
    }
  }
  let left = xCoord - shapeW;
  let top = yCoord - shapeH;

  discoverContainer.style.position = "absolute";
  discoverContainer.style.left = left + "px";
  discoverContainer.style.top = top + "px";
  discoverContainer.style.height = shapeH * 2 + "px";
  discoverContainer.style.width = shapeW * 2 + "px";
  maskMiddle.setAttributeNS(null, "cx", shapeW);
  maskMiddle.setAttributeNS(null, "cy", shapeH);
  maskMiddle.setAttributeNS(null, "r", shapeR);

  theme01Container.style.position = "absolute";
  theme01Container.style.left = left + shapeW + shapeW + "px";
  theme01Container.style.top = top + "px";
  theme01Container.style.height = shapeH * 2 + "px";
  theme01Container.style.width = shapeW * 2 + "px";
  maskLeft.setAttributeNS(null, "cx", shapeW);
  maskLeft.setAttributeNS(null, "cy", shapeH);
  maskLeft.setAttributeNS(null, "r", shapeR);

  theme02Container.style.position = "absolute";
  theme02Container.style.left = left + "px";
  theme02Container.style.top = top + shapeH + shapeH + "px";
  theme02Container.style.height = shapeH * 2 + "px";
  theme02Container.style.width = shapeW * 2 + "px";
  maskTop.setAttributeNS(null, "cx", shapeW);
  maskTop.setAttributeNS(null, "cy", shapeH);
  maskTop.setAttributeNS(null, "r", shapeR);

  theme03Container.style.position = "absolute";
  theme03Container.style.left = left - shapeW - shapeW + "px";
  theme03Container.style.top = top + "px";
  theme03Container.style.height = shapeH * 2 + "px";
  theme03Container.style.width = shapeW * 2 + "px";
  maskRight.setAttributeNS(null, "cx", shapeW);
  maskRight.setAttributeNS(null, "cy", shapeH);
  maskRight.setAttributeNS(null, "r", shapeR);

  theme04Container.style.position = "absolute";
  theme04Container.style.left = left + "px";
  theme04Container.style.top = top - shapeH - shapeH + "px";
  theme04Container.style.height = shapeH * 2 + "px";
  theme04Container.style.width = shapeW * 2 + "px";
  maskBottom.setAttributeNS(null, "cx", shapeW);
  maskBottom.setAttributeNS(null, "cy", shapeH);
  maskBottom.setAttributeNS(null, "r", shapeR);

  backButtonContainer.style.position = "absolute";
  backButtonContainer.style.right = left - shapeW * 7 + "px";
  backButtonContainer.style.top = top + shapeH * 4 + "px";
  backButtonContainer.style.height = shapeH * 2 + "px";
  backButtonContainer.style.width = shapeW * 2 + "px";
  backButton.setAttributeNS(null, "cx", shapeW);
  backButton.setAttributeNS(null, "cy", shapeH);
  backButton.setAttributeNS(null, "r", shapeR);

  // let oldX = maskMiddle.getAttributeNS(null, "cx");
  // let oldY = maskMiddle.getAttributeNS(null, "cy");

  // if (oldX < shapeW) {
  //   maskMiddle.setAttributeNS(null, "r", 96 / shapeWidthScale);
  // } else if (oldX > shapeW) {
  //   maskMiddle.setAttributeNS(null, "r", 96 / shapeWidthScale);
  // } else if (oldY < shapeH) {
  //   maskMiddle.setAttributeNS(null, "r", 96 / shapeHeightScale);
  // } else if (oldY > shapeH) {
  //   maskMiddle.setAttributeNS(null, "r", 96 / shapeHeightScale);
  // }
}
