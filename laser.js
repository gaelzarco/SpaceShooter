document.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        fireLaser(ship)
    }
})

function fireLaser (ship) {
    let laser = createLaser(ship)
    document.getElementById('main').appendChild(laser)
    let laserSFx = new Audio('assets/laserSFX.wav')
    laserSFx.play()
    moveLaser(laser)
}

function createLaser(ship) {
    let shipPos = ship.getPosition()
    let xPos = shipPos.x
    let yPos = shipPos.y
    let newLaser = document.createElement('img')
    newLaser.src = 'assets/laser.png'
    newLaser.style.left = `${xPos}px`
    newLaser.style.top = `${yPos}px`
    newLaser.style.position = 'relative'
    return newLaser
}

function shipPos() {
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPos = parseInt(laser.style.left)
        if (xPos === 800) {
            laser.remove()
        } else {
            laser.style.left = `${xPos + 4}px`
        }
    }, 10)
}