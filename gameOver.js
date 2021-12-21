function gameOver() {
    let ship = document.getElementById('playership')
    ship.style.display = 'none'
    clearInterval(enemyInterval)
    rand.pause()
    menuAudio.play()
    let enemies = document.querySelectorAll('.enemy')
    enemies.forEach(enemy => enemy.remove())
    let lasers = document.querySelectorAll('.laser')
    lasers.forEach(laser => laser.remove())

    let endHeader = document.createElement('h1')
    let endText = document.createTextNode('The Hope of The Universe Has Been Lost')
    endHeader.style.textAlign = 'center'
    endHeader.style.position = 'relative'
    endHeader.style.top = '35%'
    endHeader.appendChild(endText)
    main.appendChild(endHeader)

    let endScore = document.createElement('h1')
    let endScoreText = document.createTextNode('Final Score : ' + score.innerText)
    endScore.style.textAlign = 'center'
    endScore.style.position = 'relative'
    endScore.style.top = '45%'
    endScore.appendChild(endScoreText)
    main.appendChild(endScore)

    let scoreDiv = document.getElementById('score')
    scoreDiv.style.display = 'none'
}