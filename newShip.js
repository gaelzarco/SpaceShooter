function newShip(x, y) {
    const element = document.getElementById('playership')
    element.style.zIndex = 1;

    move(element).withArrowKeys(x, y)
    whenSpaceBarPressed().shoot()

    return {
        element: element
    }
}