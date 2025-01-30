import { Command } from "../enums/command";
import Engine from "./engine";

export default class Car {
    private movementMap = {
        forward: this.engine.moveForward,
        backward: this.engine.moveBackward,
        right: this.engine.turnRight,
        left: this.engine.turnLeft,
        stop: this.engine.stop
    }

    constructor(private readonly engine: Engine) {}

    move(command: Command) {
        this.movementMap[command]();
    }
}