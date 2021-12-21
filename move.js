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