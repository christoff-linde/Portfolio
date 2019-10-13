var screenState = 0;
var rootDocument = document.documentElement;
var animContainer = document.getElementById("animContainer");

var animList = {
    mainMenu_animData: {
        container: animContainer,
        renderer: 'svg',
        autoplay: false,
        loop: true,
        path: 'data.json'
    }
}

var mainMenu_anim = bodymovin.loadAnimation(animList['mainMenu_animData']);

mainMenu_anim.addEventListener('DOMLoaded', startAnimation);
animContainer.addEventListener('mouseover', pauseMainMenu);
animContainer.addEventListener('mouseout', playMainMenu);

var videoElement = document.createElement('video');
videoElement.classList.add('controls', 'controls');
videoElement.setAttribute('controls', 'controls');
videoElement.setAttribute('width', "80%");

var videoSource = document.createElement('source');
videoSource.setAttribute('src', 'media/videos/mainComp.mp4');

function startAnimation() {
    console.log("mainMenu_anim started");
    mainMenu_anim.playSegments([1, 3600], false);
}

function changeScreen() {
    if (screenState == 0) {
        animContainer.removeEventListener('mouseover', pauseMainMenu);
        animContainer.removeEventListener('mouseout', playMainMenu);
        mainMenu_anim.goToAndPlay(5430, true);
        setTimeout(function () {
            mainMenu_anim.destroy();
            loadMainVideo();
            screenState++;
        }, 1000);
    }
}

function loadMainVideo() {
    animContainer.appendChild(videoElement);
    videoElement.appendChild(videoSource);

    setTimeout(function () {
        videoElement.pause();
        videoElement.load();
        videoElement.play();
    }, 1);

    videoElement.onended = function () {
        removeElements();
        location.reload();
        screenState = 0;
    }
}

function removeElements() {
    videoElement.removeChild(videoSource);
    animContainer.removeChild(videoElement);
}

function pauseMainMenu() {
    mainMenu_anim.goToAndPlay(5411, true);
    setTimeout(function () {
        // mainMenu_anim.pause();
        mainMenu_anim.goToAndStop(5430, true);
    }, 340);
}

function playMainMenu() {
    mainMenu_anim.setDirection(-1);
    mainMenu_anim.goToAndPlay(5430, true);
    setTimeout(function () {
        mainMenu_anim.setDirection(1);
        mainMenu_anim.goToAndPlay(1, true);
    }, 340);
}