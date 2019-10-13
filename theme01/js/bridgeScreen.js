var viewportWidth =
  window.innerWidth + 500 || document.documentElement.clientWidth + 500;
console.log("viewPortWidth: " + viewportWidth);

let darkBlue = "#1d2733";
let pureWhite = "#ffffff";
let darkGrey = "#383838";
let lightGrey = "#9fa4aa";

var siteState = 0;

let instructionField = document.getElementById("instructionsText");
instructionField.textContent = "Drag the first slider to the top";
let helpIcon = document.getElementById("help");
let helpCircle = document.getElementById("helpCircle");
helpIcon.addEventListener("click", helpClicked);
helpIcon.addEventListener("mouseover", mouseOver);
helpIcon.addEventListener("mouseout", mouseOut);
helpCircle.addEventListener("mouseover", mouseOver);
helpCircle.addEventListener("mouseout", mouseOut);

let defaultHelpText = "Drag the first slider to the top";
let sliderHelpText = "Drag the next slider to the top";
let iconHelpText = "Sort the icon into the correct zone";
let playButtonHelpText = "Click the GooglePlay Music icon";

function mouseOver() {
  helpIcon.style.fill = darkGrey;
  helpCircle.style.stroke = darkGrey;
  if (siteState >= 11) {
    helpIcon.style.fill = pureWhite;
    helpCircle.style.stroke = pureWhite;
  }
}

function mouseOut() {
  helpIcon.style.fill = lightGrey;
  helpCircle.style.stroke = lightGrey;
}

function removeHelp() {
  helpCircle.style.visibility = "hidden";
  helpIcon.style.visibility = "hidden";
}

function helpClicked() {
  console.log("helpClicked");
  switch (siteState) {
    case 0:
      instructionField.textContent = defaultHelpText;
      break;
    case 1:
      instructionField.textContent = iconHelpText;
      break;
    case 2:
      instructionField.textContent = sliderHelpText;
      break;
    case 3:
      instructionField.textContent = iconHelpText;
      break;
    case 4:
      instructionField.textContent = sliderHelpText;
      break;
    case 5:
      instructionField.textContent = iconHelpText;
      break;
    case 6:
      instructionField.textContent = sliderHelpText;
      break;
    case 7:
      instructionField.textContent = iconHelpText;
      break;
    case 8:
      instructionField.textContent = sliderHelpText;
      break;
    case 9:
      instructionField.textContent = sliderHelpText;
      break;
    case 10:
      instructionField.textContent = sliderHelpText;
      break;
    case 11:
      instructionField.style.fill = pureWhite;
      instructionField.textContent = playButtonHelpText;
      break;
    case 12:
      instructionField.style.fill = pureWhite;
      instructionField.textContent = sliderHelpText;
      break;
    default:
      console.log("case default. You clearly did something wrong");
  }
}

let mainSVGBackground = document.getElementById("bridgeScreen");
let pageBackground = document.getElementById("background");
let bridgePillars = document.getElementById("bridgePillars");
let bridgeLeftStrut = document.getElementById("leftStrut");
let bridgeRightStrut = document.getElementById("rightStrut");
let bridgeTopCable = document.getElementById("topCable");

let retroZone = document.getElementById("zone");
let r_01 = document.getElementById("r01");
let e = document.getElementById("e");
let t = document.getElementById("t");
let r_02 = document.getElementById("r02");
let o = document.getElementById("o");

let nowZone = document.getElementById("zone-2");
let n = document.getElementById("n");
let o_02 = document.getElementById("o-2");
let w = document.getElementById("w");

let sliderLine01 = document.getElementById("sliderLine01");
let sliderLine02 = document.getElementById("sliderLine02");
let sliderLine03 = document.getElementById("sliderLine03");
let sliderLine04 = document.getElementById("sliderLine04");
let sliderLine05 = document.getElementById("sliderLine05");
let sliderLine06 = document.getElementById("sliderLine06");
let sliderLine07 = document.getElementById("sliderLine07");
let sliderLine08 = document.getElementById("sliderLine08");
let sliderLine09 = document.getElementById("sliderLine09");

var myAudio = document.getElementById("backgroundMusic");

function incrSiteState() {
  siteState += 1;
  console.log("siteState: " + siteState);
}

function clearText() {
  instructionField.textContent = " ";
}

createDraggable01();

