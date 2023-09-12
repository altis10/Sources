import * as dotenv from "dotenv";
const result = dotenv.config();
if (result.error) {
    console.log('Error loading the environment variables, aborting...');
    process.exit(1);
}

console.log(process.env.PORT);

import "reflect-metadata";
import * as express from 'express';
import { root } from './routes/root';
import { isInteger } from './utils';
import { logger } from "./logger";
import { AppDataSource } from "./data-source";

const app = express();

function setupExpress() {

    // http://localhost:9000/
    app.route("/").get(root);

}

function startServer() {

    let port : number;
    const portEnv = process.env.PORT,
        portArg = process.argv[2];

    if (isInteger(portEnv)) {
        port = parseInt(portEnv);        
    }
    

    if (!port && isInteger(portArg)) {
        port = parseInt(portArg);
    }

    if (!port) {
        port = 9000;
    }

    app.listen(9000, () => {
        logger.info(`HTTP REST API Server is now running at http://localhost:${port}`);
    });
}

AppDataSource.initialize()
    .then(() => {
        logger.info(`The datasource has been initialized successfully`)
        setupExpress();
        startServer();
    })
    .catch(err => {
        logger.error(`Error during the datasource initialization.`, err);
        process.exit(1);
    })