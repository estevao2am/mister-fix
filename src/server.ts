import cors from "cors";
import "dotenv/config";
import express from "express";

// importing all appRouters

import { router } from "./routers";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
