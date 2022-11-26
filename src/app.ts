import express, { Response, Request, Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app: Express = express();
const client = new PrismaClient();
app.use(cors());
app.use(express.json());

app.get("/lamp", async (req: Request, res: Response) => {
  await client.lamp
    .findMany()
    .then((lamps) => {
      res.status(200).json(lamps);
    })
    .catch((e) => {
      res.status(400).json({ error: e });
    });
  return;
});

app.post("/lamp/:status", async (req: Request, res: Response) => {
  const param = String(req.params.status);
  let status = false;
  if (param == "on") {
    status = true;
  }

  await client.lamp
    .create({
      data: {
        status: status,
      },
    })
    .then((lamp) => {
      res.status(200).json(lamp);
    })
    .catch((e) => {
      res.status(400).json({ error: e });
    });

  return;
});

const port = process.env.PORT;
export const server = app.listen(port, () => {
  console.log(`Server started at http://${process.env.HOSTNAME}:${port}`);
});
