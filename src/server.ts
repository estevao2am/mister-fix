import cors from "cors";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";

// importing all appRouters

import { router } from "./routers";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.use((error: Error, _: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    error: "Internal server error",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
