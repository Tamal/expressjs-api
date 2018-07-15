import { Request, Response } from 'express';

export let warmup = (req: Request, res: Response) => {
  // Handle your warmup logic. Initiate db connection, etc.
  console.log('Just warming up... ;)');
  res.sendStatus(200);
};