function createDraggable01() {
  console.log("siteState: " + siteState);
  var draggableIcon01 = Draggable.create(".icon01", {
    type: "y",
    bounds: { minY: -494.58, maxY: 0 },
    onDrag: function() {
      if (this.y <= -489) {
        TweenMax.to("#sliderLine01", 0.6, { stroke: darkGrey });
        TweenMax.to("#circle01", 1, { scale: 0, transformOrigin: "50% 50%" });
        draggableIcon01[0].disable();
        displaySpotifyIcon();
      }
    }
  });
}

function createDraggable02() {
  instructionField.textContent = sliderHelpText;
  incrSiteState();
  TweenMax.to("#circle02", 0.6, { fill: "#383838" });
  console.log("draggable02 created");
  var draggableIcon02 = Draggable.create(".icon02", {
    type: "y",
    bounds: { minY: -441.25, maxY: 0 },
    onDrag: function() {
      if (this.y <= -436) {
        TweenMax.to("#sliderLine02", 0.6, { stroke: darkGrey });
        TweenMax.to("#circle02", 1, { scale: 0, transformOrigin: "50% 50%" });
        displayVinylRecord();
      }
    }
  });
}

function createDraggable03() {
  incrSiteState();
  clearText();
  TweenMax.to("#circle03", 0.6, { fill: "#383838" });
  console.log("draggable03 created");
  var draggableIcon03 = Draggable.create(".icon03", {
    type: "y",
    bounds: { minY: -406.25, maxY: 0 },
    onDrag: function() {
      if (this.y <= -401) {
        TweenMax.to("#sliderLine03", 0.6, { stroke: darkGrey });
        TweenMax.to("#circle03", 1, { scale: 0, transformOrigin: "50% 50%" });
        draggableIcon03[0].disable();
        displayGooglePlayIcon();
      }
    }
  });
}

function createDraggable04() {
  incrSiteState();
  clearText();
  TweenMax.to("#circle04", 0.6, { fill: "#383838" });
  console.log("draggable04 created");
  var draggableIcon04 = Draggable.create(".icon04", {
    type: "y",
    bounds: { minY: -384.65, maxY: 0 },
    onDrag: function() {
      if (this.y <= -379) {
        TweenMax.to("#sliderLine04", 0.6, { stroke: darkGrey });
        TweenMax.to("#circle04", 1, { scale: 0, transformOrigin: "50% 50%" });
        draggableIcon04[0].disable();
        displayTapeRecorder();
      }
    }
  });
}

function createDraggable05() {
  incrSiteState();
  clearText();
  TweenMax.to("#circle05", 0.6, { fill: "#383838" });
  console.log("draggable05 created");
  var draggableIcon05 = Draggable.create(".icon05", {
    type: "y",
    bounds: { minY: -377.65, maxY: 0 },
    onDrag: function() {
      if (this.y <= -370) {
        TweenMax.to("#sliderLine05", 0.6, { stroke: darkGrey });
        TweenMax.to("#circle05", 1, { scale: 0, transformOrigin: "50% 50%" });
        createDraggable06();
        draggableIcon05[0].disable();
        TweenMax.to("#tapeRecorder", 0.6, {
          x: 0,
          scale: 1,
          ease: Expo.easeInOut
        });
      }
    }
  });
}

function createDraggable06() {
  incrSiteState();
  clearText();
  TweenMax.to("#circle06", 0.6, { fill: "#383838" });
  console.log("draggable06 created");
  var draggableIcon06 = Draggable.create(".icon06", {
    type: "y",
    bounds: { minY: -384.65, maxY: 0 },
    onDrag: function() {
      if (this.y <= -164) {
        TweenMax.to("#spotifyLogo", 0.6, {
          x: 62,
          y: 782,
          scale: 1.1,
          ease: Expo.easeInOut
        });
      }
      if (this.y <= -380) {
        TweenMax.to("#sliderLine06", 0.6, { stroke: darkGrey });
        TweenMax.to("#circle06", 1, { scale: 0, transformOrigin: "50% 50%" });
        createDraggable07();
        draggableIcon06[0].disable();
        TweenMax.to("#vinylRecord", 0.6, {
          x: -68,
          y: 782,
          scale: 1.1,
          ease: Expo.easeInOut
        });
      }
    }
  });
}

