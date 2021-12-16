
    const main = document.getElementById('main')
    main.style.backgroundimage = "url('stars.gif')"
    main.style.height = '900px'
    main.style.width = '800px'
    main.style.margin = 'auto'

    const playerShip = newShip(400,250)

    const bgMusic1 = new Audio('gameMusic1.wav'),
    bgMusic2 = new Audio('gameMusic2.wav'),
    bgMusic3 = new Audio('gameMusic3.wav')

    const gameMusic = [bgMusic1, bgMusic2, bgMusic3]

    const rand = gameMusic[Math.floor(Math.random()*gameMusic.length)]

    rand.play()

    rand.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

function newShip(x, y) {
    const element = document.getElementById('playership')
    element.style.zIndex = 1;

    move(element).withArrowKeys(x, y)

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

        function difference() {
            let elemRect = element.getBoundingClientRect(),
            mainRect = main.getBoundingClientRect(),
            offset = elemRect.top - mainRect.top;
            console.log('Element is ' + offset + ' vertical pixels from main div')
        }
        setInterval(difference, 500)

        function moveShip(){
            if(direction === 'west') {
                x-=1
            }
            if (direction === 'north') {
                y+=1
           }
            if (direction === 'east') {
                x+=1
            }
            if (direction === 'south') {
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
        })

        document.addEventListener('keyup', function(e) {
            direction = null
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}