radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoSetPulse(AnalogPin.P2, 45)
        basic.showIcon(IconNames.Square)
    }
    if (receivedNumber == 2) {
        pins.servoSetPulse(AnalogPin.P2, 125)
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
basic.showIcon(IconNames.Angry)
radio.setGroup(8)
basic.forever(function () {
	
})
