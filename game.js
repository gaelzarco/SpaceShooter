function createAssets() {
    document.body.style.backgroundImage = "url('assets/background.png')"
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100vh'

    const bgMusic1 = new Audio('assets/gameMusic1.wav')
    const bgMusic2 = new Audio('assets/gameMusic2.wav')
    const bgMusic3 = new Audio('assets/gameMusic3.wav')

    let gameMusic = [bgMusic1, bgMusic2, bgMusic3]

    let rand = gameMusic[Math.floor(Math.random()*gameMusic.length)]

    //rand.play()

}

document.addEventListener('DOMContentLoaded', createAssets())