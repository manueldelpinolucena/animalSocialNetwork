import express from "express";
import bodyParser from "body-parser";
import { logger } from "./tools/logger";
import { errorHandler } from "./tools/errorHandler";
import appController from "./app.controller";
import { mySqlConnection } from "./tools/mySqlConnection";
import userService from "./user/user.service";

const app = express();
app.use(bodyParser.json());
app.use("/api", appController);
app.use(errorHandler);

mySqlConnection().then((pool) => {
  userService.init(pool);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger(`Up and running on port ${PORT}!`));
