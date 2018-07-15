import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

// Load environment variables from .env file,
// where API keys and passwords are configured
dotenv.config();

import * as userController from './controllers/user';
import * as pingController from './controllers/ping';
import * as warmupController from './controllers/warmup';

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', userController.getUser);
app.post('/users', userController.postUser);
app.get('/ping', pingController.getConfig);
app.get('/_ah/warmup', warmupController.warmup);

export default app;