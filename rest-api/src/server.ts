
import * as express from 'express';
import { root } from './routes/root';

const app = express();

function setupExpress() {

    // http://localhost:9000/
    app.route("/").get(root);

}

function startServer() {

    console.log(process.argv);
    app.listen(9000, () => {
        console.log(`HTTP REST API Server is now running at http://localhost:9000`);
    });
}

setupExpress();
startServer();