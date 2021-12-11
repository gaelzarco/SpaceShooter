function newShip(x, y) {
    const element = newImage('assets/ship/shipN.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        // if (direction === null) {
        //     element.src = `assets/spaceshipp.gif`
        // }
        if (direction === 'west') {
            element.src = `assets/ship/shipW.png`
        }
        if (direction === 'north') {
            element.src = `assets/ship/shipN.png`
        }
        if (direction === 'east') {
            element.src = `assets/ship/shipE.png`
        }
        if (direction === 'south') {
            element.src = `assets/ship/shipS.png`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}