import { GatewayIntentBits, Partials, ActivityType } from "discord.js";
import CustomClient from "./extensions/custom-client";

require("dotenv").config();

const ClientConfig = require("../config/client.json");
const client = new CustomClient(ClientConfig);

["events", "commands"].forEach((file: String) => {
  require(`./handlers/${file}`)(client);
});

if (process.env.BOT_TOKEN) {
  client.login(process.env.BOT_TOKEN).catch((err: any) => {
    console.error(err);
  });
} else {
  console.error("No BOT_TOKEN found in .env file");
}

module.exports = client;
