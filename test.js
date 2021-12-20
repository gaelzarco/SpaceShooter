const playerShip = newShip(400,400),
score = document.querySelector('#score span')
menuAudio = new Audio('assets/sfx/menu.flac');
menuAudio.play()


let startBtn = document.getElementById('start'),
flavorText = document.getElementById('flavortext');

startBtn.addEventListener('click',() => {
    createAssets()
})

function createAssets() {
    startBtn.style.display = 'none'
    flavorText.style.display = 'none'
    menuAudio.pause()

    setInterval(createEnemy, 1500)

    const bgMusic1 = new Audio('assets/sfx/gameMusic1.wav')
    bgMusic1.volume = 0.4,
    
    bgMusic2 = new Audio('assets/sfx/gameMusic2.wav')
    bgMusic2.volume = 0.4,
    
    bgMusic3 = new Audio('assets/sfx/gameMusic3.wav')
    bgMusic3.volume = 0.4; 
    
    const gameMusic = [bgMusic1, bgMusic2, bgMusic3],
    
    rand = gameMusic[Math.floor(Math.random()*gameMusic.length)];

    rand.play()

    rand.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}    

function newShip(x, y) {
    const element = document.getElementById('playership')
    element.style.zIndex = 1;

    move(element).withArrowKeys(x, y)
    whenSpaceBarPressed().shoot()

    return {
        element: element
    }
}

function move(element) {
    element.style.position = 'fixed'
 
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom) {
        let direction = null,
        x = left,
        y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveShip(){
            let elemRect = element.getBoundingClientRect(),
            mainRect = main.getBoundingClientRect(),

            topOffset = elemRect.top - mainRect.top,
            bottomOffset = mainRect.bottom - elemRect.bottom,
            leftOffset = elemRect.left - mainRect.left,
            rightOffset = mainRect.right - elemRect.right;

            if(direction === 'west' && leftOffset > 0) {
                x -= 4 
            }
            if (direction === 'north' && topOffset > 0) {
                y += 4
           }
            if (direction === 'east' && rightOffset > 0) {
                x += 4
            }
            if (direction === 'south' && bottomOffset > 0) {
                y -= 4
            }

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        setInterval(moveShip, 10)

        document.addEventListener('keydown', function(e) {
            if (e.repeat) return

            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key ==='ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
        })

        document.addEventListener('keyup', function() {
            direction = null
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys,
    }
}

function whenSpaceBarPressed() {
    shoot = false;

    function shootLaser() {
        if (shoot === true) {
            fireLaser()
        }
    }
    setInterval(shootLaser, 200)

    document.addEventListener('keydown', function(e) {
        if (e.key === ' ') {
            shoot = true
        }
    })

    document.addEventListener('keyup', function(e) {
        shoot = false
    })

    return {
        shoot: shootLaser
    }
}

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
                let explosion = new Audio('assets/sfx/explosion_1.wav')
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

const enemyImgs = ['assets/enemy/alien.gif', 'assets/enemy/asteroid.gif', 'assets/enemy/ufo.gif']

function createEnemy() {
    let newEnemy = document.createElement('img'),
    enemyImg = enemyImgs[Math.floor(Math.random()*enemyImgs.length)];

    newEnemy.src = enemyImg
    newEnemy.classList.add('enemy')
    newEnemy.style.top = '0px'
    newEnemy.style.left = `${Math.floor(Math.random() * 720) + 30}px`
    main.appendChild(newEnemy)
    moveEnemy(newEnemy)
}

function moveEnemy(enemy) {
    setInterval(() => {
        let y = parseInt(window.getComputedStyle(enemy).getPropertyValue('top'))
        if (y >= 740) {
            enemy.remove()
        } else {
            enemy.style.top = `${y + 3}px`
        }
    }, 20)
}

function laserCollision(laser, enemy, shipTop) {
    let laserLeft = parseInt(laser.style.left),
    laserTop = parseInt(laser.style.top),
    enemyTop = parseInt(enemy.style.top),
    enemyLeft = parseInt(enemy.style.left),
    enemyRight = enemyLeft + 90;
    if(laserTop > 20 && laserTop - 70 < enemyTop) {
        if(laserLeft >= enemyLeft && laserLeft <= enemyRight) {
            if (shipTop > enemyTop) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}