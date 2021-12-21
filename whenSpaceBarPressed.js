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