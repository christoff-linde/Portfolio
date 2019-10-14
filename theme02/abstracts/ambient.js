var left_ambient_container = document.getElementById("left_ambient_container");
var right_ambient_container = document.getElementById("right_ambient_container");

var animList = {
   left_ambient_animData: {
      container: left_ambient_container,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      path: 'abstracts/animation_data/left_path.json'
   },
   right_ambient_animData: {
      container: right_ambient_container,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      path: 'abstracts/animation_data/right_path.json'
   }
}

var left_ambient_anim = bodymovin.loadAnimation(animList['left_ambient_animData']);
var right_ambient_anim = bodymovin.loadAnimation(animList['right_ambient_animData']);