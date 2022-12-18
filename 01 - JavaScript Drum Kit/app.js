// const keyArray = document.querySelectorAll('.key');
// const soundsArray = document.querySelectorAll('audio');

function playSound(note) {
    clone = note.cloneNode();
    clone.play();
}

// function playSound(note) {
//     note.currentTime = 0;
//     note.play();
// }

// window.addEventListener('keydown', function (e) {
//     if (e.keyCode === 65) {
//         keyArray[0].classList.add('playing');
//         playSound(soundsArray[0]);
//         this.setTimeout(function () {
//             keyArray[0].classList.remove('playing');
//         }, 100);
//     }
// });

window.addEventListener('keydown', function (e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!key) return;
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    setTimeout(function () {
        key.classList.remove('playing');
    }, 100);

    playSound(sound);
});