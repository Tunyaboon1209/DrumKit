// add event listener to each button to play a diference drum sound.
document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {

        makesound(btn.innerHTML);

        activeButton(btn.innerHTML);
    })
});

// add event listener to keyboard.
document.addEventListener('keypress', (event) => {

    makesound(event.key);

    activeButton(event.key);

});

// makesound function
function makesound(key) {
    switch (key) {
        case 'w':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            case 'a':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case 'j':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case 'k':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case 'l':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            default :
    }
}

// active animation to button
function activeButton(curentButton) {
    var curentButton = document.querySelector('.' + curentButton)
    curentButton.classList.add('pressed');
    setTimeout(() => {
        curentButton.classList.remove('pressed');
    }, 100);
}