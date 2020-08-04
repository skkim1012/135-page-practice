OLED.init(128, 64)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        OLED.writeStringNewLine("warning")
        while (pins.digitalReadPin(DigitalPin.P1) == 1) {
            pins.digitalWritePin(DigitalPin.P5, 0)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P5, 1)
            basic.pause(100)
        }
    } else {
        OLED.writeStringNewLine("safe")
        while (pins.digitalReadPin(DigitalPin.P1) == 0) {
            basic.showIcon(IconNames.Heart)
        }
    }
})
