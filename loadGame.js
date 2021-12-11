function createAssets() {
    document.body.style.backgroundColor = 'black'

    let main = document.getElementById('main')
    main.style.margin = '1em'
    main.style.backgroundImage = "url('assets/stars.gif')"
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundSize = 'cover'
    main.style.height = '95vh'

    const bgMusic1 = new Audio('assets/gameMusic1.wav')
    const bgMusic2 = new Audio('assets/gameMusic2.wav')
    const bgMusic3 = new Audio('assets/gameMusic3.wav')

    let gameMusic = [bgMusic1, bgMusic2, bgMusic3]

    let rand = gameMusic[Math.floor(Math.random()*gameMusic.length)]

    //rand.play()
}