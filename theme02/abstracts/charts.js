let charts_container = document.getElementById("charts_container");

let animList = {
   chart_animData: {
      container: charts_container,
      renderer: 'svg',
      autoplay: true,
      loop: false,
      path: 'abstracts/animation_data/flu_bar_chart.json'
   }
}

let chart_anim = bodymovin.loadAnimation(animList['chart_animData']);

charts_container.addEventListener("click", changeScreen);

var myVar;
function changeScreen() {
  console.log("changeScreen");
  myVar = setTimeout(myFunction, 500);
}

function myFunction() {
  window.location.assign("page_07.html");
}