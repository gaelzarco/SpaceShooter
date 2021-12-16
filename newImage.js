function newImage (url) {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    main.append(image)
    return image
}