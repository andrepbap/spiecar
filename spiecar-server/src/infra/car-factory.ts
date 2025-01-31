import Car from "../domain/car";
import Engine from "../domain/engine";

export namespace CarFactory {
    export function createCar(): Car {
        const args = process.argv.slice(2);
        const carType = args[0];

        let engine: Engine;

        if (carType === 'dev') {
            const FakeEngine = require('../domain/fake-engine').default;
            engine = new FakeEngine();
        } else {
            const PiEngine = require('../domain/pi-engine').default;
            engine = new PiEngine();
        }

        return new Car(engine);
    }
}