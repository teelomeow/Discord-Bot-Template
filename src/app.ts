import { GatewayIntentBits, Partials, ActivityType } from "discord.js";
import CustomClient from "./extensions/custom-client";
import * as Logger from "./utils/logger";

require("dotenv").config();

const ClientConfig = require("../config/client.json");
const client = new CustomClient(ClientConfig);

if (process.env.BOT_TOKEN) {
  client.login(process.env.BOT_TOKEN).catch((err: any) => {
    Logger.error(err);
  });

  ["events", "commands"].forEach((file: String) => {
    require(`./handlers/${file}`)(client);
  });
} else {
  Logger.error("No BOT_TOKEN found in .env file");
}

module.exports = client;
