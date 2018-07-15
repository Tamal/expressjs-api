import { Request, Response } from 'express';
import config from 'config';

export let getConfig = (req: Request, res: Response) => {
  res.json({
    config: config,
    mongo: process.env.MONGODB_URI_LOCAL,
    NODE_ENV: process.env.NODE_ENV
  });
};