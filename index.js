import express from "express";
import cors from "cors";

import tasksRoutes from "./routes/tasks.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', tasksRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
