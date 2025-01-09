radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
        basic.pause(200)
        Kitronik_Move_Motor.stop()
    }
    if (receivedNumber == 2) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 100)
        basic.pause(200)
        Kitronik_Move_Motor.stop()
    }
    if (receivedNumber == 3) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 100)
        basic.pause(200)
        Kitronik_Move_Motor.stop()
    }
    if (receivedNumber == 0) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 100)
        basic.pause(100)
        Kitronik_Move_Motor.stop()
    }
})
radio.setGroup(102)