function createDraggable07() {
  incrSiteState();
  clearText();
  TweenMax.to("#circle07", 0.6, { fill: "#383838" });
  console.log("draggable07 created");
  var draggableIcon07 = Draggable.create(".icon07", {
    type: "y",
    bounds: { minY: -406.25, maxY: 0 },
    onDrag: function() {
      if (this.y <= -401) {
        TweenMax.to("#sliderLine07", 0.6, { stroke: darkGrey });
        TweenMax.to("#circle07", 1, { scale: 0, transformOrigin: "50% 50%" });
        draggableIcon07[0].disable();
        TweenMax.to("#googlePlayLogo", 0.6, {
          x: 41,
          y: 891,
          scale: 0.4,
          ease: Expo.easeInOut
        });
        TweenMax.to("#circle08", 0.6, { fill: "#383838" }, 1);
        createEventListener();
        incrSiteState();
        changeBackgroundColor();
        changeBridgeColor();
        changeSliderColor();
        changeRetroZoneColor();
        changeNowZoneColor();
      }
    }
  });
}

function createDraggable09() {
  incrSiteState();
  clearText();
  TweenMax.to("#circle08", 0.6, { fill: "#383838" });
  console.log("draggable09 created");
  var draggableIcon09 = Draggable.create(".icon09", {
    type: "y",
    bounds: { minY: -492.58, maxY: 0 },
    onDrag: function() {
      if (this.y == -492.58) {
        TweenMax.to("#sliderLine09", 0.6, { stroke: pureWhite });
        TweenMax.to("#circle09", 1, { scale: 0, transformOrigin: "50% 50%" });
        draggableIcon09[0].disable();
        exitRight();
        exitRecorder();
      }
    }
  });
}

let spotifyLogo = document.getElementById("spotifyLogo");
let googlePlayLogo = document.getElementById("googlePlayLogo");
let vinylRecord = document.getElementById("vinylRecord");
let tapeRecorder = document.getElementById("tapeRecorder");
spotifyLogo.style.visibility = "hidden";
googlePlayLogo.style.visibility = "hidden";
vinylRecord.style.visibility = "hidden";
tapeRecorder.style.visibility = "hidden";

function createEventListener() {
  console.log("createEventListener");
  googlePlayLogo.addEventListener("click", playButtonClicked);
  instructionField.style.fill = pureWhite;
  instructionField.textContent = playButtonHelpText;
}

function playButtonClicked() {
  console.log("playButtonClicked");
  vinylRotationTimeline.play();
  spotifyRotationTimeline.play();
  sliderTimeline.play();
}

function displaySpotifyIcon() {
  incrSiteState();
  instructionField.textContent = iconHelpText;
  TweenMax.from("#spotifyLogo", 0.6, { y: -100, opacity: 0 });
  spotifyLogo.style.visibility = "visible";
}

function displayGooglePlayIcon() {
  incrSiteState();
  clearText();
  TweenMax.from("#googlePlayLogo", 0.6, { y: -100, opacity: 0 });
  googlePlayLogo.style.visibility = "visible";
}

function displayVinylRecord() {
  incrSiteState();
  clearText();
  TweenMax.from("#vinylRecord", 0.6, { y: -100, opacity: 0 });
  vinylRecord.style.visibility = "visible";
}

function displayTapeRecorder() {
  incrSiteState();
  clearText();
  TweenMax.from("#tapeRecorder", 0.6, { y: -100, opacity: 0 });
  tapeRecorder.style.visibility = "visible";
}

