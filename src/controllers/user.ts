import { Request, Response } from 'express';

export let getUser  = (req: Request, res: Response) => {
  res.json({id: 1, name: 'John Appleseed'});
};

export let postUser  = (req: Request, res: Response) => {
  const data = {
    id: 1,
    name: req.body.name
  };
  res.json(data);
};