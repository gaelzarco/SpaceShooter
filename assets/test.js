
    const main = document.getElementById('main')
    main.style.backgroundimage = "url('stars.gif')"
    main.style.height = '90vh'
    main.style.width = '90vw'
    main.style.margin = 'auto'

    const playerShip = newShip(400,400)

    const bgMusic1 = new Audio('gameMusic1.wav')
    bgMusic1.volume = 0.5,

    bgMusic2 = new Audio('gameMusic2.wav')
    bgMusic2.volume = 0.5,

    bgMusic3 = new Audio('gameMusic3.wav')
    bgMusic3.volume = 0.5 

    const gameMusic = [bgMusic1, bgMusic2, bgMusic3]

    const rand = gameMusic[Math.floor(Math.random()*gameMusic.length)]

    // rand.play()

    rand.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);


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
                x-=1
            }
            if (direction === 'north' && topOffset > 0) {
                y+=1
           }
            if (direction === 'east' && rightOffset > 0) {
                x+=1
            }
            if (direction === 'south' && bottomOffset > 0) {
                y-=1
            }

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        setInterval(moveShip, 1)

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
            if (e.key === ' ') {
                shoot = true
            }
        })

        document.addEventListener('keyup', function(e) {
            direction = null
            shoot = false
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
    setInterval(shootLaser, 100)

    document.addEventListener('keydown', function(e) {
        if (e.key === ' ') {
            shoot = true
        }
    })

    document.addEventListener('keyup', function(e) {
        direction = null
        shoot = false
    })

    return {
        shoot: shootLaser
    }
}

function createLaser() {
    let x = document.getElementById('playership').getBoundingClientRect().left
    let y = document.getElementById('playership').getBoundingClientRect().top
    let newLaser = document.createElement('img')
    newLaser.src = 'laser.jpg'
    newLaser.classList.add('laser')
    newLaser.style.left = `${x + 10}px`
    newLaser.style.top = `${y - 10}px`
    return newLaser
}

function fireLaser() {
    let laser = createLaser()
    main.appendChild(laser)
    let laserSFX = new Audio('laserSFX.wav')
    laserSFX.play()
}