var draggableSpotifyLogo = Draggable.create(".spotifyLogoDraggable", {
  bounds: { minY: 861, maxY: -114, minX: 907, maxX: -907 },
  onDrag: function() {
    /*     console.log("X: " + this.x + " " + "Y: " + this.y); */
    if (this.hitTest("#nowZone")) {
      TweenMax.to("#spotifyLogo", 0.6, { scale: 0.8, x: 600, y: 800 });
      createDraggable02();
      draggableSpotifyLogo[0].disable();
    }
    if (this.hitTest("#retroZone")) {
      TweenMax.to("#spotifyLogo", 0.6, { scale: 0.8, x: 0, y: 0 });
      instructionField.textContent = iconHelpText;
    }
  }
});
var draggableVinyl = Draggable.create(".vinylRecordDraggable", {
  bounds: { minY: 861, maxY: -114, minX: 907, maxX: -907 },
  onDrag: function() {
    /*     console.log("X: " + this.x + " " + "Y: " + this.y); */
    if (this.hitTest("#retroZone")) {
      TweenMax.to("#vinylRecord", 0.6, { scale: 0.8, x: -855, y: 800 });
      createDraggable03();
      draggableVinyl[0].disable();
    }
    if (this.hitTest("#nowZone")) {
      TweenMax.to("#vinylRecord", 0.6, { scale: 0.8, x: 0, y: 0 });
      instructionField.textContent = iconHelpText;
    }
  }
});
var draggableGoogleLogo = Draggable.create(".googlePlayLogoDraggable", {
  bounds: { minY: 847, maxY: -101, minX: 900, maxX: -900 },
  onDrag: function() {
    /*     console.log("X: " + this.x + " " + "Y: " + this.y); */
    if (this.hitTest("#nowZone")) {
      TweenMax.to("#googlePlayLogo", 0.6, { scale: 0.8, x: 835, y: 800 });
      createDraggable04();
      draggableGoogleLogo[0].disable();
    }
    if (this.hitTest("#retroZone")) {
      TweenMax.to("#googlePlayLogo", 0.6, { scale: 0.8, x: 0, y: 0 });
      instructionField.textContent = iconHelpText;
    }
  }
});

var draggableTapeRecorder = Draggable.create(".tapeRecorderDraggable", {
  bounds: { minY: 861, maxY: -114, minX: 907, maxX: -907 },
  onDrag: function() {
    /*     console.log("X: " + this.x + " " + "Y: " + this.y); */
    if (this.hitTest("#retroZone")) {
      TweenMax.to("#tapeRecorder", 0.6, { scale: 0.8, x: -600, y: 810 });
      createDraggable05();
      draggableTapeRecorder[0].disable();
    }
    if (this.hitTest("#nowZone")) {
      TweenMax.to("#tapeRecorder", 0.6, { scale: 0.8, x: 0, y: 0 });
      instructionField.textContent = iconHelpText;
    }
  }
});

var vinylRotationTimeline = new TimelineMax({ repeat: -1, paused: true });

vinylRotationTimeline.to(vinylRecord, 3, {
  rotation: 360,
  ease: Power0.easeNone,
  transformOrigin: "50% 50%"
});

var spotifyRotationTimeline = new TimelineMax({ repeat: -1, paused: true });

spotifyRotationTimeline.to(spotifyLogo, 3, {
  rotation: 360,
  ease: Power0.easeNone,
  transformOrigin: "50% 50%"
});

var sliderTimeline = new TimelineMax({ paused: true });

sliderTimeline.to("#circle08", 5, {
  y: -441.29,
  transformOrigin: "50% 50%",
  onStart: function() {
    playAudio();
    clearText();
    TweenMax.to("#sliderLine08", 0.6, {
      stroke: pureWhite,
      delay: 4.4,
      ease: Power0.easeNone
    });
    TweenMax.to("#circle08", 0.6, {
      scale: 0,
      transformOrigin: "50% 50%",
      delay: 4.4
    });
  },
  onUpdate: function() {
    var progress = sliderTimeline.progress();
    myAudio.volume = progress;
    console.log(progress);
  },
  onComplete: function() {
    createDraggable09();
    TweenMax.to("#circle09", 0.6, { fill: "#383838" }, 1);
    googlePlayLogo.removeEventListener("click", playButtonClicked);
    instructionField.textContent = sliderHelpText;
  }
});

function playAudio() {
  myAudio.volume = 0;
  myAudio.play();
}

function stopAudio() {
  myAudio.pause();
}

