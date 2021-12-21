function createLaser() {
    let x = parseInt(document.getElementById('playership').getBoundingClientRect().left)
    let y = parseInt(document.getElementById('playership').getBoundingClientRect().top)
    let newLaser = document.createElement('img')
    newLaser.src = 'assets/laser/laser.png'
    newLaser.classList.add('laser')
    newLaser.style.left = `${x + 23}px`
    newLaser.style.top = `${y}px`
    return newLaser
}

function fireLaser() {
    let laser = createLaser()
    main.appendChild(laser)
    let laserSFX = new Audio('assets/laser/laserSFX.wav')
    laserSFX.play()
    moveLaser(laser)
}

function moveLaser(laser) {
    setInterval(() => {
        let y = parseInt(laser.style.top)
        let shipTop = parseInt(document.getElementById('playership').getBoundingClientRect().top)
        let enemy = document.querySelectorAll('.enemy')
        enemy.forEach(enemy => {
            if (laserCollision(laser, enemy, shipTop)) {
                let explosion = new Audio('assets/sfx/explosion.wav')
                explosion.play()
                enemy.remove()
                laser.remove()
                score.innerText = parseInt(score.innerText) + 100
            }
        })
        if (y <= 5) {
            laser.style.display = 'none'
            laser.remove()
        } else {
            laser.style.top = `${y - 4}px`
        }
    }, 10)
}