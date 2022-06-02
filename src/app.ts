import express from 'express';
import config from "config";
import connect from "../database/mongodb";
import LOG from "./utils/logger";

const APP = express();
const PORT = config.get<number>("port");

APP.listen(PORT, async () => {
   LOG.info(`🚀 App is running at http://localhost:${PORT}`);
   LOG.error(`🔥 App is crashing`);
   await connect();
 });

 

