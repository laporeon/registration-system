import express, { Request, Response } from 'express';

import 'dotenv/config';
import env from '@config/env';

const app = express();

const PORT = env.port || 3000;
console.log(PORT);

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Hello!' });
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
