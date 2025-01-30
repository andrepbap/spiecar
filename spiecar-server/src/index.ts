import express, { Request, Response } from 'express';
import { CarFactory } from './infra/car-factory';
import { Command } from './enums/command';

const app = express();
const car = CarFactory.createCar();

app.post('/car/move/:command', (req: Request, res: Response) => {
    const command = req.params.command as Command;

    car.move(command);

    res.status(200).send('Command executed');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});