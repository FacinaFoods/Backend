import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routers';
import { errorMiddleware } from './middlewares/error';

const app = express();

// linha abaixo le o corpo da requisiçao

app.use(express.json());
app.use(cors());

app.use(router)

// app.use(errorMiddleware)

export default app