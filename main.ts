function show_omg () {
    for (let index2 = 0; index2 <= omg.length - 1; index2++) {
        strip.setPixelColor(omg[index2], neopixel.colors(NeoPixelColors.Violet))
        strip.show()
    }
    basic.pause(1000)
    strip.clear()
    strip.show()
    soundExpression.mysterious.play()
}
function show_frown () {
    soundExpression.sad.play()
    for (let index2 = 0; index2 <= frown.length - 1; index2++) {
        strip.setPixelColor(frown[index2], neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    basic.pause(500)
    strip.clear()
    strip.show()
}
function show_eyes () {
    for (let index = 0; index <= botheyes.length - 1; index++) {
        strip.setPixelColor(botheyes[index], neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    basic.pause(100)
    strip.clear()
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    show_smile()
})
function show_smile () {
    soundExpression.giggle.play()
    for (let index2 = 0; index2 <= smile.length - 1; index2++) {
        strip.setPixelColor(smile[index2], neopixel.colors(NeoPixelColors.Violet))
        strip.show()
    }
    basic.pause(500)
    strip.clear()
    strip.show()
}
function init () {
    nose = 14
    lefteye = 15
    righteye = 16
    botheyes = [15, 16]
    smile = [
    0,
    1,
    2,
    3,
    4,
    5
    ]
    frown = [
    0,
    5,
    6,
    7,
    8,
    9
    ]
    omg = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
    ]
}
input.onButtonPressed(Button.AB, function () {
    show_frown()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 6; index++) {
        show_eyes()
        basic.pause(100)
    }
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
let smile: number[] = []
let botheyes: number[] = []
let frown: number[] = []
let omg: number[] = []
let strip: neopixel.Strip = null
music.setBuiltInSpeakerEnabled(true)
music.setVolume(208)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
strip = neopixel.create(DigitalPin.P1, 17, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
init()
