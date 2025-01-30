import Engine from "./engine";

export default class VirtualEngine implements Engine {
    moveForward(): void {
        console.log("Moving forward");
    }

    moveBackward(): void {
        console.log("Moving backward");
    }

    turnRight(): void {
        console.log("Turning right");
    }

    turnLeft(): void {
        console.log("Turning left");
    }

    stop(): void {
        console.log("Stopping");
    }
}