function changeBackgroundColor() {
  TweenMax.to(mainSVGBackground, 0.6, { backgroundColor: pureWhite });
  TweenMax.to(pageBackground, 0.6, { fill: darkBlue });
}
function changeBridgeColor() {
  TweenMax.to(bridgePillars, 0.6, { fill: pureWhite });
  TweenMax.to(bridgeLeftStrut, 0.6, { stroke: pureWhite });
  TweenMax.to(bridgeRightStrut, 0.6, { stroke: pureWhite });
  TweenMax.to(bridgeTopCable, 0.6, { stroke: pureWhite });
}
function changeSliderColor() {
  TweenMax.to(sliderLine01, 0.6, { stroke: pureWhite });
  TweenMax.to(sliderLine02, 0.6, { stroke: pureWhite });
  TweenMax.to(sliderLine03, 0.6, { stroke: pureWhite });
  TweenMax.to(sliderLine04, 0.6, { stroke: pureWhite });
  TweenMax.to(sliderLine05, 0.6, { stroke: pureWhite });
  TweenMax.to(sliderLine06, 0.6, { stroke: pureWhite });
  TweenMax.to(sliderLine07, 0.6, { stroke: pureWhite });
  TweenMax.to(sliderLine08, 0.6, { stroke: lightGrey });
  TweenMax.to(sliderLine09, 0.6, { stroke: lightGrey });
}
function changeRetroZoneColor() {
  TweenMax.to(retroZone, 0.6, { fill: pureWhite });
  TweenMax.to(r_01, 0.6, { fill: darkGrey });
  TweenMax.to(e, 0.6, { fill: darkGrey });
  TweenMax.to(t, 0.6, { fill: darkGrey });
  TweenMax.to(r_02, 0.6, { fill: darkGrey });
  TweenMax.to(o, 0.6, { fill: darkGrey });
}
function changeNowZoneColor() {
  TweenMax.to(nowZone, 0.6, { fill: pureWhite });
  TweenMax.to(n, 0.6, { fill: darkGrey });
  TweenMax.to(o_02, 0.6, { fill: darkGrey });
  TweenMax.to(w, 0.6, { fill: darkGrey });
}

function exitRight() {
  let xMoveAmount = 0;
  let moveDelayTime = 1;
  let tweenTime = 4;
  let opacity = 0;
  let scaleAmout = 1;
  let exitTransformOrigin = "50% 50%";

  TweenMax.to(pageBackground, 0.6, { fill: darkBlue });
  TweenMax.to(bridgePillars, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(bridgeLeftStrut, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(bridgeRightStrut, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(bridgeTopCable, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine01, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine02, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine03, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine04, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine05, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine06, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine07, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine08, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(sliderLine09, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity,
    scale: scaleAmout,
    transformOrigin: exitTransformOrigin
  });
  TweenMax.to(retroZone, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(r_01, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(e, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(t, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(r_02, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(o, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(nowZone, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(n, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(o_02, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });
  TweenMax.to(w, tweenTime, {
    x: xMoveAmount,
    delay: moveDelayTime,
    opacity: opacity
  });

  exitRecorder();
}

function exitRecorder() {
  clearText();
  removeHelp();
  let exitSpotifiLogo_TL = new TimelineMax({});
  exitSpotifiLogo_TL
    .to(spotifyLogo, 4, { y: 73 }, 1)
    .to(spotifyLogo, 0.6, { x: viewportWidth, transformOrigin: "50% 50%" });

  let exitVinyl_TL = new TimelineMax({});
  exitVinyl_TL
    .to(vinylRecord, 4, { y: 73 }, 1)
    .to(vinylRecord, 0.6, { x: viewportWidth, transformOrigin: "50% 50%" });

  let exitGooglePLayLogo_TL = new TimelineMax({});
  exitGooglePLayLogo_TL
    .to(googlePlayLogo, 4, { y: 173 }, 1)
    .to(googlePlayLogo, 0.6, { x: viewportWidth, transformOrigin: "50% 50%" });

  let exitRecorder_TL = new TimelineMax({});
  exitRecorder_TL
    .to(
      tapeRecorder,
      4,
      {
        y: 100,
        onStart: function() {
          fadeAudio();
        }
      },
      1
    )
    .to(tapeRecorder, 0.6, {
      x: viewportWidth,
      transformOrigin: "50% 50%",
      onComplete: function() {
        changeScreen();
      }
    });

  function fadeAudio() {
    console.log("fadeAudio()");
    let audioFade_TL = new TimelineMax({});

    audioFade_TL.to(myAudio, 4.5, {
      onUpdate: function() {
        var fadeProgress = audioFade_TL.progress();
        if (myAudio.volume >= 0) {
          myAudio.volume -= 0.00359;
          console.log("fadeProgress: " + fadeProgress);
          console.log("myAudio.volume: " + myAudio.volume);
        }
      }
    });
  }

  /* setInterval(function() {
    myAudio.volume = myAudio.volume - 0.1; console.log(myAudio.volume)
  }, 100); */
}

/* /document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

var underBridgeStartText = document.getElementById("clickHereText");
underBridgeStartText.addEventListener("click", changeScreen); */
var myVar;
function changeScreen() {
  console.log("changeScreen");
  myVar = setTimeout(myFunction, 500);
}

function myFunction() {
  window.location.assign("finalScreen.html");
}
