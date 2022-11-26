import express, { Response, Request, Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});

const port = process.env.PORT;
export const server = app.listen(port, () => {
  console.log(`Server started at http://${process.env.HOSTNAME}:${port}`);
});
