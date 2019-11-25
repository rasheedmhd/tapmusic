window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads   = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    const colors = [
        '#571845',
        '#ffc300',
        '#900c3e',
        '#ff5733',
        '#00f784',
        '#f309d4'
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //creating a function to throw bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', () => {
            visual.removeChild(this);
        });
    }

});



