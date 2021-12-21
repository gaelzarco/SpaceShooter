const enemyImgs = ['assets/enemy/alien.gif', 'assets/enemy/asteroid.gif', 'assets/enemy/ufo.gif']

function createEnemy() {
    let newEnemy = document.createElement('img'),
    enemyImg = enemyImgs[Math.floor(Math.random()*enemyImgs.length)];

    newEnemy.src = enemyImg
    newEnemy.classList.add('enemy')
    newEnemy.style.top = '0px'
    newEnemy.style.left = `${Math.floor(Math.random() * 720)}px`
    main.appendChild(newEnemy)
    moveEnemy(newEnemy)
}

function moveEnemy(enemy) {
    setInterval(() => {
        let y = parseInt(window.getComputedStyle(enemy).getPropertyValue('top'))
        // COULD NOT GET COLLISION WORKING
        // enemy.forEach(enemy => {
        //     if (shipCollision(enemy, shipLeft, shipTop)) {
        //         gameOver()
        //     }
        // })
        if (y >= 740) {
            gameOver()
        } else {
            enemy.style.top = `${y + 3}px`
        }
    }, 20)
}