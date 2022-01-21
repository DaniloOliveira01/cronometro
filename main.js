
function getForHours (seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
const relogio = document.querySelector('#relogio')
let seconds = 0;
let timer;

function playTimer () {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getForHours(seconds);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        playTimer();
    }

    if(el.classList.contains('pausar')) {
        
        clearInterval(timer);
    }

    if(el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        seconds = 0;  
    }
});



