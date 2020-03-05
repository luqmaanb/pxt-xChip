light.setAll(0xff0000)
forever(function () {
    light.showAnimation(light.rainbowAnimation, 500)
    light.graph(0)
    music.baDing.play()
})
