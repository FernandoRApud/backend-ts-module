import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('this is homepage');
});

app.listen(port, () => {
  console.log(`Server is running at port number ${port}`);
});
