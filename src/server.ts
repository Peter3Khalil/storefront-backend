// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/index';
// import userModel from './model/userModel';
// import { Request, Response } from 'express';
const app = express();
// const usermodel = new userModel();
dotenv.config();
const port = 4000 || process.env.PORT;
// app.use(routes);
// app.use(express.json());
app.use(bodyParser());
// app.post('/test', async (req: Request, res: Response) => {
//     const result = await usermodel.create(req.body);
//     res.json(result);
// });
app.listen(port, () => {
    console.log(
        `the server listening on port : ${port} http://localhost:${port}`
    );
});
app.use(routes);
export default app;
