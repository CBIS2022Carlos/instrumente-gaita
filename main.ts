input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        music.rest(music.beat(BeatFraction.Quarter))
        if (input.lightLevel() < 80) {
            music.playTone(523, music.beat(BeatFraction.Half))
        } else {
            if (input.lightLevel() < 160) {
                music.playTone(880, music.beat(BeatFraction.Half))
            } else {
                music.playTone(175, music.beat(BeatFraction.Half))
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    music.changeTempoBy(-20)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(20)
})
music.setTempo(120)
basic.forever(function () {
    for (let index = 0; index < 20; index++) {
        music.rest(music.beat(BeatFraction.Quarter))
        if (input.lightLevel() < 80) {
            music.playTone(131, music.beat(BeatFraction.Half))
        } else {
            if (input.lightLevel() < 160) {
                music.playTone(220, music.beat(BeatFraction.Half))
            } else {
                music.playTone(698, music.beat(BeatFraction.Half))
            }
        }
    }
})
