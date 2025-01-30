# Spiecar Server

A Raspberry Pi API for the spy car project.

## Description

This project provides an API to control a spy car using a Raspberry Pi. The car can move forward, backward, turn right, turn left, and stop.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the Spicar API, clone the repository and install the dependencies:

```bash
git clone https://github.com/andrepbap/spicar-api.git
cd spicar-api
npm install
```

## Usage

To start the server, run:

```bash
npm start
```

The server will start on `http://localhost:3000`.

## Endpoints

### POST /car/move/:command

Moves the car based on the command provided. The command can be one of the following:

- forward
- backward
- right
- left
- stop

Example:

```
curl -X POST http://localhost:3000/car/move/forward
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.