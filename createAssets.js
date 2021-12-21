const bgMusic1 = new Audio('assets/sfx/gameMusic1.wav')
bgMusic1.volume = 0.4
    
const bgMusic2 = new Audio('assets/sfx/gameMusic2.wav')
bgMusic2.volume = 0.4
    
const bgMusic3 = new Audio('assets/sfx/gameMusic3.wav')
bgMusic3.volume = 0.4
    
const gameMusic = [bgMusic1, bgMusic2, bgMusic3],
    
rand = gameMusic[Math.floor(Math.random()*gameMusic.length)];

const playerShip = newShip(400,400),
main = document.getElementById('main'),
score = document.querySelector('#score span'),
menuAudio = new Audio('assets/sfx/menu.flac');


let startBtn = document.getElementById('start'),
flavorText = document.getElementById('flavortext');

let enemyInterval;
menuAudio.play()

startBtn.addEventListener('click',() => {
    createAssets()
})

function createAssets() {
    startBtn.style.display = 'none'
    flavorText.style.display = 'none'
    menuAudio.pause()

    enemyInterval = setInterval(createEnemy, 1000)

    rand.play()

    rand.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
} 