function show_eyes () {
    for (let index = 0; index <= botheyes.length - 1; index++) {
        strip.setPixelColor(botheyes[index], neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    basic.pause(100)
    strip.clear()
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    show_nose()
})
function init () {
    nose = 14
    lefteye = 15
    righteye = 16
    botheyes = [15, 16]
}
input.onButtonPressed(Button.B, function () {
    show_eyes()
})
function show_nose () {
    strip.setPixelColor(nose, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(200)
    strip.clear()
    strip.show()
}
let righteye = 0
let lefteye = 0
let nose = 0
let botheyes: number[] = []
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 17, NeoPixelMode.RGB)
init()
strip.setBrightness(32)
strip.clear()
strip.show()
basic.forever(function () {
	
})
