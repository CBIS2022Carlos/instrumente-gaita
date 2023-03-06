input.onButtonPressed(Button.AB, function () {
    music.changeTempoBy(-20)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(20)
})
music.setTempo(120)
basic.forever(function () {
	
})
basic.forever(function () {
    if (true) {
    	
    } else if (input.compassHeading() < 45 && input.compassHeading() < 315) {
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
    } else if (input.compassHeading() < 90 && input.compassHeading() < 135) {
        for (let index = 0; index < 20; index++) {
            music.rest(music.beat(BeatFraction.Quarter))
            if (input.lightLevel() < 80) {
                music.playTone(139, music.beat(BeatFraction.Half))
            } else {
                if (input.lightLevel() < 160) {
                    music.playTone(233, music.beat(BeatFraction.Half))
                } else {
                    music.playTone(740, music.beat(BeatFraction.Half))
                }
            }
        }
    } else if (input.compassHeading() < 180 && input.compassHeading() < 225) {
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
    } else if (input.compassHeading() < 270 && input.compassHeading() < 315) {
        for (let index = 0; index < 20; index++) {
            music.rest(music.beat(BeatFraction.Quarter))
            if (input.lightLevel() < 80) {
                music.playTone(554, music.beat(BeatFraction.Half))
            } else {
                if (input.lightLevel() < 160) {
                    music.playTone(932, music.beat(BeatFraction.Half))
                } else {
                    music.playTone(185, music.beat(BeatFraction.Half))
                }
            }
        }
    }
})
basic.forever(function () {
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
