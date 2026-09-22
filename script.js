const orbit = document.querySelector('.orbit');
const fox = document.querySelector('.fox');

// Change speed of orbit
function changeSpeed(seconds) {
    orbit.style.animation = `spin ${seconds}s linear infinite`;
}

function changeColor(color) {
    switch(color) {
        case 'orange':
            fox.style.filter = "hue-rotate(0deg)";
            break;
        case 'white':
            fox.style.filter = "brightness(2) saturate(0)";
            break;
        case 'blue':
            fox.style.filter = "hue-rotate(200deg)";
            break;
        case 'red':
            fox.style.filter = "hue-rotate(330deg)";
            break;
        case 'green':
            fox.style.filter = "hue-rotate(120deg)";
            break;
        case 'purple':
            fox.style.filter = "hue-rotate(270deg)";
            break;
        case 'pink':
            fox.style.filter = "hue-rotate(300deg) brightness(1.3)";
            break;
        case 'yellow':
            fox.style.filter = "hue-rotate(60deg) brightness(1.4)";
            break;
    }
}

