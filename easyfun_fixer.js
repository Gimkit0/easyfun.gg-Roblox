const fullscreenElement = document.getElementById('fullscreen-element');
const clearFingerprint = document.getElementById('clear-fingerprint');

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
    localStorage.setItem('MwU92MD4slarNjdgil3boe', {"3":1758091983240});
}

function getLocalStorageData() {
    Object.keys(localStorage).forEach(key => {
        console.log(`${key}: ${localStorage.getItem(key)}`);
    });
}

//newFingerprint();
getLocalStorageData();

window.addEventListener("contextmenu", (e) => e.preventDefault());

clearFingerprint.addEventListener('click', () => {
    newFingerprint();
    getLocalStorageData();

    window.location.reload();
});
