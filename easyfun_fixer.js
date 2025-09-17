const button = document.querySelector(
    '.button.size-9.bg-white-1.bg-op-10.c-white-1.hover\\:c-cyan-5'
);
const fullscreenElement = document.getElementById('fullscreen-element');

function getNewID() {
    let hex = "";
    for (let i = 0; i < 32; i++) {
        hex += Math.floor(Math.random() * 16).toString(16);
    }
    return hex;
}

function newFingerprint() {
    localStorage.setItem('EASYFUN_FINGER_PRINT', getNewID());
    localStorage.setItem('EASYFUN_LOGIN_SOURCE', 3);
}

function getLocalStorageData() {
    Object.keys(localStorage).forEach(key => {
        console.log(`${key}: ${localStorage.getItem(key)}`);
    });
}

newFingerprint();
getLocalStorageData();

window.addEventListener("contextmenu", (e) => e.preventDefault());
if (button && fullscreenElement) {
    button.addEventListener('click', () => {
          if (fullscreenElement.requestFullscreen) {
            fullscreenElement.requestFullscreen();
          } else if (fullscreenElement.webkitRequestFullscreen) { // Safari
            fullscreenElement.webkitRequestFullscreen();
          } else if (fullscreenElement.msRequestFullscreen) { // IE/Edge
            fullscreenElement.msRequestFullscreen();
          }
    });
}
