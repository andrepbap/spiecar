import Engine from "./engine";
const Gpio = require('pigpio').Gpio;

const leftEngineFront = new Gpio(27, {mode: Gpio.OUTPUT});
const leftEngineRear = new Gpio(22, {mode: Gpio.OUTPUT});
const rightEngineFront = new Gpio(17, {mode: Gpio.OUTPUT});
const rightEngineRear = new Gpio(23, {mode: Gpio.OUTPUT});

export default class PiEngine implements Engine {
    moveForward() {
        console.log('Forward');
        leftEngineFront.digitalWrite(1);
        leftEngineRear.digitalWrite(0);
        rightEngineFront.digitalWrite(1);
        rightEngineRear.digitalWrite(0);
    }

    moveBackward() {
        console.log('Backward');
        leftEngineFront.digitalWrite(0);
        leftEngineRear.digitalWrite(1);
        rightEngineFront.digitalWrite(0);
        rightEngineRear.digitalWrite(1);
    }

    turnLeft() {
        console.log('Left');
        leftEngineFront.digitalWrite(0);
        leftEngineRear.digitalWrite(1);
        rightEngineFront.digitalWrite(1);
        rightEngineRear.digitalWrite(0);
    }

    turnRight() {
        console.log('Right');
        leftEngineFront.digitalWrite(1);
        leftEngineRear.digitalWrite(0);
        rightEngineFront.digitalWrite(0);
        rightEngineRear.digitalWrite(1);
    }

    stop() {
        console.log('Stop');
        leftEngineFront.digitalWrite(0);
        leftEngineRear.digitalWrite(0);
        rightEngineFront.digitalWrite(0);
        rightEngineRear.digitalWrite(0);
    }
}