import * as dotenv from 'dotenv';
import path = require('path');
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { router } from './routes/index';
import * as cors from 'cors';
import { UPLOAD } from './common/constant';

class App {
        public app: express.Application;

        constructor() {
                dotenv.config();
                this.app = express();
                this.app.use(bodyParser.json());
                this.app.use(cors());
                this.app.use(router);
                this.app.use(`/${UPLOAD.FOLDER}`, express.static(path.resolve(__dirname, "..", ".", UPLOAD.FOLDER)));
                this.app.use(express.json());
        }

}

export default new App().app;