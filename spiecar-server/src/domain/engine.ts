export default interface Engine {
    moveForward(): void;
    moveBackward(): void;
    turnRight(): void;
    turnLeft(): void;
    stop(): void;
}