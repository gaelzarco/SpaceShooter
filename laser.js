function fireLaser (ship) {
    let laser = createLaser(ship)
    document.getElementById('main').appendChild(laser)
    let laserSFx = new Audio('assets/laserSFX.wav')
    laserSFx.play()
    moveLaser(laser)
}

function createLaser(ship) {
    let xPos = parseInt(window.getComputedStyle(ship).getPropertyValue('left'))
    let yPos = parseInt(window.getComputedStyle(ship).getPropertyValue('top'))
    let newLaser = document.createElement('img')
    newLaser.src = 'assets/laser.png'
    newLaser.style.left = `${xPos}px`
    newLaser.style.top = `${yPos}px`
    newLaser.style.position = 'relative'
    return newLaser
}

function moveLaser(laser) {
    setInterval(() => {
        let xPos = parseInt(laser.style.left)
        if (xPos === 800) {
            laser.remove()
        } else {
            laser.style.left = `${xPos + 4}px`
        }
    }, 10)
}