var basicTimeline = anime.timeline({
  direction: "alternate",
  autoplay: false
});

basicTimeline
.add({
    targets: "svg.S",
    offset: "0",
    translateY: [
      {
        value: 0,
        duration: 350
      },
      {
        value: -1000,
        duration: 1000
      }
    ],
    easing: "easeInOutElastic"
  })
  .add({
    targets: "svg.T01",
    offset: "0",
    translateY: [
      {
        value: 100,
        duration: 350
      },
      {
        value: -1000,
        duration: 1000
      }
    ],
    easing: "easeInOutElastic"
  })
  .add({
    targets: "svg.A",
    offset: "0",
    translateY: [
      {
        value: 150,
        duration: 350
      },
      {
        value: -1000,
        duration: 1000
      }
    ],
    easing: "easeInOutElastic"
  })
  .add({
    targets: "svg.R",
    offset: "0",
    translateY: [
      {
        value: 100,
        duration: 350
      },
      {
        value: -1000,
        duration: 1000
      }
    ],
    easing: "easeInOutElastic"
  })
  .add({
    targets: "svg.T02",
    offset: "0",
    translateY: [
      {
        value: 0,
        duration: 350
      },
      {
        value: -1000,
        duration: 1000
      }
    ],
    easing: "easeInOutElastic"
  });

document.querySelector(".mainContainer").onclick = basicTimeline.restart;

document.getElementById("clickableDiv").addEventListener("click", startClicked);

function startClicked() {
  console.log("clicked");
  window.setTimeout(changeScreen, 2000);

  function changeScreen() {
    document
      .getElementById("clickableDiv")
      .removeEventListener("click", startClicked);
    window.location.assign("bridgeScreen.html");
  }
}
